---
Title: 'PyTorch GPU Acceleration with Cuda'
Description: 'Accelerate training and deep learning models with PyTorch Cuda library.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Parallelism'
  - 'Deep Learning'
  - 'Optimization'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

PyTorch can use **`torch.cuda`** library to set up and run CUDA operations. An example of this function is `.Stream()`, this function can set a linear sequence of execution to do asynchronous tasks.

## Syntax

```pseudo
torch.cuda.Stream(device, priority)
```

- `device`: An integer indicating a device that holds the stream (optional). If this parameter is set to `None` (default) or negative integer, the current device will be chosen.
- `priority`: A set range of negative, zero, or positive integers. The lower the integer the higher the priority. `priority` is set to 0 by default. If the value falls beyond the allowed priority range, the nearest correct priority will be mapped automatically (highest for large negative numbers and lowest for large positive numbers).

## Example

The following Python/PyTorch code section demonstrates a heavy calculation with and without Stream

```py
import torch
import time

# Verify GPU selection else use CPU
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Heavy calculation mathematic
def heavy_computation(tensor):
  return tensor ** 2 + tensor ** 3 ** tensor.sin() ** tensor.cos() + tensor.tan()

# Sample number
size = 10**9
data = torch.randn(size, device=device)

# Create 2 Streams
stream1 = torch.cuda.Stream()
stream2 = torch.cuda.Stream()

# Synchronize all kernels in all Streams before time tracking
torch.cuda.synchronize()

# Start time tracking for Stream calculation
start_time = time.time()

# Asynchronous calculation with Stream
with torch.cuda.stream(stream1):
  result1 = heavy_computation(data[:size // 2])

with torch.cuda.stream(stream2):
  result2 = heavy_computation(data[size // 2:])

# Synchronize all kernels in all Streams before time tracking
torch.cuda.synchronize()

# Stop time tracking for Stream calculation
end_time = time.time()

print(f"Time taken with streams: {end_time - start_time:.3f} seconds")

# Sequential calculation section
torch.cuda.synchronize()
start_time = time.time()

result1_seq = heavy_computation(data[:size // 2])
result2_seq = heavy_computation(data[size // 2:])

torch.cuda.synchronize()
end_time = time.time()

print(f"Time taken without streams: {end_time - start_time:.3f} seconds")
```

See more on [`.time()`](https://github.com/Codecademy/docs/blob/main/content/python/concepts/dates/terms/time/time.md) explanation.

> **Note:** The Stream calculation varies on the complexity of command execution. If the calculation is simple, the stream might slow the operation instead.

## Output

Output example of sample `size = 10\*\*9`

```shell
Time taken with streams: 5.316 seconds
Time taken without streams: 6.551 seconds
```

Output example of sample `size = 10\*\*7`

```shell
Time taken with streams: 0.042 seconds
Time taken without streams: 0.008 seconds
```
