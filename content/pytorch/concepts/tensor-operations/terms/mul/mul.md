---
Title: '.mul()'
Description: 'Performs element-wise multiplication of two tensors or multiplies a tensor by a scalar.'
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

The **`.mul()`** function multiplies each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) with another tensor or a scalar and returns a tensor of the same shape as the input (or broadcasted shape when inputs have different shapes).

## Syntax

```pseudo
torch.mul(input, other, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): Input tensor.
- `other` (Tensor or Integer): The second input can be another tensor or a scalar value.
- `out` (Tensor, optional): Optional tensor to store the output.

**Return value:**

Returns a new tensor containing the result of the operation, or modifies the `out` tensor if provided.

## Example 1: Applying `.mul()` with a 1D tensor and a scalar

In this example, `.mul()` multiplies a 1D tensor and a scalar:

```py
import torch

# Create a tensor
x = torch.tensor([1, 2, 3])

# Multiply by scalar
result = torch.mul(x, 2)

print(result)
```

The output of this code is:

```shell
tensor([2, 4, 6])
```

## Example 2: Using `.mul()` with two 1D tensors

In this example, `.mul()` multiplies each element in a 1D tensor with another 1D tensor:

```py
import torch

# Create a tensor
x = torch.tensor([1.0, 2.0, 3.0])
# Create a second tensor
y = torch.tensor([4.0, 5.0, 6.0])

# Multiply by tensor
result = torch.mul(x, y)

print(result)
```

The output of this code is:

```shell
tensor([ 4., 10., 18.])
```

## Example 3: Using `.mul()` with a 2D tensor and a 1D tensor

In this example, `.mul()` multiplies a 2D tensor with a 1D tensor using broadcasting:

```py
import torch

# Create a 2x3 tensor
x = torch.tensor([[1.0, 2.5, 3.0],[4.0, 5.0, 6.5]])
# Create a second tensor
y = torch.tensor([7.0, 8.0, 9.1])

# Multiply by tensor
result = torch.mul(x, y)

print(result)
```

The output of this code is:

```shell
tensor([[ 7.0000, 20.0000, 27.3000],
        [28.0000, 40.0000, 59.1500]])
```
