---
Title: '.swapaxes()'
Description: 'Swaps two specified axes (dimensions) of a tensor, effectively rearranging its shape.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.swapaxes()`** function swaps two specified axes (dimensions) of a tensor.

## Syntax

```pseudo
torch.swapaxes(input, axis0, axis1)
```

- `input`: The input tensor.
- `axis0`: The first axis to be swapped.
- `axis1`: The second axis to be swapped.

## Example

The following example demonstrates the usage of the `.swapaxes()` function:

```py
import torch

# Create a tensor
x = torch.tensor([[[0, 1], [2, 3]], [[4, 5], [6, 7]]])

# Swap the axes (0 and 1)
swapped1 = torch.swapaxes(x, 0, 1)
print("After swapping axes 0 and 1:")
print(swapped1)

# Swap the axes (0 and 2)
swapped2 = torch.swapaxes(x, 0, 2)
print("\nAfter swapping axes 0 and 2:")
print(swapped2)
```

The output of the above code is as follows:

```shell
After swapping axes 0 and 1:
tensor([[[0, 1],
         [4, 5]],

        [[2, 3],
         [6, 7]]])

After swapping axes 0 and 2:
tensor([[[0, 4],
         [2, 6]],

        [[1, 5],
         [3, 7]]])
```
