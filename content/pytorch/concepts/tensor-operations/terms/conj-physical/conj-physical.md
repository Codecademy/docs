---
Title: '.conj_physical()'
Description: 'Computes the complex conjugate of each element in a tensor.'
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

In PyTorch, the **`.conj_physical()`** method computes the element-wise complex conjugate of a given tensor. If an element in the tensor is a complex number `a + bj`, its conjugate is `a - bj`. If an element is a real number, it remains unchanged. This operation physically applies the conjugation to the data in memory.

The `.conj_physical()` method is useful when working with complex tensors in scientific computing and deep learning, especially in scenarios where you need the conjugation to be physically realized in memory for performance or compatibility reasons.

Unlike in-place operations, `.conj_physical()` returns a new tensor with the conjugated values, leaving the original tensor unchanged.

## Syntax

```pseudo
torch.conj_physical(input, *, out=None)
```

**Parameters:**

- `input`: A tensor, can be real or complex. For complex tensors, it returns their element-wise complex conjugate.
- `out` (Optional): A tensor to store the output. Must be the same shape and type as the result. If provided, the result is written here.

**Return value:**

A new tensor with the complex conjugate of each element in `input`, physically applied in memory.

## Example

In this example, `.conj_physical()` computes the element-wise complex conjugate, returning a new tensor with negated imaginary parts:

```py
import torch

# Create a complex tensor
tensor = torch.tensor([1 + 2j, 3 + 4j, 5 + 6j])

# Compute the complex conjugate
conjugate = tensor.conj_physical()

print(conjugate)
```

The output of this code is as follows:

```shell
tensor([1.-2.j, 3.-4.j, 5.-6.j])
```
