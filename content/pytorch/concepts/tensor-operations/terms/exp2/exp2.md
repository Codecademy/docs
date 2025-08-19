---
Title: '.exp2()'
Description: 'Returns a new tensor with the base-2 exponential of each element in the input tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Deep Learning'
  - 'Functions'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.exp2()`** function in PyTorch computes the base-2 exponential of each element in the input tensor. This function is useful for various mathematical operations and can be applied to tensors of any shape. The result is a new tensor with the same shape as the input, containing the base-2 exponentials of the input values.

## Syntax

```pseudo
tensor.exp2(input, *, out=None)
```

This function is an alias for:

```pseudo
torch.special.exp2(input, *, out=None)
```

**Parameters:**

- `self` (Tensor): The input tensor.
- `out` (Tensor, optional): The output tensor to store the result.

**Return value:**

The `.exp2()` function returns a tensor with the base-2 exponentials of the input tensor, same shape as the input.

## Example

Here's an example of how to use the `.exp2()` function in PyTorch:

```py
import torch

# Create a tensor
x = torch.tensor([1.0, 2.0, 3.0])

# Compute the base-2 exponential
y = x.exp2()

print(y)
```

The output will be:

```shell
tensor([2., 4., 8.])
```

In this example, the `.exp2()` function is applied to the tensor `x`, and the result is stored in the tensor `y`. The output will be a tensor containing the base-2 exponentials of the elements in `x`.
