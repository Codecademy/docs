---
Title: '.ldexp()'
Description: 'Returns a new tensor obtained by multiplying each element of the input tensor by a power of two.'
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

In PyTorch, the **`.ldexp()`** function computes a new [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors), where each element of `input` is multiplied by 2 raised to the power of the corresponding element in `other`. It is mathematically equivalent to the function $out_i = input_i * 2^{other_i}$.

This operation is commonly used to build floating-point numbers by combining mantissas (from `input`) with powers of two derived from integer exponents (from `other`).

## Syntax

```pseudo
torch.ldexp(input, other, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor containing the mantissas.
- `other`: A tensor of exponents (int or float), applied element-wise.
- `out` (Optional): The output tensor to store results. If not provided, a new tensor is returned.

**Return value:**

Returns a new tensor containing the result of the multiplication.

## Example

This example computes the multiplication between an input tensor and another tensor using `torch.ldexp()`:

```py
import torch
import math

# Define a tensor
input = torch.tensor([2.0, 4.0 , 5.0])

# Define the tensor of exponents
other = torch.tensor([2.0, 3.0, 4.0])

# Compute the multiplication between the two tensors
out = torch.ldexp(input, other)
print(out)
```

Here is the output:

```shell
tensor([ 8., 32., 80.])
```
