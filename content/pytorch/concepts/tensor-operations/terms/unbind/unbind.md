---
Title: '.unbind()'
Description: 'Removes a dimension and returns a tuple of slices along the given dimension.'
Subjects:
  - 'AI'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.unbind()`** function removes the specified dimension and returns a tuple of [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors), each representing a slice along the given dimension.

## Syntax

```pseudo
torch.unbind(tensor, dim=0)
```

- `tensor`: The tensor to unbind.
- `dim`: The dimension to remove from the tensor. If not specified, the default value (`0`) is used.

## Example

The following example demonstrates the usage of the `.unbind()` function:

```py
import torch

# Create a tensor
ten = torch.tensor([[1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]])

# Unbind the tensor along the first dimension (dim=0)
unbound = torch.unbind(ten)

# Print the resulting tuple
print(unbound)
```

The code above should output the following:

```shell
(tensor([1, 2, 3]), tensor([4, 5, 6]), tensor([7, 8, 9]))
```
