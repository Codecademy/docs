---
Title: '.tahn()'
Description: 'torch.tanh is a PyTorch mathematical function that applies the hyperbolic tangent to every element of an input tensor.'
Subjects:
  - 'AI'
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

The **`.tahn()`** function returns a new tensor whose elements are the hyperbolic tangent of the corresponding elements in the input tensor. The output is computed element‑wise, meaning each value is transformed independently. An optional out argument allows you to write the result into an existing tensor.

## Syntax

torch.tanh(input, out=some_tensor)
  out'i' = tanh( input'i' )
  

Parameters
- `input`: The input tensioner
Keyword Arguments
- `out`  : (Tensor, optional) – the output tensor.

## Example


```py
import torch

# Create a random tensor
x = torch.randn(3, 4)
print("Original tensor:")
print(x)

# Apply TanH activation
y = torch.tanh(x)
print("\nAfter TanH activation:")
print(y)

# Verify that all values are in the range [-1, 1]
print("\nMinimum value:", y.min().item())
print("Maximum value:", y.max().item())
```

terminal output

``shell
Original tensor:
tensor([[ 1.0010, -0.5352, -1.0885, -0.2962],
        [-0.6553, -0.7878, -0.9948, -0.6779],
        [ 0.8341,  0.1717, -1.2512, -0.1460]])
After TanH activation:
tensor([[ 0.7620, -0.4893, -0.7963, -0.2878],
        [-0.5752, -0.6571,  0.7594, -0.5901],
        [ 0.6827, 0.1700,  -0.8486, -0.1449]])

Minimum value: 0.8486084938049316
Maximum value: 0.7620325684547424
``
