---
Title: '.scatter()'
Description: 'Writes values from a source into specific locations of a tensor along a specified dimension, based on indices.'
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

In PyTorch, the **`.scatter()`** function writes values from a source ([tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) or scalar) into specific locations of a tensor along a specified dimension, based on given indices.

## Syntax

```pseudo
torch.scatter(ten, dim, index, src)
```

- `ten`: The tensor where the values are to be inserted.
- `dim`: The dimension along which the values are to be inserted.
- `index`: The tensor which specifies the locations in `ten` where the values are to be inserted.
- `src`: The tensor which contains the values to be inserted.

## Example

The following example demonstrates the usage of the `.scatter()` function:

```py
import torch

# Create a tensor
ten = torch.tensor([[11, 12, 13, 14, 15], [16, 17, 18, 19, 20]])

# Create a tensor containing the locations
index = torch.tensor([[0, 2], [1, 3]])

# Create a tensor containing the values
src = torch.tensor([[21, 23], [27, 29]])

# Insert the given values into specified locations along dimension 1 in the original tensor
res = torch.scatter(ten, 1, index, src)

# Print the resultant tensor
print(res)
```

The above code produces the following output:

```shell
tensor([[21, 12, 23, 14, 15],
        [16, 27, 18, 29, 20]])
```
