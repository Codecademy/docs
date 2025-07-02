# torch.cos()

## Introduction
`torch.cos()` is a PyTorch tensor operation that computes the cosine of each element in the input tensor.

It is part of PyTorch’s extensive mathematical operations, which enable element-wise computations on tensors commonly used in scientific computing and deep learning.

## Syntax
```python
torch.cos(input, *, out=None) → Tensor

## Example

import torch

# Create a tensor with values in radians
x = torch.tensor([0, torch.pi / 2, torch.pi])

# Compute the cosine
y = torch.cos(x)

print(y)
# tensor([ 1.0000,  0.0000, -1.0000])
