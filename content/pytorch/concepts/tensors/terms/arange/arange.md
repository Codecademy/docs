---
Title: '.arange()'
Description: 'Returns a 1-dimentional tensor with values from a specified range.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Arrays'
  - 'Data Structures'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.arange()`** method returns a tensor containing values from a given interval `[start, end)` with a specified `step` size. When the step size is not an integer, floating-point rounding errors may occur, so it is recommended to subtract a small epsilon from the `end` value for consistency.

## Syntax

```pseudo
torch.arange(start=0, end, step=1, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False)
```

The parameters are as follows:

- `start`: The starting value of the range, inclusive. Defaults to `0`.
- `end`: The ending value of the range, exclusive. This parameter is required.
- `step`: The difference between each consecutive value in the range. The default value is `1`.
- `out`: A tensor in which to store the output. If `None`, a new tensor is created. The default value is `None`.
- `dtype`: The desired data type of the output tensor (`torch.dtype`). If `None`, the data type will be inferred from other input arguments. The default value is `None`.
- `layout`: The desired layout of the output tensor. Default: `torch.strided`.
- `device`: The device on which the tensor will be allocated (`torch.device`). Default: `None`.
- `requires_grad`: A boolean indicating whether autograd should track operations on the output tensor. Default: `False`.

## Example

```py
import torch

# Return a tensor with only an end value
t0 = torch.arange(3)

# Return a tensor of a specified range and step count
t1 = torch.arange(5, 35, 10)

print(t0)
print(t1)
```

The returned tensors are as follows:

```shell
tensor([0, 1, 2])
tensor([5, 15, 25])
```

## Codebyte Example

Run the following code to know how the `.arange()` method works:

```codebyte/python
import torch

t0 = torch.arange(2, 5, 0.5)

print(t0)
```
