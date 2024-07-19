---
Title: '.randn()'
Description: 'The .randn() function in PyTorch generates a tensor with random numbers drawn from a normal distribution with mean 0 and variance 1.'
Subjects:
  - 'Machine Learning'
Tags:
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'paths/data-science'
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---
**.randn()** is a function in PyTorch used to generate a tensor with random numbers drawn from a normal distribution with mean 0 and variance 1. This is useful for initializing weights in neural networks and for other purposes where random sampling is required.

## Foundations of .randn()

The foundation of `.randn()` revolves around its ability to create tensors filled with values sampled from a normal distribution. This is particularly useful in machine learning applications where randomized data is needed.

To begin using the `.randn()` function within PyTorch, the following syntax is used:
```pseudo
torch.randn(*size, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False) → Tensor
```

## Example
The following example Create a 4x4 tensor with random values from a normal distribution

```py
import torch
tensor = torch.randn(4, 4)
print(tensor)
```

This produces the following output:

```shell
tensor([[-0.7484,  1.2086,  0.3430,  0.6699],
        [ 0.7022,  0.0815,  0.4855,  0.1603],
        [-0.1214,  0.2484,  1.5672, -0.7005],
        [ 1.3106, -0.6518,  0.7351, -0.1027]])

```