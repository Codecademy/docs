---
Title: 'gradient()'
Description: 'Numerically estimates the gradient of a multi-dimensional function represented by a PyTorch tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Tensor'
CatalogContent:
  - 'learn-pytorch'
  - 'intro-to-py-torch-and-neural-networks'
  - 'learn-python-3'
---

In PyTorch, the **`torch.gradient()`** function estimates the gradient of a multi-dimensional function represented by a tensor. Unlike automatic differentiation methods such as `.backward()` and `tensor.grad` that compute exact gradients of a scalar function in a computational graph, `torch.gradient()` uses numerical methods (like central differences) to approximate the partial derivatives along each dimension of the input tensor.

This makes it useful for analyzing sampled data directly, independent of PyTorch’s autograd system.

## Syntax

```pseudo
torch.gradient(input, *, spacing=None, dim=None, edge_order=1)
```

**Parameters:**

- `input`: The input tensor representing sampled values of a function.
- `spacing` (optional): Defines the sample spacing. Can be:
  - A scalar (uniform spacing across all dimensions),
  - A list of scalars (per dimension),
  - A list of 1D tensors (explicit coordinate values). Defaults to 1.
- `dim` (optional): The dimension(s) along which to compute the gradient. If `None`, gradients are computed along all dimensions.
- `edge_order` (optional): Controls the accuracy at the boundaries. 1 (default) uses first-order differences, 2 uses second-order differences.

**Return value:**

A tuple of tensors, where each tensor represents the gradient of the input along a specific dimension.

## Example 1: Gradient of a 2D Tensor

This example estimates gradients of a 2D tensor that represents samples of a function:

```py
import torch

# Create a 2D tensor
data = torch.tensor([[1.0, 2.0, 3.0],
                     [4.0, 5.0, 6.0],
                     [7.0, 8.0, 9.0]])

# Compute gradients along both dimensions
gradients = torch.gradient(data)

print("Gradient along rows:\n", gradients[0])
print("Gradient along columns:\n", gradients[1])
```

This example results in the following output:

```shell
Gradient along rows:
tensor([[3., 3., 3.],
        [3., 3., 3.],
        [3., 3., 3.]])

Gradient along columns:
tensor([[1., 1., 1.],
        [1., 1., 1.],
        [1., 1., 1.]])
```

## Example 2: Using Spacing

This example shows how to specify custom spacing when computing gradients:

```py
import torch

# Function samples along a 1D axis
x = torch.tensor([0.0, 0.5, 1.0, 1.5])
y = torch.tensor([0.0, 0.25, 1.0, 2.25])  # y = x^2

# Compute gradient with spacing
grad = torch.gradient(y, spacing=(0.5,))
print(grad[0])  # Approximates derivative dy/dx ≈ 2x
```

This example results in the following output:

```shell
tensor([0.5000, 1.0000, 2.0000, 2.5000])
```

## Example 3: Multi-Dimensional Gradient

This computes partial derivatives across each of the three dimensions of the tensor:

```py
import torch

# Create a 3D tensor
data = torch.arange(27.0).reshape(3, 3, 3)

# Compute gradients along all dimensions
gradients = torch.gradient(data)

print("Gradient along dim 0:\n", gradients[0])
print("Gradient along dim 1:\n", gradients[1])
print("Gradient along dim 2:\n", gradients[2])
```

The output of this code is:

```shell
Gradient along dim 0:
tensor([[[9., 9., 9.],
         [9., 9., 9.],
         [9., 9., 9.]],

        [[9., 9., 9.],
         [9., 9., 9.],
         [9., 9., 9.]],

        [[9., 9., 9.],
         [9., 9., 9.],
         [9., 9., 9.]]])

Gradient along dim 1:
tensor([[[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]]])

Gradient along dim 2:
tensor([[[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]]])
```

## Frequently Asked Questions

### 1. What is the gradient in PyTorch tensor?

In PyTorch, a gradient represents the rate of change of a tensor with respect to its inputs. With `torch.gradient()`, the gradient is numerically estimated from sampled values of a function stored in a tensor, giving the partial derivatives along each dimension.

### 2. What is gradient in tensor?

The gradient in a tensor context refers to how the values inside the tensor change across its dimensions. For example, in a 2D tensor representing a surface, the gradient describes the slope in the row direction and the slope in the column direction.

### 3. What is gradient used for?

Gradients are used to analyze how a function changes with respect to its inputs. In PyTorch, they are fundamental for:

- **Optimization and training models** (via `.backward()` and `tensor.grad`).
- **Numerical analysis** (via `torch.gradient()` for sampled data).
- **Physics, simulations, and scientific computing** to approximate derivatives of multidimensional functions.
