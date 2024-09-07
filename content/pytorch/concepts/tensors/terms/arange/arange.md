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
  - 'paths/data-science'
---

The **`.arange()`** method returns a tensor created from a given interval `[start, end)`, with a specified `step` size. Note: when the step size is not an integer, there may be floating point rounding errors, and therefore it is recommended to subtract a small epsilon from the end for consistency.

## Syntax

```pseudo
torch.arange(start=0, end, step=1, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False)
```

The parameters are as follows:

- `start`: The beginning of the range, inclusive, defaults to `0`.
- `end`: The end of the range, exclusive. Required.
- `step`: The step size between each tensor value. Default: `1`. 
- `out`: The output Tensor, defaults to `None`.
- `dtype`: The datatype (`torch.dtype`) of the zeros, defaults to `None`.
- `layout`: The layout (`torch.layout`) of the output tensor, defaults to `torch.strided`.
- `device`: The device (`torch.device`) of the output tensor, defaults to `None`.
- `requires_grad`: A boolean indicating whether autograd will record operations on the output tensor, defaults to `False`.

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
