---
Title: '.diagonal_scatter()'
Description: 'Inserts all values from the source tensor into the input tensor at specified diagonal indices.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.diagonal_scatter()`** function scatters all values from the source [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) into the specified diagonal of the input tensor.

## Syntax

```pseudo
torch.diagonal_scatter(input, src, offset=0, dim1=0, dim2=1)
```

- `input`: The input tensor that serves as the base tensor where values from `src` will be scattered into the specified diagonal.
- `src`: The source tensor containing the values to be inserted.
- `offset` (Optional): Specifies which diagonal to modify.
  - `offset = 0` (default): The main diagonal.
  - `offset > 0`: Diagonals above the main diagonal.
  - `offset < 0`: Diagonals below the main diagonal.
- `dim1` (Optional): The first dimension along which the values are to be inserted. The default value is `0`.
- `dim2` (Optional): The second dimension along which the values are to be inserted. The default value is `1`.

## Example

The following example demonstrates the usage of the `.diagonal_scatter()` function:

```py
import torch

# Create a 3x3 input tensor with all elements set to '0'
input = torch.zeros(3, 3)

# Create a source tensor containing the values
src = torch.tensor([1, 2, 3])

# Insert the values along the main diagonal in 'input'
res = torch.diagonal_scatter(input, src, 0)

# Print the resultant tensor
print(res)
```

The above code produces the following output:

```shell
tensor([[1., 0., 0.],
        [0., 2., 0.],
        [0., 0., 3.]])
```
