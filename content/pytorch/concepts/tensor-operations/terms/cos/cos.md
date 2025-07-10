---
Title: 'cos'
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

## torch.cos()

The `torch.cos()` function computes the cosine of each element in the input tensor.
It is part of PyTorch’s extensive mathematical operations, commonly used in scientific computing and deep learning.

This function is applied element-wise and returns a tensor with the same shape as the input.

### Syntax

```py
torch.cos(input, *, out=None) → Tensor
```

**Parameters:**
- `input` (Tensor): The input tensor containing elements (in radians) to compute the cosine.
- `out` (Tensor, optional): The output tensor to store the result.

**Returns:**
A tensor with the cosine of each element of the `input`.

### Example 1: Compute cosine of a 1D tensor

```py
import torch

# Create a tensor with values in radians
x = torch.tensor([0, torch.pi / 2, torch.pi])

# Compute the cosine
y = torch.cos(x)

print(y)
```

```shell
tensor([ 1.0000,  0.0000, -1.0000])
```

### Example 2: Applying `torch.cos()` on a 2D tensor

```py
import torch

# Create a 2x2 tensor
matrix = torch.tensor([[0, torch.pi / 3], [torch.pi / 2, torch.pi]])

# Compute the cosine
result = torch.cos(matrix)

print(result)
```

```shell
tensor([[ 1.0000,  0.5000],
        [ 0.0000, -1.0000]])
```

To learn more about tensor operations and mathematical functions in PyTorch, check out the [Intro to PyTorch and Neural Networks](https://www.codecademy.com/enrolled/courses/intro-to-py-torch-and-neural-networks) course on Codecademy.
