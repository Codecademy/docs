---
Title: '.conj_physical()'
Description: 'Computes the complex conjugate of a tensor's elements.'
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

In PyTorch, the **`.conj_physical()`** method computes the element-wise complex conjugate of a given tensor. If an element in the tensor is a complex number `a + bj`, its conjugate is `a - bj`. If an element is a real number, it remains unchanged. This operation is applied to the physical memory of the tensor.

The `.conj_physical()` method is particularly useful when working with complex tensors in scientific computing and deep learning applications, where the manipulation of complex numbers is often required.

The `.conj_physical()` method is particularly useful in scenarios where you need to ensure that the operation is performed on the physical memory of the tensor, which can be important for performance in certain applications.

The operation is performed in-place, meaning that it does not create a new tensor but modifies the existing one. However, it returns a new tensor with the conjugated values.

## Syntax

```pseudo
tensor.conj_physical()
```

## Example

```py
import torch

# Create a complex tensor
tensor = torch.tensor([1 + 2j, 3 + 4j, 5 + 6j])

# Compute the complex conjugate
conjugate = tensor.conj_physical()

print(conjugate)
```

## Output

```shell
tensor([1 - 2j, 3 - 4j, 5 - 6j])
```
