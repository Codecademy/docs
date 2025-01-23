---
Title: '.select_scatter()'
Description: 'Inserts all values from the source tensor into the input tensor at the given indices.'
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

In PyTorch, the **`.select_scatter()`** function inserts all values from the source [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) into the input tensor at the given indices.

## Syntax

```pseudo
torch.select_scatter(input, src, dim, index)
```

- `input`: The input tensor.
- `src`: The source tensor containing the values to be inserted.
- `dim`: The dimension along which the values are to be inserted.
- `index`: The starting index for inserting the values.

## Example

The following example demonstrates the usage of the `.select_scatter()` function:

```py
import torch

# Create a 3x3 input tensor with all elements set to '0'
input = torch.zeros(3, 3)

# Create a source tensor containing the values
src = torch.tensor([4, 5, 6])

# Insert the values along dimension 0 in 'input'
res = torch.select_scatter(input, src, 0, 0)

# Print the resultant tensor
print(res)
```

The above code produces the following output:

```shell
tensor([[4., 5., 6.],
        [0., 0., 0.],
        [0., 0., 0.]])
```
