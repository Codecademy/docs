---
Title: '.unravel_index()'
Description: 'Converts flat indices into coordinate tuples based on the shape of a tensor, enabling multi-dimensional indexing.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Tensor'
  - 'Index'
  - 'PyTorch'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.unravel_index()`** function in PyTorch maps flat (1D) indices to multi-dimensional coordinates using a specified [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) shape. This is particularly useful when working with operations that return linear indices and to find the positions in the original tensor’s dimensions.

## Syntax

```pseudo
torch.unravel_index(indices, shape)
```

- `indices` (Tensor): A 1D tensor containing flat indices to convert.
- `shape` (Tuple): The dimensions of the target tensor (e.g., `(rows, columns)`).

Returns a tuple of tensors, where each tensor represents the coordinate values along a specific dimension of the target shape.

## Example

### Basic Usage

Converting flat indices `[3, 1, 5]` into 2D coordinates for a tensor of shape `(2, 3)`:

```py
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

```py
import torch

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

For the 2D case (`shape = (2, 3)`)

- Index 3 corresponds to row `1` (`3 // 3 = 1`), column `0` (`3 % 3 = 0`).
- Index 1 corresponds to row `0` (`1 // 3 = 0`), column `1` (`1 % 3 = 1`).
- Index 5 corresponds to row `1` (`5 // 3 = 1`), column `2` (`5 % 3 = 2`).

For the 3D case (`shape = (2, 2, 3)`)

- Index 7 is in depth `1` (`7 // (2 * 3) = 1`), row `0` (`(7 % 6) // 3 = 0`), column `1` (`(7 % 6) % 3 = 1`).
- Index 2 is in depth `0` (`2 // (2 * 3) = 0`), row `0` (`(2 % 6) // 3 = 0`), column `2` (`(2 % 6) % 3 = 2`).
