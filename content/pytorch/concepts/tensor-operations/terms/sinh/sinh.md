---
Title: '.sinh()'
Description: 'Computes the hyperbolic sine of each element in a PyTorch tensor.'
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

The **`.sinh()`** function in PyTorch computes the hyperbolic sine of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). This operation applies the mathematical function $\sinh(x) = \frac{e^x - e^{-x}}{2}$ element-wise to all values in the tensor.

The hyperbolic sine function is commonly used in numerical methods, scientific computing, and some experimental neural network architectures involving hyperbolic functions.

## Syntax

```pseudo
torch.sinh(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor containing elements for which the hyperbolic sine will be computed.
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

Returns a new tensor where each element is the hyperbolic sine of the corresponding element in the input tensor.

## Example 1: Single Element Tensor

This example demonstrates computing the hyperbolic sine of a single-element tensor:

```py
import torch

# Create a single-element tensor
x = torch.tensor([2.0])

# Compute the hyperbolic sine
result = torch.sinh(x)

print("Input:", x)
print("sinh(2.0):", result)
```

This produces the following output:

```shell
Input: tensor([2.])
sinh(2.0): tensor([3.6269])
```

## Example 2: 1D Array

This example shows how to compute the hyperbolic sine of a 1D tensor:

```py
import torch

# Create a 1D tensor with various values
x = torch.tensor([0.0, 1.0, -1.0, 2.0, -2.0])

# Compute the hyperbolic sine
result = torch.sinh(x)

print("Input tensor:", x)
print("Hyperbolic sine:", result)
```

This produces the following output:

```shell
Input tensor: tensor([ 0.,  1., -1.,  2., -2.])
Hyperbolic sine: tensor([ 0.0000,  1.1752, -1.1752,  3.6269, -3.6269])
```

> **Note:** The hyperbolic sine function is antisymmetric, meaning $\sinh(-x) = -\sinh(x)$, which is why `sinh(1.0)` and `sinh(-1.0)` have opposite signs but equal magnitudes.

## Example 3: Multi-Dimensional Array

This example demonstrates computing the hyperbolic sine of a 2D tensor:

```py
import torch

# Create a 2D tensor (2x3 matrix)
x = torch.tensor([[0.0, 0.5, 1.0],
                  [1.5, 2.0, 2.5]])

# Compute the hyperbolic sine
result = torch.sinh(x)

print("Input tensor:")
print(x)
print("\nHyperbolic sine:")
print(result)
```

This produces the following output:

```shell
Input tensor:
tensor([[0.0000, 0.5000, 1.0000],
        [1.5000, 2.0000, 2.5000]])

Hyperbolic sine:
tensor([[ 0.0000,  0.5211,  1.1752],
        [ 2.1293,  3.6269,  6.0502]])
```

The `.sinh()` function preserves the shape of the input tensor, applying the hyperbolic sine operation element-wise to each value in the multi-dimensional array.
