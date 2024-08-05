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

- `size`: The shape, specified as a variable, tuple, or list of integers.
- `out`: The output Tensor, defaults to None.
- `dtype`: Datatype (`torch.dtype`) of the zeros, defaults to None.
- `layout`: Layout (`torch.layout`) of the output Tensor, defaults to `torch.strided`.
- `device`: Device (`torch.device`) of the output Tensor, defaults to None.
- `requires_grad`: Boolean of whether autograd will record operations on the output Tensor, defaults to False.

## Example

```python
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
```codebyte/python
import torch

# Guess what this tensor looks like!
t0 = torch.zeros((4, 1, 3), dtype=torch.int16)

print(t0)
```


