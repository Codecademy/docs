---
Title: '.dstack()'
Description: 'Stacks a sequence of tensors depthwise along the third axis, creating a new tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, the **`.dstack()`** function stacks a sequence of tensors depthwise, i.e., along the third axis (axis=2), creating a new tensor.

## Syntax

```pseudo
torch.dstack(tensors, *, out=None)
```

- `tensors`: A sequence (e.g., list or tuple) of tensors to be stacked depthwise along the third axis.
- `out` (Optional): A tensor where the output will be stored, if provided.

## Example

The following example demonstrates the usage of the `.dstack()` function:

```py
import torch

# Create tensors
ten1 = torch.tensor([11, 22, 33])
ten2 = torch.tensor([12, 23, 34])

# Stack the tensors depthwise
res = torch.dstack((ten1, ten2))

print(res)
```

The above code produces the following output:

```shell
tensor([[[11, 12],
         [22, 23],
         [33, 34]]])
```
