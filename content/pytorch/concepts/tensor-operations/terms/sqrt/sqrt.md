---
Title: '.sqrt()'
Description: 'Computes the square root of each element in a PyTorch tensor.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'PyTorch'
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Tensors'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.sqrt()`** function in PyTorch computes the square root of each element in the input tensor. This operation applies the mathematical function $\sqrt{x}$ element-wise to all values in the tensor.

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

## Example 1: Single Element Tensor

This example demonstrates computing the square root of a single-element tensor:

```py
import torch

# Create a single-element tensor
x = torch.tensor([16.0])

# Compute the square root
result = torch.sqrt(x)

print("Input:", x)
print("sqrt(16.0):", result)
```

This produces the following output:

```
Input: tensor([16.])
sqrt(16.0): tensor([4.])
```

## Example 2: 1D Array

This example shows how to compute the square root of a 1D tensor:

```py
import torch

# Create a 1D tensor with various values
x = torch.tensor([0.0, 1.0, 4.0, 9.0, 16.0, 25.0])

# Compute the square root
result = torch.sqrt(x)

print("Input tensor:", x)
print("Square root:", result)
```

This produces the following output:

```
Input tensor: tensor([ 0.,  1.,  4.,  9., 16., 25.])
Square root: tensor([0., 1., 2., 3., 4., 5.])
```

Note that $\sqrt{0} = 0$ and the square root function is only defined for non-negative real numbers. Attempting to compute the square root of negative numbers will result in `nan` (not a number) values.
