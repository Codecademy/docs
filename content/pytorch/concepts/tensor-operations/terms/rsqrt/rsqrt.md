---
Title: '.rsqrt()'
Description: 'Computes the reciprocal of the square root of each element in a tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Math'
  - 'Methods'
  - 'Tensor'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.rsqrt()`** method in PyTorch computes the reciprocal of the square root of each element in a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It is applied element-wise and is commonly used in numerical operations and deep learning workflows where normalization is required.

Mathematically, this operation computes:

$\mathrm{rsqrt}(x) = \frac{1}{\sqrt{x}}$

## Syntax

```pseudo
torch.rsqrt(input)
```

Or, alternatively:

```pseudo
tensor.rsqrt()
```

**Parameters:**

- `input` (Tensor): The input tensor containing values for which the reciprocal square root is computed. All values in the input tensor must be non-negative.

**Return value:**

Returns a new tensor with the same shape as the input, where each element is replaced by its reciprocal square root.

## Example 1: Applying `.rsqrt()` to a tensor

This example demonstrates how `.rsqrt()` computes the reciprocal square root of each element in a tensor:

```py
import torch

x = torch.tensor([1.0, 4.0, 9.0, 16.0])
y = torch.rsqrt(x)

print(y)
```

The output of this code is:

```shell
tensor([1.0000, 0.5000, 0.3333, 0.2500])
```

Each value in the output is calculated as `1 / sqrt(x)`.

## Example 2: Using `.rsqrt()` in a normalization step

This example shows how `.rsqrt()` can be used to normalize values by scaling them using the reciprocal square root:

```py
import torch

values = torch.tensor([2.0, 8.0, 32.0])
scaled = values * torch.rsqrt(values)

print(scaled)
```

The output of the above code is:

```shell
tensor([1.4142, 2.8284, 5.6569])
```

Here, each value is multiplied by its reciprocal square root, resulting in scaled outputs often used in optimization and normalization operations.
