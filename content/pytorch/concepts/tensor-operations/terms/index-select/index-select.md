---
Title: '.index_select()'
Description: 'Extracts specific elements from a tensor along a specified dimension based on indices and returns a new tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Arrays'
  - 'Data Structures'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.index_select()`** function extracts specific elements from a tensor along a specified dimension based on indices and returns a new tensor.

## Syntax

```pseudo
torch.index_select(input, dim, index, out=None)
```

- `input`: The input tensor to select elements from.
- `dim`: The dimension along which to index (e.g., `0` for rows, `1` for columns).
- `index`: A 1-D tensor containing the indices to select from the specified dimension.
- `out` (Optional): The output tensor to store the result. If specified, the result will be written to this tensor instead of creating a new one.

> **Note:** If the `out` parameter is provided, the function stores the result in the given tensor. Otherwise, a new tensor is created and returned.

## Example

The following example demonstrates the use of `.index_select()`:

```py
import torch

# Define a 2D tensor
ten = torch.tensor([[1, 2, 3, -8],
                    [4, 3, 8, 0],
                    [-1, 7, 6, 3],
                    [5, 6, 9, 0]])

# Define indices to select
indices = torch.tensor([0, 2])

# Select rows from the tensor (dimension 0)
r = torch.index_select(ten, 0, indices)
print("Rows selected:")
print(r)

# Select columns from the tensor (dimension 1)
c = torch.index_select(ten, 1, indices)
print("Columns selected:")
print(c)
```

This will generate the output as follows:

```shell
Rows selected:
tensor([[ 1,  2,  3, -8],
        [-1,  7,  6,  3]])
Columns selected:
tensor([[ 1,  3],
        [ 4,  8],
        [-1,  6],
        [ 5,  9]])
```
