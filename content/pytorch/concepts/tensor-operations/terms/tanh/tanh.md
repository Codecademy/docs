---
Title: '.tanh()'
Description: 'Applies the hyperbolic tangent function to each element of a tensor, squashing values into the range −1 to 1.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'AI'
  - 'Deep Learning'
  - 'PyTorch'
  - 'Neural Networks'
CatalogContent: 
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`torch.tanh`** function applies the hyperbolic tangent to each element of a tensor and returns a new tensor with values smoothly mapped to the range −1 to 1.

## Syntax

```pseudo
torch.tanh(input, *, out=None)
```

**Parameters:**

- `input`: The input tensor
- `out` (optional): An optional tensor to store the result in (for memory reuse or performance control).

**Return value:**

Returns a new tensor of the same shape as input, with each value transformed to fall within the range −1 to 1.

## Example

In this example, `torch.tanh()` is applied to a randomly generated tensor to demonstrate how the function maps all values into the range −1 to 1:

```py
import torch

# Create a random tensor
x = torch.randn(3, 4)
print("Original tensor:")
print(x)

# Apply tanh activation
y = torch.tanh(x)
print("\nAfter TanH activation:")
print(y)

# Verify that all values are in the range [-1, 1]
print("\nMinimum value:", y.min().item())
print("Maximum value:", y.max().item())
```

The output of this code is:

```shell
Original tensor:
tensor([[ 0.5133,  0.7606, -0.4920,  0.8213],
        [-0.4287,  1.6746,  1.4581,  1.4763],
        [-0.8600, -0.2881,  2.4279, -0.0736]])

After TanH activation:
tensor([[ 0.4725,  0.6414, -0.4558,  0.6758],
        [-0.4042,  0.9322,  0.8973,  0.9008],
        [-0.6962, -0.2804,  0.9846, -0.0734]])

Minimum value: -0.6962396502494812
Maximum value: 0.9845553636550903
```
