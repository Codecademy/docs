---
Title: '.sin()'
Description: 'Computes the sine of each element in a PyTorch tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Integers'
  - 'Python'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.sin()`** function in PyTorch computes the sine of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). The operation is applied element-wise, using radians as the unit for angle values.

## Syntax

```pseudo
torch.sin(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: A tensor containing angle values in radians.
- `out` (optional): A tensor to store the output. If provided, the result is written into this tensor.

**Return value:**

Returns a new tensor where each element is the sine of the corresponding value in the input tensor.

## Example 1: Sine of Individual Values

This example computes the sine of common angle values (in radians):

```py
import torch
import math

x = torch.tensor([0.0, math.pi / 2, math.pi])

result = torch.sin(x)

print("Input:", x)
print("sin(x):", result)
```

The output of this code is:

```shell
Input: tensor([0.0000, 1.5708, 3.1416])
sin(x): tensor([ 0.0000e+00,  1.0000e+00, -8.7423e-08])
```

## Example 2: Element-wise Operation on a 2D Tensor

This example applies the sine function to every element of a 2D tensor:

```py
import torch

angles = torch.tensor([[0.0, 0.5],
                        [1.0, 1.5]])

result = torch.sin(angles)

print("Input tensor:")
print(angles)
print("\nSine of tensor:")
print(result)
```

The output of this code is:

```shell
Input tensor:
tensor([[0.0000, 0.5000],
        [1.0000, 1.5000]])

Sine of tensor:
tensor([[0.0000, 0.4794],
        [0.8415, 0.9975]])
```

The `.sin()` function preserves the shape of the input tensor and applies the sine operation independently to each value.
