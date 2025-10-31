---
Title: '.neg()'
Description: 'Returns a new tensor with the negative of each element in the input tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Methods'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.neg()`** method in PyTorch returns a new [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) with the negative of each element in the input tensor. This operation multiplies each element by -1, effectively flipping the sign of all values. The method is commonly used in mathematical operations, gradient computations, and transformations in neural networks.

## Syntax

```pseudo
torch.neg(input, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): The input tensor.
- `out` (Tensor, optional): The output tensor to store the result. Must have the same shape as `input`.

**Return value:**

Returns a new tensor where each element is the negative of the corresponding element in `input`.

## Example

The following example demonstrates how to use the `.neg()` method to negate tensor elements:

```py
import torch

# Create a tensor with positive and negative values
tensor = torch.tensor([1.5, -2.3, 0.0, 4.8, -1.2])

# Compute the negative using the method form
neg_tensor = tensor.neg()

# Alternative: use the functional form
neg_functional = torch.neg(tensor)

# Alternative: use the operator form
neg_operator = -tensor

print("Original Tensor:")
print(tensor)

print("\nNegated Tensor (using .neg()):")
print(neg_tensor)

print("\nNegated Tensor (using torch.neg()):")
print(neg_functional)

print("\nNegated Tensor (using - operator):")
print(neg_operator)
```

This example results in the following output:

```shell
Original Tensor:
tensor([ 1.5000, -2.3000,  0.0000,  4.8000, -1.2000])

Negated Tensor (using .neg()):
tensor([-1.5000,  2.3000, -0.0000, -4.8000,  1.2000])

Negated Tensor (using torch.neg()):
tensor([-1.5000,  2.3000, -0.0000, -4.8000,  1.2000])

Negated Tensor (using - operator):
tensor([-1.5000,  2.3000, -0.0000, -4.8000,  1.2000])
```

In this example:

- Positive values become negative: 1.5 → -1.5, 4.8 → -4.8
- Negative values become positive: -2.3 → 2.3, -1.2 → 1.2
- Zero remains zero: 0.0 → -0.0 (negative zero in floating-point)
- All three forms (`.neg()`, `torch.neg()`, and `-`) produce identical results
