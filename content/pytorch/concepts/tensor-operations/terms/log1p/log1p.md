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

In PyTorch, **`.log1p()`** computes the natural logarithm of one plus the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) element-wise.

This function improves numerical stability for small input values, avoiding issues that can occur when computing the logarithm directly.

## Syntax

```pseudo
torch.log1p(input, *, out=None)
```

**Parameters:**

- `input`: The input tensor for which the natural logarithm of one plus the elements will be computed.
- `out` (Optional): A tensor to store the result. If provided, the computed values will be written to this tensor instead of creating a new one.

**Return value:**

Returns a new tensor with each element equal to the natural logarithm of one plus the corresponding element in the input tensor. The original tensor remains unchanged unless an `out` tensor is provided.

## Example

In this example, `.log1p()` computes the natural logarithm of one plus each element in a tensor:

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
