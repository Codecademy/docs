---
Title: '.dstack()'
Description: 'Stacks a set of tensors depthwise or along the third axis.'
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

In PyTorch, the **`.dstack()`** function stacks a set of tensors depthwise or along the third axis.

## Syntax

```pseudo
torch.dstack(tensors, *, out=None)
```

- `tensors`: The set of tensors to be stacked depthwise.
- `out`: The optional tensor to be used for storing the output.

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
