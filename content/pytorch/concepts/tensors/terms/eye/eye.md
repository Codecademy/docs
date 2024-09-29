---
Title: '.eye()' 
Description: 'In PyTorch, the `.eye()` method creates a 2D tensor with ones on the diagonal and zeros elsewhere, which forms an identity matrix.' 
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Algorithms'
  - 'Data'
  - 'Machine Learning'
  - 'Neural Networks'
CatalogContent:
  - 'learn-python-3'
  - 'intro-to-py-torch-and-neural-networks'
  -  'paths/computer-science'
---

The **`torch.eye()`** method in PyTorch, is used to create a 2D tensor with ones on the diagonal and zeros elsewhere. This forms an identity matrix. This method also doesn't directly support broadcasting, but, you can manipulate its output to fit into larger tensors.

## Syntax

```pseudo 
torch.eye(n, m=None, dtype=None, device=None, requires_grad=False)

```
### Example

The below example demonstartes the implementation of `.eye()` method.

```py
import torch

# Create a 3x3 identity matrix
ten1 = torch.eye(5)

# Print the identity matrix
print(ten1)

```
## Codebyte Example

```codebyte/python
# Code Byte Example: PyTorch `torch.eye()` for Non-Square Matrix

import torch

# Create a 4x5 matrix with ones on the diagonal
non_square_matrix = torch.eye(4, 5)

# Output the non-square matrix
print(non_square_matrix)

```
