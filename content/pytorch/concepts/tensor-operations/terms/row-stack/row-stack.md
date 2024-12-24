---
Title: '.row_stack()'
Description: 'Stacks or arranges a sequence of tensors vertically (row-wise).'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.row_stack()`** function stacks or arranges a sequence of [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors) vertically (row-wise). It is an alias or alternative for the **`.vstack()`** function.

## Syntax

```pseudo
torch.row_stack(tensors, *, out=None)
```

- `tensors`: The sequence of tensors to be stacked vertically.
- `out` (Optional): A tensor to store the output. It must have the correct shape to accommodate the result.

## Example

The following example demonstrates the usage of the `.row_stack()` function:

```py
import torch

# Create two tensors
ten1 = torch.tensor([12, 23, 34])
ten2 = torch.tensor([45, 56, 67])

# Stack the tensors vertically
res = torch.row_stack((ten1, ten2))

# Print the resultant tensor
print(res)
```

The above code produces the following output:

```shell
tensor([[12, 23, 34],
        [45, 56, 67]])
```
