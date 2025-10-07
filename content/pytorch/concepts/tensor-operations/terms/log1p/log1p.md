---
Title: '.log1p()'
Description: 'Computes the natural logarithm of one plus the input tensor element-wise.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Index'
  - 'Values'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, **`.log1p()`** computes the natural logarithm of one plus the input tensor element-wise.

This function is particularly useful for numerical stability when dealing with small values, as it helps avoid issues that can arise when directly computing the logarithm of values close to zero.

## Syntax

```pseudo
torch.masked_select(input, mask, *, out=None)
```

- `input`: The input tensor for which the natural logarithm of one plus the elements will be computed.
- `out` (Optional): A tensor to store the result. If provided, the computed values will be written to this tensor instead of creating a new one.

## Example

```py
import torch

# Create a tensor
x = torch.tensor([0.0, 1.0, 2.0])

# Compute log1p
y = torch.log1p(x)

print(y)
```

The code above generates the output as follows:

```shell
tensor([0.0000, 0.6931, 1.0986])
```

In this example, the input tensor `x` contains the values `[0.0, 1.0, 2.0]`. The `log1p()` function computes the natural logarithm of one plus each element in the tensor, resulting in the output tensor `[0.0000, 0.6931, 1.0986]`.
