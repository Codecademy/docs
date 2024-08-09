---
Title: '.zeros()'
Description: 'Initializes a new tensor filled with zeros, with a specified shape.'
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
  - 'py-torch-for-classification'
  - 'paths/data-science'
---

The **`.zeros()`** method returns a tensor of a specified shape filled with zeros. Optionally, the output tensor, its datatype, layout, device, and whether autograd records operations can be selected.

## Syntax

```pseudo
torch.zeros(size, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False)
```

The parameters are as follows:

- `size`: The shape of the tensor, specified as a variable, tuple, or list of integers.
- `out`: The output Tensor, defaults to `None`.
- `dtype`: The datatype (`torch.dtype`) of the zeros, defaults to `None`.
- `layout`: The layout (`torch.layout`) of the output tensor, defaults to `torch.strided`.
- `device`: The device (`torch.device`) of the output tensor, defaults to `None`.
- `requires_grad`: A boolean indicating whether autograd will record operations on the output tensor, defaults to `False`.

## Example

```py
import torch

# Define a tensor with three values in one row
t0 = torch.zeros(3)

# Define a tensor with four rows, two values per row. All values have the datatype torch.int16
t1 = torch.zeros((4, 2), dtype=torch.int16)

print(t0)
print(t1)
```

The returned tensors are as follows:

```shell
tensor([0., 0., 0.])
tensor([[0, 0],
        [0, 0],
        [0, 0],
        [0, 0]], dtype=torch.int16)
```

## Codebyte Example

Run the following code to know how the `.zeros()` method works:

```codebyte/python
import torch

t0 = torch.zeros((4, 1, 3), dtype=torch.int16)

print(t0)
```
