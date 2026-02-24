---
Title: '.tan()'
Description: 'Returns the tangent of each element in the input tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Deep Learning'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/machine-learning'
---

The **`torch.tan()`** function returns the tangent of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It is part of PyTorch’s math operations used in deep learning and scientific computing.

## Syntax

```pseudo
torch.tan(input, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): Input tensor with one or more elements in radians.
- `out` (Tensor, optional): Optional tensor to store the output.

**Return value:**

A tensor containing the tangent of each input element, with the same shape as the input tensor.

## Example 1: Using `torch.tan()` with a 1D tensor

In this example, `torch.tan()` computes the tangent of a 1D tensor containing angles in radians:

```py
import torch

# Create a tensor with values in radians
input_tensor = torch.tensor([0, torch.pi / 4, torch.pi / 6])

# Compute the tangent
output_tensor = torch.tan(input_tensor)

print(output_tensor)
```

The output of this code is:

```shell
tensor([0.0000, 1.0000, 0.5774])
```

## Example 2: Applying `torch.tan()` with a 2D tensor

In this example, `torch.tan()` is applied to a 2D tensor of angles in radians:

```py
import torch

# Create a 2x2 tensor with elements with values in radians
matrix = torch.tensor([[0, torch.pi / 4], [torch.pi, torch.pi / 6]])

# Compute the tangent
result = torch.tan(matrix)

print(result)
```

The output of this code is:

```shell
tensor([[0.0000e+00, 1.0000e+00],
        [8.7423e-08, 5.7735e-01]])
```
