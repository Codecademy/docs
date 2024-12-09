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
torch.eye(n, m, dtype=None, device=None, out=None)
```

- `n`: The number of rows in the resulting identity matrix.
- `m`: The number of columns in the resulting identity matrix.
- `dtype`: The desired data type of the returned tensor (optional).
- `device`: The device on which the tensor should be allocated (optional).
- `out`: The output tensor (optional).

## Example

Here is an example that demonstrates the use of `.eye()` to create a 3x3 identity matrix:

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

Here is an example that demonstrates the use of `.eye()` to create a 4x4 identity matrix:

```codebyte/python
import torch

# Create a 4x4 identity matrix
identity_matrix = torch.eye(4)

print(identity_matrix)
```
