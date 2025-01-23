---
Title: '.slice_scatter()'
Description: 'Inserts all values from the source tensor into the input tensor at the given dimension and returns a new tensor.'
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

In PyTorch, the **`.slice_scatter()`** function inserts all values from the source [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) into the input tensor at the given dimension. It returns a new tensor with fresh storage, rather than creating a view.

## Syntax

```pseudo
torch.slice_scatter(input, src, dim=0, start=None, end=None, step=1)
```

- `input`: The input tensor.
- `src`: The source tensor containing the values to insert into the `input` tensor.
- `dim`: The dimension along which the values are to be inserted. The default value is `0`.
- `start` (Optional): The starting index for inserting the values. The default value is `None`.
- `end` (Optional): The ending index for inserting the values. The default value is `None`.
- `step`: The number of elements to skip while inserting the values. The default value is `1`.

## Example

The following example demonstrates the usage of the `.slice_scatter()` function:

```py
import torch

# Create a 4x4 input tensor with all elements set to '0'
input = torch.zeros(4, 4)

# Create a 2x4 source tensor with all elements set to '1'
src = torch.ones(2, 4)

# Insert the values along dimension 0 in 'input'
res = torch.slice_scatter(input, src, 0, start=2)

# Print the resultant tensor
print(res)
```

The above code produces the following output:

```shell
tensor([[0., 0., 0., 0.],
        [0., 0., 0., 0.],
        [1., 1., 1., 1.],
        [1., 1., 1., 1.]])
```
