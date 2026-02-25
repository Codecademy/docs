---
Title: '.sign()'
Description: 'Returns a tensor with the sign of each element, indicating whether it is negative, zero, or positive.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Methods'
  - 'Programming'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.sign()`** method in PyTorch returns a new [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) with the sign of each element from the input tensor. It returns -1 for negative values, 0 for zero, and 1 for positive values. This method is commonly used in gradient-based optimization, activation functions, and mathematical operations where the direction or polarity of values matters.

## Syntax

```pseudo
torch.sign(input, *, out=None)
```

**Parameters:**

- `input` (Tensor): The input tensor whose signs are to be computed.
- `out` (optional): A tensor to store the output. Must have the same shape as `input`.

**Return value:**

The `.sign()` method returns a new tensor containing the sign of each element in the `input` tensor. Unless the `out` parameter is specified, the result is a new tensor.

## Example

This example demonstrates how to use the `.sign()` method on a tensor containing positive, negative, and zero values:

```py
import torch

# Create a tensor with mixed values
x = torch.tensor([1.5, -2.3, 0.0, 3.7, -0.5])

# Compute the sign of each element
y = torch.sign(x)

print(f"Original tensor: {x}")
print(f"Sign tensor: {y}")
```

This example results in the following output:

```shell
Original tensor: tensor([ 1.5000, -2.3000,  0.0000,  3.7000, -0.5000])
Sign tensor: tensor([ 1., -1.,  0.,  1., -1.])
```

In this example:

- Positive values (1.5, 3.7) return 1.
- Negative values (-2.3, -0.5) return -1.
- Zero (0.0) returns 0.
