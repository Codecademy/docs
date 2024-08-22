---
Title: '.randn()'
Description: 'Generates a tensor with random numbers drawn from a normal distribution.'
Subjects:
   - 'Data Science'
   - 'Machine Learning'
Tags:
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`.randn()`** function in PyTorch generates a tensor with random numbers drawn from a normal distribution with a mean of *0* and a standard deviation of *1*. This function is particularly useful for initializing weights in neural networks and for other purposes requiring randomized data, especially in machine learning applications.

## Syntax

```pseudo
torch.randn(*size, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False)
```

- `*size`: Specifies the shape of the output tensor. This can be one or more integers, defining the dimensions of the tensor.
- `out` (optional): A tensor where the result will be stored. If specified, the output is stored in this tensor; otherwise, a new tensor is created.
- `dtype` (optional): The desired data type of the returned tensor.
- `layout` (optional): The desired layout of the returned tensor. The default is `torch.strided`.
- `device` (optional): The device on which the tensor is allocated.
- `requires_grad` (optional): If set to `True`, PyTorch will track operations on the tensor for automatic differentiation. Defaults to `False`.

## Example

The following example uses `.randn()` to create a 4x4 tensor with random values from a normal distribution:

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

**Note:** This code will generate a different random output each time it is run, as `.randn()` produces random values from a normal distribution.
