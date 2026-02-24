---
Title: '.sqrt()'
Description: 'Computes the square root of each element in a PyTorch tensor.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Deep Learning'
  - 'Machine Learning'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.sqrt()`** function in PyTorch computes the square root of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). This operation applies the mathematical function $\sqrt{x}$ element-wise to all values in the tensor.

The square root function is commonly used in neural networks for normalization techniques, distance calculations (such as Euclidean distance), standard deviation computations, and various mathematical transformations in deep learning applications.

## Syntax

```pseudo
torch.sqrt(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor containing non-negative elements for which the square root will be computed.
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

Returns a new tensor where each element is the square root of the corresponding element in the input tensor.

## Example 1: Applying `.sqrt()` to Single-Element and 1D Tensors

This example shows how to compute the square root of both a scalar and a 1D tensor:

```py
import torch

# Create a scalar tensor
scalar = torch.tensor([16.0])
result_scalar = torch.sqrt(scalar)

print("Scalar input:", scalar)
print("sqrt(16.0):", result_scalar)

# Create a 1D tensor with various values
x = torch.tensor([0.0, 1.0, 4.0, 9.0, 16.0, 25.0])
result = torch.sqrt(x)

print("\nInput tensor:", x)
print("Square root:", result)
```

This produces the following output:

```shell
Scalar input: tensor([16.])
sqrt(16.0): tensor([4.])

Input tensor: tensor([ 0.,  1.,  4.,  9., 16., 25.])
Square root: tensor([0., 1., 2., 3., 4., 5.])
```

> **Note:** $\sqrt{0} = 0$ and the square root function is only defined for non-negative real numbers. Attempting to compute the square root of negative numbers will result in `nan` (not a number) values.

## Example 2: Applying `.sqrt()` to a Multi-Dimensional Array

This example demonstrates computing the square root of a 2D tensor:

```py
import torch

# Create a 2D tensor (3x3 matrix)
x = torch.tensor([[1.0, 4.0, 9.0],
                  [16.0, 25.0, 36.0],
                  [49.0, 64.0, 81.0]])

# Compute the square root
result = torch.sqrt(x)

print("Input tensor:")
print(x)
print("\nSquare root:")
print(result)
```

This produces the following output:

```shell
Input tensor:
tensor([[ 1.,  4.,  9.],
        [16., 25., 36.],
        [49., 64., 81.]])

Square root:
tensor([[1., 2., 3.],
        [4., 5., 6.],
        [7., 8., 9.]])
```

The `.sqrt()` function preserves the shape of the input tensor, applying the square root operation element-wise to each value in the multi-dimensional array. This is particularly useful when normalizing data or computing distance metrics in machine learning applications.
