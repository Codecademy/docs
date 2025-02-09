---
Title: '.unravel_index()'
Description: 'Converts flat indices into coordinate tuples based on a tensor’s shape, enabling multi-dimensional indexing from linear indices.'
Subjects:
- 'Computer Science'
- 'Data Science'
Tags:
- 'Tensor'
- 'Index'
- 'PyTorch'
CatalogContent:
- 'learn-pytorch'
- 'paths/data-science'
---

The **`.unravel_index()`** function in PyTorch maps flat (1D) indices to multi-dimensional coordinates using a specified tensor shape. This is particularly useful when working with operations that return linear indices and to find the positions in the original tensor’s dimensions.

## Syntax

```python
torch.unravel_index(indices, shape) → tuple
```

- **`indices`** (Tensor or array-like): A 1D tensor of flat indices to convert.
- **`shape`** (tuple): The dimensions of the target tensor (e.g., `(rows, columns)`).

Returns a tuple of tensors, where each tensor corresponds to the coordinate in one dimension.

## Example

### Basic Usage

Converting flat indices `[3, 1, 5]` into 2D coordinates for a tensor of shape `(2, 3)`:

```python
import torch

# Flat indices and target shape
indices = torch.tensor([3, 1, 5])
shape = (2, 3)

# Get multi-dimensional coordinates
coords = torch.unravel_index(indices, shape)

print("Coordinates (row, column):")
for row, col in zip(*coords):
  print(f"({row}, {col})")
```

The above code will return the following output:

```shell
Coordinates (row, column):
(1, 0)
(0, 1)
(1, 2)
```

### 3D Tensor Example

Convert flat indices to coordinates in a 3D tensor of shape `(2, 2, 3)`:

```python
indices_3d = torch.tensor([7, 2])
shape_3d = (2, 2, 3)  # Dimensions: (depth, rows, columns)

coords_3d = torch.unravel_index(indices_3d, shape_3d)

print("Coordinates (depth, row, column):")
for d, r, c in zip(*coords_3d):
  print(f"({d}, {r}, {c})")
```

The above code returns the following output:

```shell
Coordinates (depth, row, column):
(1, 0, 1)
(0, 0, 2)
```

- For the 2D example, index `3` in a `(2, 3)` tensor corresponds to row `1` (since `3 // 3 = 1`) and column `0` (since `3 % 3 = 0`).
- In the 3D example, index `7` in a `(2, 2, 3)` tensor resolves to depth `1` (`7 // (2*3) = 1`), row `0` (`(7 % 6) // 3 = 0`), and column `1` (`(7 % 6) % 3 = 1`).

This function is essential for interpreting flattened tensor outputs in their original multi-dimensional context.
