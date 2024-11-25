---
Title: '.squeeze()'
Description: 'Removes dimensions of size 1 from a tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'PyTorch'
  - 'Functions'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The PyTorch **`.squeeze()`** function removes dimensions of size `1` from a given [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors).

## Syntax

```pseudo
torch.squeeze(input, dim=None)
```

- `input`: The input tensor from which dimensions of size `1` will be removed.
- `dim` (Optional): A specific dimension to squeeze. If provided, only the dimension of size `1` at that index will be removed. If not provided, all dimensions with size `1` will be removed.

## Example

The following example demonstrates how the `.squeeze()` function removes dimensions of size `1` from the tensor `x`, resulting in a tensor `y` with reduced dimensions:

```py
import torch

# Create a tensor with dimensions (1, 1, 2, 1, 3)
x = torch.rand(1, 1, 2, 1, 3)
print("Original tensor size:", x.size())

# Apply the .squeeze() operation to remove all dimensions of size '1'
y = torch.squeeze(x)
print("Squeezed tensor (all dims) size:", y.size())

# Apply the .squeeze() operation with 'dim=1' to only remove the dimension at index '1'
z = torch.squeeze(x, dim=1)
print("Squeezed tensor (dim=1) size:", z.size())
```

The above code generates the following output:

```shell
Original tensor size: torch.Size([1, 1, 2, 1, 3])
Squeezed tensor (all dims) size: torch.Size([2, 3])
Squeezed tensor (dim=1) size: torch.Size([1, 2, 1, 3])
```
