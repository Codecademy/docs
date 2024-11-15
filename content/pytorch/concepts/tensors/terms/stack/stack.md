---
Title: '.stack()'
Description: 'Appends given tensors to each other along a specified dimension.'
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

In PyTorch, the **`.stack()`** method appends given tensors to each other along a specified dimension to create a combined tensor. The appended tensors must be of the same size.

## Syntax

```pseudo
torch.stack(tensors, dim=0, out=None)
```

- `tensors`: The list of tensors to be stacked.
- `dim`: The dimension along which the tensors are to be appended to each other. The default value is `0`.
- `out`: The optional output tensor. The default value is `None`.

## Example

The following example demonstrates the usage of the `.stack()` method:

```py
import torch

# Define tensors
t0 = torch.zeros(4)
t1 = torch.ones(4)

# Append tensors to each other
t2 = torch.stack((t0, t1))
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
