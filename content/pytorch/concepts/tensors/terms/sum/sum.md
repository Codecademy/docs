---
Title: '.sum()'
Description: 'Computes the sum of all elements in a tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, the **`.sum()`** function is used to compute the sum of all elements in the input tensor. This function is part of the `torch` package.

## Syntax

To calculate the sum of all elements, the following syntax is used:

```pseudo
torch.sum(input, *, dtype=None)
```

- `input`: The input tensor.
- `dtype` (Optional): The data type of the output tensor.

To calculate the sum along specific dimensions, the following syntax is used:

```pseudo
torch.sum(input, *, dim=None, keepdim=False, out=None)
```

- `input`: The input tensor.
- `dim` (Optional): Specifies the dimension(s) along which the sum is computed. If not specified, the sum is computed over all elements.
- `keepdim` (Optional): If set to `True`, the output tensor retains dimensions of size _1_ for the reduced dimensions. The default is `False`.
- `out` (Optional): A tensor to store the output into. If not provided, a new tensor is created.

## Example 1

In this example, the sum of all elements in the input tensor `[[1, 2], [3, 4]]` is computed, resulting in a tensor with a single element `10`. The sum is calculated as `1 + 2 + 3 + 4 = 10`:

```py
import torch

# Create a tensor
tensor = torch.tensor([[1, 2], [3, 4]])

# Compute the sum of all elements in the tensor
sum_tensor = torch.sum(tensor)

print(sum_tensor)
```

Here is the output for the above example:

```shell
tensor(10)
```

## Example 2

In this example, the sum is computed along the columns of the input tensor `[[1, 2], [3, 4]]`, resulting in a tensor with two elements `[4, 6]`. The sum along the columns is calculated as `[1 + 3, 2 + 4] = [4, 6]`:

```py
import torch

# Create a tensor
tensor = torch.tensor([[1, 2], [3, 4]])

# Compute the sum along the rows of the tensor
sum_rows = torch.sum(tensor, dim=0)

print(sum_rows)
```

Here is the output for the above example:

```shell
tensor([4, 6])
```

Specifying the `dim` parameter customizes the dimension along which the sum is computed, providing flexibility in handling multi-dimensional tensors.
