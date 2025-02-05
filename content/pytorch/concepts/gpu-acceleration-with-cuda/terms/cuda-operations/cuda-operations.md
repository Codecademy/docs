---
Title: 'CUDA Operations'
Description: 'CUDA operations provide specialized functions for GPU memory management, stream control, device handling, and synchronization in PyTorch.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Data'
  - 'Data Parallelism'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/build-a-machine-learning-model'
---

PyTorch's **CUDA operations** are essential for efficient GPU programming, enabling fine-grained control over GPU resources and execution flow. They help optimize memory usage, manage parallel execution streams, and coordinate CPU-GPU operations.

## Syntax

### Memory Management

```pseudo
torch.cuda.memory_allocated()
```

- Returns the number of bytes currently allocated on the GPU
- Essential for monitoring GPU memory usage

```pseudo
torch.cuda.empty_cache()
```

- Releases unused cached memory
- Helps prevent out-of-memory errors

### Stream Management

```pseudo
torch.cuda.Stream()
```

- Creates new CUDA stream for parallel execution
- Parameters: device (optional), priority (optional)

### Device Control

```pseudo
torch.cuda.device_count()
```

- Returns number of available GPUs
- Used for multi-GPU setups

```pseudo
torch.cuda.current_device()
```

- Returns current device index
- Useful for device-specific operations

### Synchronization

```pseudo
torch.cuda.synchronize()
```

- Waits for all GPU operations to complete
- Essential for timing and debugging

## Example

The following example demonstrates essential CUDA operations for GPU memory monitoring, stream creation, device management, and synchronization:

```py
import torch

# Memory monitoring
print(f"Initial memory: {torch.cuda.memory_allocated()}")

# Create tensor on GPU
x = torch.randn(1000, 1000, device='cuda')
print(f"After allocation: {torch.cuda.memory_allocated()}")

# Stream management
stream = torch.cuda.Stream()
with torch.cuda.stream(stream):
  y = torch.matmul(x, x)

# Device information
print(f"GPU count: {torch.cuda.device_count()}")
print(f"Current device: {torch.cuda.current_device()}")

# Synchronization and cleanup
torch.cuda.synchronize()
torch.cuda.empty_cache()
```

The output of the above code will be:

```shell
Initial memory: 0
After allocation: 4000256
GPU count: 1
Current device: 0
```
