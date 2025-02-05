---
Title: 'GPU Acceleration with CUDA'
Description: 'Enables deep learning models to train and run significantly faster using CUDA-enabled graphics cards.'
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

**CUDA** (Compute Unified Device Architecture) allows PyTorch tensors and neural networks to execute on GPUs, providing parallel computing capabilities and memory optimization for accelerated deep learning operations.

## Syntax

```pseudo
torch.cuda.is_available()  # Check CUDA availability
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
model.to(device)  # Move model to GPU
tensor.to(device)  # Move tensor to GPU
```

- `cuda:N`: Specifies GPU device number N (0-indexed).
- `device`: Object representing the compute device (GPU/CPU).

## Memory Hierarchy

- CUDA operates with distinct memory spaces: host (CPU) and device (GPU) memory.
- Data must be explicitly transferred between these spaces via CUDA memory operations.
- GPU memory types include global memory, shared memory, and registers, each with different access speeds and capacities.

## Parallel Processing

- CUDA organizes computation into grids of thread blocks.
- Thread blocks contain multiple threads that execute in parallel.
- Warps are groups of 32 threads that execute simultaneously on NVIDIA GPUs.
- Thread synchronization and coordination are crucial for correct parallel execution.

## Memory Transfer Optimization

- Synchronous data transfer using CUDA streams reduces overhead.
- Pinned memory enables faster CPU-GPU transfers.
- Coalesced memory access patterns improve memory bandwidth utilization.
- Memory prefetching can hide transfer latency.

## Compute Architecture

- Each GPU contains multiple Streaming Multiprocessors (SMs).
- SMs manage resources like registers, shared memory, and cache.
- CUDA cores within SMs execute arithmetic operations in parallel.
- Different GPU architectures (compute capabilities) support varying features.

## Example

The following example demonstrates moving a linear model and input tensor to GPU for accelerated computation:

```py
import torch
import torch.nn as nn

# Create model and sample data
model = nn.Linear(10, 1)
input_data = torch.randn(100, 10)

# Move to GPU
device = torch.device("cuda:0")
model.to(device)
input_data = input_data.to(device)

# Forward pass
output = model(input_data)
print(f"Output tensor device: {output.device}")
```

The output of the above code will be:

```shell
Output tensor device: cuda:0
```
