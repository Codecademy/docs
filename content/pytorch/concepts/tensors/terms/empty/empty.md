---
Title: '.empty()'
Description: 'Creates a new tensor of a specified shape with uninitialized data.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.empty()`** method creates a tensor with uninitialized data. This means that the tensor is allocated memory without setting its values, which may contain arbitrary data (such as NaNs or other undefined values). The shape of the tensor must be specified as an argument.

## Syntax

```pseudo
torch.empty(size, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False, pin_memory=False, memory_format=torch.contiguous_format)
```

The parameters are as follows:

- `size`: Specifies the shape of the tensor. It can be an integer or a tuple of integers representing the dimensions
- `out`(Optional): The output Tensor, defaults to `None`.
- `dtype`(Optional): Specifies the desired data type of the tensor.
- `layout`(Optional): Specifies the layout (`torch.layout`) of the output tensor, defaults to `torch.strided`.
- `device`(Optional): Specifies the device (`torch.device`) of the output tensor, defaults to `None`.
- `requires_grad`(Optional): A boolean indicating whether autograd will record operations on the output tensor, defaults to `False`.
- `pin_memory`(Optional): A boolean indicating whether the tensor is allocated in pinned memory. This only works for CPU tensors. Defaults to `False`.
- `memory_format`(Optional): Specifies the memory format (`torch.memory_format`) of the output tensor, defaults to `torch.contiguous_format`.

## Example

The example below uses the `.empty()` method:

```py
import torch

t0 = torch.empty((1, 3))
print(t0)
```

The returned tensor is as follows:

```shell
tensor([1.245e+11, NaN, -2.956e-52])
```

## Codebyte Example

Run the following code to see how the `.empty()` method works:

```codebyte/python
import torch

t0 = torch.empty((4, 2, 3), dtype=torch.int16)

print(t0)
```
