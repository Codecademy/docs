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

In PyTorch, the **`.diagonal_scatter()`** function inserts all values from the source [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) into the input tensor at specified diagonal indices.

## Syntax

```pseudo
torch.diagonal_scatter(input, src, offset=0, dim1=0, dim2=1)
```

- `input`: The input tensor.
- `src`: The source tensor containing the values to be inserted.
- `offset` (Optional): The diagonal along which the values are to be inserted.
  - If the value is `0` (default), it indicates the main diagonal.
  - If the value is more than `0`, it indicates above the main diagonal.
  - If the value is less than `0`, it indicates below the main diagonal.
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
