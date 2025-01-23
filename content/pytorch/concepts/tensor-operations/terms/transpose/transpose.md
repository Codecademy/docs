---
Title: '.transpose()'
Description: 'Reorders dimensions of a tensor by swapping two specified dimensions.'
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

In PyTorch, the `.transpose()` operation creates a view of the input tensor with the specified dimensions swapped, commonly used for matrix operations and reshaping data for neural network inputs. Unlike `permute()`, `transpose()` only swaps two dimensions at a time.

## Syntax

```pseudo
tensor.transpose(dim0, dim1)
```

- `dim0`: First dimension to be transposed
- `dim1`: Second dimension to be transposed

## Example

The following code creates a 2x3 tensor with 2 rows and 3 columns, then uses `transpose()` to swap row and column dimensions, resulting in a 3x2 tensor where original rows become columns and vice versa:

```py
import torch

# Create a 2x3 tensor and transpose its dimensions
x = torch.tensor([[1, 2, 3],
                 [4, 5, 6]])
y = x.transpose(0, 1)
print(y)
```

The above code will result in the following output:

```shell
tensor([[1, 4],
        [2, 5],
        [3, 6]])
```
