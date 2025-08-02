---
Title: '.cos()'
Description: 'Computes the cosine of each element in the input tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Deep Learning'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

The **`.cos()`** function computes the cosine of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors), applied element-wise, and returns a tensor of the same shape. It's part of PyTorch’s math operations used in scientific computing and deep learning.

## Syntax

```py
torch.cos(input, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): Input tensor with elements in radians.
- `out` (Tensor, optional): Optional tensor to store the output.

**Return value:**

A tensor with the cosine of each element in the input, having the same shape.

## Example 1: Using `.cos()` with a 1D tensor

In this example, `.cos()` computes the cosine of a 1D tensor containing angles in radians:

```py
import torch

# Create a tensor with values in radians
x = torch.tensor([0, torch.pi / 2, torch.pi])

# Compute the cosine
y = torch.cos(x)

print(y)
```

The output of this code is:

```shell
tensor([ 1.0000e+00, -4.3711e-08, -1.0000e+00])
```

## Example 2: Applying `.cos()` with a 2D tensor

In this example, `.cos()` is applied to a 2D tensor of angles in radians:

```py
import torch

# Create a 2x2 tensor
matrix = torch.tensor([[0, torch.pi / 3], [torch.pi / 2, torch.pi]])

# Compute the cosine
result = torch.cos(matrix)

print(result)
```

The output of this code is:

```shell
tensor([[ 1.0000e+00,  5.0000e-01],
        [-4.3711e-08, -1.0000e+00]])
```
