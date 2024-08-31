---
Title: '.sum()'
Description: 'Returns a tensor of a desired size, filled with random values generated from a uniform distribution in the range [0,1).'
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

```pseudo
torch.sum(input, *, dim=None, keepdim=False, out=None)
```

The `.sum()` function takes one required parameter `input`, which represents the input tensor whose elements are to be summed. It also has four other optional parameters that can be used to customize the output tensor if needed:

- `dim`: Specifies the dimension along which the sum is to be computed. If `dim` is not specified, the sum is computed over all elements of the input tensor.
- `keepdim`: If set to `True`, the output tensor will have the same number of dimensions as the input tensor.
- `out`: Stores the output into existing tensor (if there is any).

## Example

```python
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

In this example, the sum of all elements in the input tensor `[[1, 2], [3, 4]]` is computed, resulting in a tensor with a single element `10`. The sum is calculated as `1 + 2 + 3 + 4 = 10`.

The `.sum()` function can also be used to compute the sum along a specific dimension of the tensor. For example, to compute the sum along the rows of a 2D tensor, you can specify the `dim` parameter as `0` or `1` depending on the desired dimension.

```python
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

In this example, the sum is computed along the rows of the input tensor `[[1, 2], [3, 4]]`, resulting in a tensor with two elements `[4, 6]`. The sum along the rows is calculated as `[1 + 3, 2 + 4] = [4, 6]`.

By specifying the `dim` parameter, you can customize the dimension along which the sum is computed, allowing for more flexibility in handling multi-dimensional tensors.
