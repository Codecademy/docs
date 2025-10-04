---
Title: 'frac()'
Description: 'Extracts the fractional part of each element in a PyTorch tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Tensor'
CatalogContent:
  - 'learn-pytorch'
  - 'intro-to-py-torch-and-neural-networks'
  - 'learn-python-3'
---

In PyTorch, the **`torch.frac()`** function returns the **fractional part** of each element in a tensor. It removes the integer component and keeps only the decimal part. The fractional part preserves the sign of the original number, so negative values will have negative fractional parts.

Mathematically, for each element `x` in the tensor:

$$
\text{out}_i = \text{input}_i - \lfloor | \text{input}_i | \rfloor \cdot \text{sgn}(\text{input}_i)
$$

## Syntax

```pseudo
torch.frac(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor.
- `out` (optional): Output tensor to store the result.

**Return value:**

A tensor of the same shape as the input, containing only the fractional parts of the elements.

## Example 1: Fractional Part of a 1D Tensor

This example shows how to extract fractional parts from a 1D tensor with positive and negative values:

```py
import torch

x = torch.tensor([1.5, -2.7, 3.0, -4.9])
result = torch.frac(x)
print(result)
```

This example results in the following output:

```shell
tensor([ 0.5000, -0.7000,  0.0000, -0.9000])
```

## Example 2: Fractional Part of a 2D Tensor

This example demonstrates computing fractional parts for elements in a 2D tensor (matrix):

```py
import torch

x = torch.tensor([[2.3, -3.8],
                  [4.0, -5.1]])
print(torch.frac(x))
```

This example results in the following output:

```shell
tensor([[ 0.3000, -0.8000],
        [ 0.0000, -0.1000]])
```

## Example 3: Using `out` Parameter

This example shows how to use the `out` parameter to store results directly in a preallocated tensor:

```py
import torch

x = torch.tensor([6.25, -7.75, 0.0])
out_tensor = torch.empty_like(x)
torch.frac(x, out=out_tensor)
print(out_tensor)
```

This example results in the following output:

```shell
tensor([ 0.2500, -0.7500,  0.0000])
```

## Frequently Asked Questions

### 1. What does `.frac()` do in PyTorch?

The `torch.frac()` function extracts the fractional (decimal) part of each element in a tensor while removing the integer part.

### 2. Does `.frac()` always return positive values?

No. The fractional part preserves the sign of the original number. For example:

```py
import torch
print(torch.frac(torch.tensor([-2.7])))  # tensor(-0.7000)
```

### 3. When would you use `.frac()`?

- To isolate decimal values in data preprocessing.
- For scientific computing when the fractional part of values is relevant.
- In testing and numerical analysis to study non-integer behavior of data.
