---
Title: '.randn()'
Description: 'Generates a tensor with random numbers drawn from a normal distribution.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'PyTorch'
  - 'Tensors'
  - 'Values'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`torch.randn()`** function in PyTorch generates a tensor with random numbers drawn from a normal distribution. This function is particularly useful for initializing weights in neural networks and for other purposes requiring randomized data, especially in machine learning applications.

## `torch.randn()` Syntax

```pseudo
torch.randn(*size, *, generator=None, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False, pin_memory=False)
```

**Parameters:**

- `*size`: Specifies the shape of the output tensor. This can be one or more integers, defining the dimensions of the tensor.
- `generator` (Optional): A pseudorandom number generator for sampling.
- `out` (Optional): A tensor where the result will be stored. If specified, the output is stored in this tensor; otherwise, a new tensor is created.
- `dtype` (Optional): The desired data type of the returned tensor.
- `layout` (Optional): The desired layout of the returned tensor. The default is `torch.strided`.
- `device` (Optional): The device on which the tensor is allocated.
- `requires_grad` (Optional): If set to `True`, PyTorch will track operations on the tensor for automatic differentiation. Defaults to `False`.
- `pin_memory` (Optional): If set to `True`, the tensor will be allocated in page-locked memory, which can speed up data transfer to CUDA devices.

**Return value:**

Returns a tensor of the specified shape, containing random numbers drawn from a normal distribution.

## Example 1: Basic Usage of `torch.randn()`

This example uses `torch.randn()` to create a 4x4 tensor with random values from a normal distribution:

```py
import torch

tensor = torch.randn(4, 4)

print(tensor)
```

Here is the output:

```shell
tensor([[ 1.6012,  0.1432,  2.1874,  1.1822],
        [-1.4331, -1.4752,  1.5541,  1.1185],
        [ 0.2751, -0.7885, -1.0202, -0.7851],
        [ 0.8050, -0.6548,  1.7703, -1.3595]])
```

> **Note:** This code may generate a random output each time it is run, as `torch.randn()` produces random values from a normal distribution.

## Example 2: Specifying Device and Data Type in `torch.randn()`

This example uses `torch.randn()` to create a 4×4 tensor on the CPU with double precision:

```py
import torch

tensor = torch.randn(4, 4, device='cpu', dtype=torch.float64)

print(tensor)
```

Here is the output:

```shell
tensor([[-0.8092, -0.6702, -0.6960,  0.2639],
        [ 0.6808,  0.5304, -0.8820, -0.7556],
        [ 0.1226, -1.0764,  0.9428,  1.4216],
        [-0.5007,  1.3984,  0.0343, -1.1393]], dtype=torch.float64)
```

## Example 3: Using `requires_grad` in `torch.randn()`

This example uses `torch.randn()` with `requires_grad` set to `True` to create a 4×4 tensor with gradient tracking:

```py
import torch

tensor = torch.randn(4, 4, requires_grad=True)

print(tensor)
```

Here is the output:

```shell
tensor([[ 0.8901,  0.6525, -0.7170, -1.2236],
        [-1.7839,  0.0180, -0.8420,  0.6561],
        [ 0.1359,  0.8233, -0.4252,  0.7597],
        [-1.1085,  0.9300,  0.1958, -0.9679]], requires_grad=True)
```

## Frequently Asked Questions

### 1. What does `torch.randn()` do?

`torch.randn()` creates a tensor containing random numbers drawn from a normal distribution.

### 2. What is the difference between `torch.rand()` and `torch.randn()`?

- `torch.rand()` generates numbers evenly spread between `0` and `1`.
- `torch.randn()` generates numbers based on the bell curve, centered at `0` with most values falling between `-3` and `3`.

### 3. What is the range of `torch.randn()`?

Theoretically, values for `torch.randn()` range from negative infinity to positive infinity because of the normal distribution. However, in practice, most values are between `-3` and `3`.
