---
Title: '.stack()'
Description: 'Stacks existing tensors to each other along a specified dimension.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Structures'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.stack()`** appends existing tensors to each other along a specified dimension to create a combined tensor. The appended tensors must be the same size.

## Syntax

```pseudo
torch.stack(tensors, dim=0, out=None)
```

The parameters are as follows:
- `tensors`: The list of tensors to be stacked.
- `dim`: the dimension of which the tensors will be appended to each other. Defaults to 0.
- `out`: The output tensor, if specified. Defaults to None.

## Example

```py
import torch

# Define tensors
t0 = torch.zeros(4)
t1 = torch.ones(4)

t2 = torch.stack((t0, t1))
t3 = torch.stack((t0, t1), dim = 1)

print(t2)
print(t3)
```

The returned tensors are as follows:

```shell
tensor([[0., 0., 0., 0.],
        [1., 1., 1., 1.]])
tensor([[0., 1.],
        [0., 1.],
        [0., 1.],
        [0., 1.]])
```

## Codebyte Example

Run the following code to know how the `.stack()` method works:

```codebyte/python
import torch

t0 = torch.randn(3, 5)

print("Default stack:")
t1 = torch.stack((t0, t0))

print("Dimension 1:")
t2 = torch.stack((t0, t0), dim=1)

print("Dimension 2:")
t3 = torch.stack((t0, t0), dim=2)

print(t0)
print(t1)
print(t2)
print(t3)
```
