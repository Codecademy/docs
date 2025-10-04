---
Title: '.ceil()'
Description: 'Returns a new tensor with the smallest integer greater than or equal to each element of the input tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Machine Learning'
  - 'Python'
  - 'Values'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.ceil()`** function returns a new tensor with the smallest integer greater than or equal to each element of the input tensor. This operation is commonly used in applications that require rounding values up, such as setting upper bounds in optimization problems, discretizing continuous outputs, or preparing pixel-based image data where fractional values are invalid.

## Syntax

```pseudo
torch.ceil(input,*, out=None)
```

**Parameters:**

- `input`: The input tensor whose elements are to be rounded up.
- `out` (optional): A tensor to store the output. Must have the same shape as `input`.

**Return value:**

The `.ceil()` returns a new tensor containing the ceiling values of each element in the `input` tensor. Unless the `out` parameter is specified, the result is a new tensor.

## Example: Applying `.ceil()` to a 1D Tensor

```py
import torch

# Create a tensor
x = torch.tensor([1.2, -0.8, 3.0, -2.7, 5.5])

# Apply the ceil operation
y = torch.ceil(x)

print(f"Original tensor: {x}")
print(f"Ceil tensor: {y}")
```

This program gives the following output:

```shell
Original tensor: tensor([ 1.2000, -0.8000,  3.0000, -2.7000,  5.5000])
Ceil tensor: tensor([ 2., -0.,  3., -2.,  6.])
```

> **Note:** The result may display `-0.` due to floating-point formatting, but it is functionally equivalent to `0.`.
