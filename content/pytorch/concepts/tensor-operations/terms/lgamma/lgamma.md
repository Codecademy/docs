---
Title: '.lgamma()'
Description: 'Computes the natural log of the absolute gamma function for each tensor element.'
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

In PyTorch, the **`.lgamma()`** function returns the natural logarithm of the absolute value of the [gamma function](https://en.wikipedia.org/wiki/Gamma_function) for each element of an input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors).

## Syntax

```pseudo
torch.lgamma(input, *, out=None) → Tensor
input.lgamma() → Tensor
```

- `input` (Tensor): Input tensor of real numbers.
- `out` (Optional): Output tensor to write results to.

Returns a tensor with element-wise results. Note that the gamma function has singularities at non-positive integers; the log of its absolute value reflects these behaviors.

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

Example output:

```shell
tensor([0.5724, 0.0000, 0.2847, 3.1781, 1.2655])
True
```
