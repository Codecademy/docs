---
Title: '.stack()'
Description: 'Stacks the given tensors along a new specified dimension.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Structures'
  - 'Deep Learning'
  - 'Methods'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.stack()`** method stacks given tensors along a specified dimension to create a combined tensor. The tensors being stacked must have the same shape.

## Syntax

```pseudo
torch.stack(tensors, dim=0, out=None)
```

- `tensors`: The list or sequence of tensors to be stacked.
- `dim`: The dimension along which to stack the tensors. The default value is `0`.
- `out`: The optional output tensor to store the result. If `None`, a new tensor is returned. The default is `None`.

## Example

The following example demonstrates the usage of the `.stack()` method:

```py
import torch

# Define tensors
t0 = torch.zeros(4)
t1 = torch.ones(4)

# Stack tensors along the default dimension (dim=0)
t2 = torch.stack((t0, t1))

# Stack tensors along dimension 1
t3 = torch.stack((t0, t1), dim=1)

print(t2)
print('\n')
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
