---
Title: '.reciprocal()'
Description: 'Computes the element-wise reciprocal of each element in the input tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Functions'
  - 'PyTorch'
  - 'Tensor'
CatalogContent: 
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.reciprocal()`** method performs an element-wise operation that returns the multiplicative inverse of every element in the tensor. For any element `x`, the result is `1/x`. This method works with tensors that have floating-point or complex data types (such as `torch.float32`, `torch.float64`, or `torch.complex64`). If an element equals zero, the reciprocal for that position becomes infinity (`inf`).

## Syntax

```pseudo
torch.reciprocal(input, *, out=None)
```

**Parameters:**

- `input` (Tensor): The input tensor whose elements will be inverted.
- `out` (Tensor, optional): The output tensor to store the result. Must have the same shape as `input`.

**Return value:**

Returns a tensor containing the element-wise reciprocals of `input`.

## Example 1: Compute element-wise reciprocals

In this example, we create a tensor of floating-point numbers and calculate their reciprocals using `torch.reciprocal()`:

```py
import torch

# Create a tensor of floating-point values
x = torch.tensor([2.0, 4.0, 0.5, 0.0])

print("Original Tensor:")
print(x)

# Compute the reciprocal
result = torch.reciprocal(x)

print("\nReciprocal Tensor:")
print(result)
# Note: Division by zero results in 'inf'
```

The output of this code is:

```shell
Original Tensor:
tensor([2.0000, 4.0000, 0.5000, 0.0000])

Reciprocal Tensor:
tensor([0.5000, 0.2500, 2.0000,    inf])
```

## Example 2: Using the `out` parameter

In this example, the result is stored in a pre-allocated output tensor using the `out` parameter:

```py
import torch

# Input tensor
x = torch.tensor([1.0, 2.0, 0.25])

# Create an empty tensor with the same shape
out_tensor = torch.empty_like(x)

# Store the result in 'out_tensor'
torch.reciprocal(x, out=out_tensor)

print("Input Tensor:")
print(x)

print("\nReciprocal stored in 'out' tensor:")
print(out_tensor)
```

The output of this code:

```shell
Input Tensor:
tensor([1.0000, 2.0000, 0.2500])

Reciprocal stored in 'out' tensor:
tensor([1.0000, 0.5000, 4.0000])
```
