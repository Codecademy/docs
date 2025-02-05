---
Title: '.vstack()'
Description: 'Stacks a sequence of tensors vertically (row-wise).'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Machine Learning'
  - 'Functions'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the .vstack() function stacks a sequence of [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors) along the first axis (dim=0), concatenating them row-wise. This function is part of the `torch` module.

## Syntax

```pseudo
torch.vstack(tens, *, out=None)
```

- `tens`: The sequence of tensors to be stacked.
- `out` (Optional): The output tensor.

## Example

The following example demonstrates the usage of the `.vstack()` function:

```py
import torch

# Define tensors
ten1 = torch.tensor([11, 22, 33])
ten2 = torch.tensor([44, 55, 66])

# Stack the tensors vertically
res = torch.vstack((ten1, ten2))

# Print the result
print(res)
```

The above code produces the following output:

```shell
tensor([[11, 22, 33],
        [44, 55, 66]])
```
