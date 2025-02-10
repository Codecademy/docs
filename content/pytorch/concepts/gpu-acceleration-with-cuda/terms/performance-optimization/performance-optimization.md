---
Title: 'Performance Optimization'
Description: 'Accelerate training and deep learning models with PyTorch CUDA library.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Parallelism'
  - 'Deep Learning'
  - 'Optimization'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`torch.cuda`** library can be used to set up and run CUDA operations. An example of this function is **`.Stream()`**, which can set a linear sequence of execution to do asynchronous tasks.

## Syntax

```pseudo
torch.cuda.Stream(device, priority)
```

- `device`: An integer indicating a device that holds the stream (optional). If this parameter is set to `None` (default) or negative integer, the current device will be chosen.
- `priority`: A set range of negative, zero, or positive integers. The lower the number, the higher the priority. The value is set to `0` by default. If the value falls beyond the allowed priority range, the nearest correct priority will be mapped automatically (highest for large negative numbers and lowest for large positive numbers).

## Example

The following example demonstrates a heavy calculation with and without `.Stream()`:

```py
import torch
import time

# Verify GPU selection else use CPU
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Heavy calculation function
def heavy_computation(tensor):
  return tensor**2 + (tensor**3) * (tensor.sin() * tensor.cos()) + tensor.tan()

# Sample number (reduce size to prevent OOM issues)
size = 10**7  # Instead of 10**9
data = torch.randn(size, device=device, dtype=torch.float16)  # Reduced dtype to float16

# Create 2 Streams
stream1 = torch.cuda.Stream(device=device)
stream2 = torch.cuda.Stream(device=device)

# Synchronize all kernels before time tracking
torch.cuda.synchronize()

# Start time tracking for Stream computation
start_time = time.time()

# Asynchronous execution with streams
with torch.cuda.stream(stream1):
  result1 = heavy_computation(data[:size // 2])

with torch.cuda.stream(stream2):
  result2 = heavy_computation(data[size // 2:])

# Synchronize all kernels before measuring time
torch.cuda.synchronize()
end_time = time.time()

print(f"Time taken with streams: {end_time - start_time:.3f} seconds")

# Sequential computation
torch.cuda.synchronize()
start_time = time.time()

result1_seq = heavy_computation(data[:size // 2])
result2_seq = heavy_computation(data[size // 2:])

torch.cuda.synchronize()
end_time = time.time()

print(f"Time taken without streams: {end_time - start_time:.3f} seconds")
```

See more on [`.time()`](https://www.codecademy.com/resources/docs/python/dates/time) explanation.

> **Note:** The Stream calculation varies on the complexity of command execution. If the calculation is simple, the stream might slow the operation instead.

The following will be the output for the sample `size = 10\*\*7`:

```shell
Time taken with streams: 0.035 seconds
Time taken without streams: 0.003 seconds
```
