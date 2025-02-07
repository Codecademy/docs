---
Title: 'Memory Management'
Description: 'Enables efficient GPU memory allocation, transfer, and optimization for deep learning operations.'
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

PyTorch provides comprehensive GPU **memory management** through CUDA, allowing developers to control memory allocation, transfer data between CPU and GPU, and monitor memory usage. The system includes automatic memory management features while also offering manual control when needed for optimization. These capabilities are essential for training large models and handling substantial datasets efficiently.

## Syntax

### Memory Release Methods

- `.empty_cache()`: Forces GPU memory release and cache clearing.

```pseudo
torch.cuda.empty_cache()
```

### Memory Monitoring Methods

- `.memory_allocated()`: Returns current memory used by tensors (in bytes).

```pseudo
torch.cuda.memory_allocated()
```

- `.memory_reserved()`: Returns total memory allocated by PyTorch (includes allocated + cached memory).

```pseudo
torch.cuda.memory_reserved()
```

- `.max_memory_allocated()`: Returns the peak GPU memory usage since the start of the program or last reset.

```pseudo
torch.cuda.max_memory_allocated()
```

- `.reset_peak_memory_stats()`: Resets peak memory tracking statistics to current values.

```pseudo
torch.cuda.reset_peak_memory_stats()
```

### Memory Limiting Methods

- `.set_per_process_memory_fraction()`: Limits PyTorch to use only specified fraction of GPU memory.

```pseudo
torch.cuda.set_per_process_memory_fraction(0.7)
```

- `.total_memory`: Returns total available GPU memory on specified device.

```pseudo
torch.cuda.get_device_properties(device).total_memory
```

### Memory Optimization Methods

- `.pin_memory()`: Pins CPU memory for faster CPU-GPU transfer.

```pseudo
tensor.pin_memory()
```

- `.zero_grad()`: Efficiently clears gradients by setting to `None` instead of zero.

```pseudo
model.zero_grad(set_to_none=True)
```

## Example

The following example demonstrates PyTorch's GPU memory management by creating large tensors, monitoring memory allocation/usage, cleaning up unused memory, and setting memory limits with output showing memory statistics in megabytes:

```py
import torch

# Create some tensors on GPU
x = torch.randn(10000, 10000, device='cuda')
y = torch.randn(10000, 10000, device='cuda')

# Monitor memory usage
print(f"Current memory allocated: {torch.cuda.memory_allocated() / 1024**2:.2f} MB")
print(f"Max memory allocated: {torch.cuda.max_memory_allocated() / 1024**2:.2f} MB")
print(f"Reserved memory: {torch.cuda.memory_reserved() / 1024**2:.2f} MB")

# Clear unused memory
del x
torch.cuda.empty_cache()

# Set memory limit
torch.cuda.set_per_process_memory_fraction(0.8)  # Limit to 80% GPU memory

print(f"Memory after cleanup: {torch.cuda.memory_allocated() / 1024**2:.2f} MB")
```

The output of the above code will be:

```shell
Current memory allocated: 764.00 MB
Max memory allocated: 764.00 MB
Reserved memory: 764.00 MB
Memory after cleanup: 382.00 MB
```

> **Note:** The memory values in the output will vary depending on GPU, system configuration, and other running processes. Each run might show different memory statistics even on the same system.
