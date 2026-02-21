---
Title: '.round()'
Description: 'Rounds each element to the nearest integer or specified number of decimals.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'Integers'
  - 'Python'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.round()`** function returns a new [tensor](https://docs.pytorch.org/docs/stable/generated/torch.round.html#torch.round) with each element rounded to the nearest integer or to a specified number of decimal places. Values exactly halfway between two integers follow “round half to even,” also known as banker's rounding.

## Syntax

```pseudo
torch.round(input, *, decimals=0, out=None)
```

**Parameters:**

- `input` (tensor): The input tensor to be rounded.
- `decimals` (int, optional): Number of decimal places to round to.
  - Positive values round to the right of the decimal.
  - Negative values round to the left of the decimal.
  - Default is 0.
- `out` (Tensor, optional): A tensor to store the result.

**Return value:**

Returns a tensor containing the rounded values. If `out` is provided, the result is written into it and returned.

## Example

In this example:

In this example, `.round()` is used with default rounding, half-even rounding, and rounding with positive and negative decimal values:

```py
import torch

print(torch.round(torch.tensor([4.7, -2.3, 9.1, -7.7])))

# Halfway values follow round-half-to-even
print(torch.round(torch.tensor([-0.5, 0.5, 1.5, 2.5])))

# Rounding to a specific number of decimal places
print(torch.round(torch.tensor([0.1234567]), decimals=3))

# Rounding to the left of the decimal
print(torch.round(torch.tensor([1200.1234567]), decimals=-3))
```

The output of this code is:

```shell
tensor([ 5., -2.,  9., -8.])
tensor([-0., 0., 2., 2.])
tensor([0.1230])
tensor([1000.])
```
