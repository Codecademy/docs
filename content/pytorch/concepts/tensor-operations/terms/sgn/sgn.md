---
Title: '.sgn()'
Description: 'Computes the sign of each element in the input tensor, returning a tensor with the same shape.'
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

The **`.sgn()`** function computes the sign of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors), applied element-wise. For real-valued tensors, it returns -1 for negative values, 0 for zero, and 1 for positive values. For complex-valued tensors, it returns the complex sign (the tensor divided by its absolute value), which gives the unit vector in the direction of each complex number.

## Syntax

```pseudo
torch.sgn(input, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): The input tensor (can be real or complex).
- `out` (Tensor, optional): Optional output tensor to store the result.

**Return value:**

A tensor with the same shape as `input`, containing the sign of each element.

## Example 1: Using `.sgn()` with a Real-Valued Tensor

In this example, `.sgn()` computes the sign of each element in a real-valued tensor:

```py
import torch

# Create a tensor with positive, negative, and zero values
x = torch.tensor([-5.0, -2.5, 0.0, 2.5, 5.0])

# Compute the sign
result = torch.sgn(x)

print(result)
```

The output of this code is:

```shell
tensor([-1., -1.,  0.,  1.,  1.])
```

## Example 2: Using `.sgn()` with a 2D Tensor

In this example, `.sgn()` is applied to a 2D tensor:

```py
import torch

# Create a 2x3 tensor
matrix = torch.tensor([[-3.0, -1.0, 0.0], [1.0, 2.0, 3.0]])

# Compute the sign
result = torch.sgn(matrix)

print(result)
```

The output of this code is:

```shell
tensor([[-1., -1.,  0.],
        [ 1.,  1.,  1.]])
```

## Example 3: Using `.sgn()` with Complex Numbers

For complex-valued tensors, `.sgn()` returns the complex sign, which is the unit vector in the direction of each complex number (computed as `x / |x|`):

```py
import torch

# Create a tensor with complex numbers
z = torch.tensor([1+2j, -1+2j, 3-4j])

# Compute the complex sign
result = torch.sgn(z)

print(result)
```

The output of this code is:

```shell
tensor([0.4472+0.8944j, -0.4472+0.8944j, 0.6000-0.8000j])
```

In this example, each result has a magnitude of 1 (a unit vector), pointing in the direction of the original complex number.
