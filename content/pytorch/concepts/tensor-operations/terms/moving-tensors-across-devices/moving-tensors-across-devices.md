---
Title: 'Moving Tensors Across Devices(CPU/GPU)'
Description: 'Ways to transfer tensors between CPU and GPU to optimize performance by executing operations on the most suitable hardware while maintaining data integrity.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Arrays'
  - 'Data Structures'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

PyTorch provides simple methods to transfer tensors between CPU and GPU devices, allowing for flexible computation strategies. This is particularly useful when certain operations are more efficient on specific devices, or when working with models that require GPU acceleration. The transfer maintains the tensor's data and structure while changing only its location in memory.

## Syntax

```pseudo
tensor.to(device)   # Transfers tensor to the specified device
tensor.cuda()       # Transfers tensor to GPU
tensor.cpu()        # Transfers tensor to CPU
```

- `device`: The destination device, which can be:
  - A string, e.g., `'cuda'`, `'cpu'`.
  - A `torch.device` object, e.g., `torch.device('cuda')` or `torch.device('cpu')`.

## Example

The following example demonstrates moving a tensor between CPU and GPU, showing device location at each step, while checking for GPU availability to ensure code works on all systems:

```py
import torch

# Create a tensor on CPU
cpu_tensor = torch.randn(2, 3)
print("Original tensor (CPU):", cpu_tensor.device)

# Move to GPU if available
if torch.cuda.is_available():
  gpu_tensor = cpu_tensor.to('cuda')
  print("Moved to GPU:", gpu_tensor.device)

  # Move back to CPU
  back_to_cpu = gpu_tensor.cpu()
  print("Back to CPU:", back_to_cpu.device)
```

The output of the above code will be if the gpu is not available:

```shell
Original tensor (CPU): cpu
```

If gpu is available then:

```shell
Original tensor (CPU): cpu
Moved to GPU: cuda:0
Back to CPU: cpu
```

Here, `cuda:0` indicates the tensor is on the first GPU device.
