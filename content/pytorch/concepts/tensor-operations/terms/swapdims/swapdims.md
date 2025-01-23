---
Title: '.swapdims()'
Description: 'Swaps two specified dimensions of a tensor, effectively transposing those dimensions.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Data'
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Pytorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/machine-learning'
---

The **`.swapdims()`** function in PyTorch exchanges two specified dimensions of a tensor, simplifying [tensor manipulation and reshaping operations](https://www.codecademy.com/resources/docs/pytorch/tensor-operations). This method provides a view with the dimensions swapped, enabling efficient handling of multidimensional data for tasks like deep learning and data analysis, without copying the tensor.

## Syntax

```pseudo
torch.swapdims(input, dim0, dim1) -> Tensor
```

- `input`: The tensor whose dimensions are to be swapped.
- `dim0` (int): The first dimension to swap.
- `dim1` (int): The second dimension to swap.

## Example

Here's an example demonstrating how to use the `.swapdims()` method to swap two dimensions of a tensor in PyTorch:

```py
import torch

# Create a 2x3 tensor
tensor = torch.tensor([[1, 2, 3], [4, 5, 6]])

# Swap the two dimensions
swapped_tensor = torch.swapdims(tensor, 0, 1)

print("Original Tensor:")
print(tensor)
print("\nSwapped Tensor:")
print(swapped_tensor)
```

This code creates a _2x3_ tensor and swaps its rows and columns:

```shell
Original Tensor:
tensor([[1, 2, 3],
        [4, 5, 6]])

Swapped Tensor:
tensor([[1, 4],
        [2, 5],
        [3, 6]])
```
