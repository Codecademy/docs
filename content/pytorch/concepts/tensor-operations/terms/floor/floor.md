---
Title: '.floor()'
Description: 'Returns a new tensor with each element rounded down to the nearest integer.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Neural Networks'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-python'
  - 'paths/machine-learning'
---

In PyTorch, the **`.floor()`** function rounds each element of the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) down to the nearest integer, including negative numbers.

## Syntax

```pseudo
torch.floor(input, *, out=None)
```

**Parameters:**

- `input`: The input tensor whose elements will be rounded down.
- `out` (optional): A tensor to store the output. Must have the same shape as input.

**Return value:**

Returns a new tensor with each element rounded down to the nearest integer. If out is provided, the result is written there instead.

## Example 1: Basic Rounding Down with `.floor()`

The following example demonstrates the usage of the `.floor()` function:

```py
import torch

# Define input
input = torch.randn(4)
print(input)

# Round down to the nearest integer
output = torch.floor(input)
print(output)
```

A sample output of this code is:

```shell
tensor([-0.0032, -0.0333, -0.2857, -1.3986])
tensor([-1., -1., -1., -2.])
```

## Example 2: Using the `out` Parameter

This example shows how to use the optional `out` argument to store the results in a pre-allocated tensor:

```py
import torch

# Define input
input = torch.tensor([1.7, -0.2, 3.9])

# Pre-allocate an output tensor with the same shape
result = torch.empty_like(input)

# Compute floor and store result in `result` tensor
torch.floor(input, out=result)

print(result)
```

The output of this code is:

```shell
tensor([ 1., -1.,  3.])
```
