---
Title: '.permute()'
Description: 'Returns a view of the given tensor with its dimensions permuted or rearranged according to a specific order.'
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

In PyTorch, the **`.permute()`** function returns a view of a given [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) with its dimensions permuted or rearranged according to a specific order.

## Syntax

```pseudo
torch.permute(input, dims)
```

- `input`: The tensor whose dimensions are to be permuted.
- `dims`: The order in which the dimensions are to be permuted.

## Example

The following example demonstrates the usage of the `.permute()` function:

```py
import torch

# Create a tensor of size (2, 3, 4)
ten = torch.randn(2, 3, 4)

# Permute the dimensions of the tensor in the order (2, 0, 1)
res = torch.permute(ten, (2, 0, 1))

# Print the size of the resultant tensor
print(res.size())
```

In the above example, the order `(2, 0, 1)`:

- Moves the dimension located at index `2` to index `0`
- Moves the dimension located at index `0` to index `1`
- Moves the dimension located at index `1` to index `2`

The above code produces the following output:

```shell
torch.Size([4, 2, 3])
```
