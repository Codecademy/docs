---
Title: '.argmin()'
Description: 'Returns the index of the minimum value in a PyTorch tensor, or along a specified dimension.'
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

The **`.argmin()`** method in PyTorch returns the index of the minimum value in a flattened [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) tensor by default, or along a specified dimension. This method is commonly used in tasks such as finding the closest data point, selecting the best prediction, or identifying the least likely class in machine learning workflows.

## Syntax

```pseudo
torch.argmin(input, dim=None, keepdim=False)
```

**Parameters:**

- `input` (Tensor): The input tensor to search for the minimum value.
- `dim` (int, optional): The dimension to reduce. If not specified, the index of the minimum value in the flattened tensor is returned.
- `keepdim` (bool, optional): Whether the output tensor retains the reduced dimension. Defaults to `False`.

**Return value:**

The `.argmin()` method returns a `LongTensor` containing the index or indices of the minimum value(s). If `dim` is not specified, a scalar tensor is returned.

## Example

This example shows how to use the `.argmin()` method to find the index of the minimum value in a 2D tensor:

```py
import torch

# Define a 2D tensor
tensor = torch.tensor([[8, 3, 5],
                       [2, 7, 4]])

# Index of minimum in flattened tensor
print(torch.argmin(tensor))

# Index of minimum along each column (dim=0)
print(torch.argmin(tensor, dim=0))

# Index of minimum along each row (dim=1)
print(torch.argmin(tensor, dim=1))
```

This example results in the following output:

```shell
tensor(3)
tensor([1, 0, 1])
tensor([1, 0])
```

In this example:

- **Flattened tensor**: The tensor is treated as `[8, 3, 5, 2, 7, 4]`, and the minimum value `2` is at index `3`.
- **Along columns (`dim=0`)**: The minimum values in each column are `2`, `3`, and `4`, found in rows `1`, `0`, and `1`.
- **Along rows (`dim=1`)**: The minimum values in each row are `3` (at index `1`) and `2` (at index `0`).
