---
Title: '.max()'
Description: 'Returns the maximum value of a tensor, either across the entire tensor or along a specified dimension.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Methods'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.max()`** method in PyTorch returns the maximum value from a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It can find the maximum value across the entire tensor or along a specified dimension. This method is commonly used in data analysis, finding peak values, and various neural network operations.

## Syntax

```pseudo
torch.max(input, dim=None, keepdim=False, *, out=None) → Tensor or (Tensor, LongTensor)
```

**Parameters:**

- `input` (Tensor): The input tensor.
- `dim` (int, optional): The dimension along which to find the maximum values. If not specified, returns the maximum value of the entire tensor.
- `keepdim` (bool, optional): Whether the output tensor retains the reduced dimension. Defaults to `False`.
- `out` (tuple of Tensors, optional): Optional tuple of two tensors to store the output values and indices.

**Return value:**

- When `dim` is not specified, it returns a tensor containing the single maximum value from the entire tensor.
- When `dim` is specified, it returns a named tuple `(values, indices)` where `values` contains the maximum values along the specified dimension, and `indices` contains the indices of those maximum values.

## Example

The following example demonstrates how to use the `.max()` method to find the maximum value in a tensor:

```py
import torch

# Create a 2D tensor
tensor = torch.tensor([[1.5, -2.3, 0.0],
                       [4.8, -1.2, 3.6]])

# Find the maximum value of the entire tensor
max_value = torch.max(tensor)

# Find maximum values along each column (dim=0)
max_cols = torch.max(tensor, dim=0)

# Find maximum values along each row (dim=1)
max_rows = torch.max(tensor, dim=1)

print("Original Tensor:")
print(tensor)

print("\nMaximum Value (entire tensor):")
print(max_value)

print("\nMaximum Values (along columns, dim=0):")
print("Values:", max_cols.values)
print("Indices:", max_cols.indices)

print("\nMaximum Values (along rows, dim=1):")
print("Values:", max_rows.values)
print("Indices:", max_rows.indices)
```

This example results in the following output:

```shell
Original Tensor:
tensor([[ 1.5000, -2.3000,  0.0000],
        [ 4.8000, -1.2000,  3.6000]])

Maximum Value (entire tensor):
tensor(4.8000)

Maximum Values (along columns, dim=0):
Values: tensor([4.8000, -1.2000, 3.6000])
Indices: tensor([1, 1, 1])

Maximum Values (along rows, dim=1):
Values: tensor([1.5000, 4.8000])
Indices: tensor([0, 0])
```

In this example:

- **Entire tensor**: The maximum value across all elements is `4.8000`.
- **Along columns (`dim=0`)**: The maximum values in each column are `4.8000`, `-1.2000`, and `3.6000`, all found in row `1` (index `1`).
- **Along rows (`dim=1`)**: The maximum values in each row are `1.5000` (at index `0`) and `4.8000` (at index `0`).
- When `dim` is specified, the method returns both the maximum values and their indices as a named tuple.
