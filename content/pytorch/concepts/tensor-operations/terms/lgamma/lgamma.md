---
Title: '.lgamma()'
Description: 'Computes the natural log of the absolute gamma function for each element in a tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Math'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.lgamma()`** function returns the natural logarithm of the absolute value of the gamma function for each element in an input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors).

## Syntax

```pseudo
torch.lgamma(input, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): Input tensor of floating point or complex numbers. Integer tensors are not supported.
- `out` (Optional): Output tensor to write results to.

**Return value:**

Returns a tensor of the same shape as the `input`, where each element is the log of the absolute gamma function of the corresponding input element.

## Example

```py
import torch

x = torch.tensor([0.5, 1.0, 2.5, 5.0, -0.5])

# Functional form
y1 = torch.lgamma(x)

# Tensor method
y2 = x.lgamma()

print(y1)
print(torch.allclose(y1, y2))
```

Here's the output of this code:

```shell
tensor([0.5724, 0.0000, 0.2847, 3.1781, 1.2655])
True
```
