---
Title: '.eye()'
Description: 'Returns a 2D tensor with ones on the diagonal and zeros elsewhere, creating an identity matrix.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.eye()`** function in PyTorch is used to create a 2D tensor representing an identity matrix. An identity matrix is a square matrix in which all elements of the principal diagonal are ones, and all other elements are zeros.

This function is commonly used in linear algebra operations and initializing neural network weights.

## Syntax

```pseudo
torch.eye(n, m=None, *, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False)
```

- `n`: Specifies the number of rows in the resulting 2-D tensor.
- `m` (Optional): Specifies the number of columns in the resulting tensor. Defaults to `None`, in which case the result is a square matrix with `m = n`.
- `out` (Optional): A tensor to store the output. If specified, the result is written into this tensor. Defaults to `None`.
- `dtype` (Optional): Specifies the desired data type of the resulting tensor. Defaults to the global PyTorch settings if not provided.
- `layout` (Optional): Defines the desired memory layout of the tensor. Defaults to `torch.strided`.
- `device` (Optional): The desired device on which to create the tensor. If not specified, the tensor will be created on the current device.
- `requires_grad` (Optional): If `True`, the resulting tensor will be created with gradient computation enabled. Defaults to `False`.

## Example

Here is an example that demonstrates the use of `.eye()` to create a _3x3_ identity matrix:

```py
import torch

# Create a 3x3 identity matrix
identity_matrix = torch.eye(3)

print(identity_matrix)
```

The output of the above code will be as follows:

```shell
tensor([[1., 0., 0.],
        [0., 1., 0.],
        [0., 0., 1.]])
```

## Codebyte Example

Here is an example that demonstrates the use of `.eye()` to create a _4x4_ identity matrix:

```codebyte/python
import torch

# Create a 4x4 identity matrix
identity_matrix = torch.eye(4)

print(identity_matrix)
```
