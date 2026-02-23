---
Title: '.aminmax()'
Description: 'Returns both the minimum and maximum values of a tensor along a specified dimension or across the entire tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Methods'
  - 'Programming'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.aminmax()`** method in PyTorch computes both the minimum and maximum values of a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) in a single operation. This method performs both reductions in a single pass through the data, making it more efficient than calling `.amin()` and `.amax()` separately. It can operate on the entire tensor or along a specific dimension, making it useful for data analysis, normalization, and monitoring value ranges in neural networks.

## Syntax

```pseudo
torch.aminmax(input, dim=None, keepdim=False, *, out=None)
```

**Parameters:**

- `input` (Tensor): The input tensor to find the minimum and maximum values from.
- `dim` (int or tuple of ints, optional): The dimension(s) along which to compute the values. If `None`, computes over the entire tensor.
- `keepdim` (bool, optional): If `True`, retains reduced dimensions with size 1. Default is `False`.
- `out` (tuple of Tensors, optional): A tuple of two tensors to store the output.

**Return value:**

The `.aminmax()` method returns a named tuple `(min, max)` containing two tensors: the minimum values in the `min` field and the maximum values in the `max` field.

## Example

This example shows how to use the `.aminmax()` method to find the minimum and maximum values of a tensor:

```py
import torch

# Create a sample tensor
tensor = torch.tensor([[3.5, 1.2, 8.7],
                       [4.1, 9.3, 2.6],
                       [7.0, 5.4, 6.2]])

# Find minimum and maximum values of the entire tensor
result = torch.aminmax(tensor)

print("Minimum value:", result.min)
print("Maximum value:", result.max)

# Find minimum and maximum values along dimension 0
result_dim = torch.aminmax(tensor, dim=0)

print("\nMinimum values along dim 0:", result_dim.min)
print("Maximum values along dim 0:", result_dim.max)
```

This example results in the following output:

```shell
Minimum value: tensor(1.2000)
Maximum value: tensor(9.3000)

Minimum values along dim 0: tensor([3.5000, 1.2000, 2.6000])
Maximum values along dim 0: tensor([7.0000, 9.3000, 8.7000])
```

In this example:

- **Entire tensor**: Returns single min (1.2000) and max (9.3000) values across all elements.
- **Along dimension 0**: Returns min and max for each column, producing tensors with 3 values each.
