---
Title: '.cosh()'
Description: 'Returns the hyperbolic cosine of the given input.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Machine Learning'
  - 'Python'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.cosh()`** function computes the hyperbolic cosine of the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). Hyperbolic functions like `.cosh()` are often used in signal processing, physics simulations, and certain neural network transformations.

## Syntax

```pseudo
torch.cosh(input, *, out=None)
```

**Parameters:**

- `input`: The input tensor containing elements for which to compute the hyperbolic cosine.
- `out` (Optional): The output tensor to store the result. If provided, the result is written to this tensor in-place.

**Return value:**

A tensor with the same shape as `input`, where each element is hyperbolic cosine of given element. If `out` is specified, the returned tensor is the same as `out`.

## Example

This example demonstrates the usage of the `.cosh()` function:

```py
import torch

# Input tensor
a = torch.tensor([ 0.1632,  1.1835, -0.6979, -0.7325])

# Calculates hyperbolic cosine
out = torch.cosh(a)

# Print the result
print(out)
```

Here is the output:

```shell
tensor([ 1.0133,  1.7860,  1.2536,  1.2805])
```
