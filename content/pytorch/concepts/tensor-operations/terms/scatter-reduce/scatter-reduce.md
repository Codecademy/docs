---
Title: '.scatter_reduce()'
Description: 'Reduces values from the source tensor using the given reduction method and scatters the result into the input tensor at the specified indices.'
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

In PyTorch, the **`.scatter_reduce()`** function reduces all values in the source [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) using the given reduction method ([`sum`](https://www.codecademy.com/resources/docs/pytorch/tensors/sum), `prod`, [`mean`](https://www.codecademy.com/resources/docs/pytorch/tensors/mean), `amax`, `amin`) and scatters the result to the input tensor.

## Syntax

```pseudo
torch.scatter_reduce(input, dim, index, src, reduce, *, include_self=True)
```

- `input`: The input tensor.
- `dim`: The dimension along which to perform the reduction.
- `index`: A tensor that specifies the indices for reduction.
- `src`: The source tensor containing the values to be reduced.
- `reduce`: The reduction method to perform (`sum`, `prod`, `mean`, `amax`, `amin`).
- `include_self`: If `True` (default), the values from the `self` tensor (i.e., `input`) are used in the reduction.

## Example

The following example demonstrates the usage of the `.scatter_reduce()` function:

```py
import torch

# Create an input tensor
input = torch.tensor([21, 22, 23, 24])

# Create a source tensor containing the values
src = torch.tensor([11, 12, 13, 14, 15, 16])

# Create an index tensor containing the indices
index = torch.tensor([0, 1, 2, 2, 1, 0])

# Reduce the values along dimension 0 in 'src' and scatter the result to 'input'
res = torch.scatter_reduce(input, 0, index, src, reduce="sum")

# Print the resultant tensor
print(res)
```

The above code produces the following output:

```shell
tensor([48, 49, 50, 24])
```
