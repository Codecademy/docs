---
Title: '.lerp()'
Description: 'Returns a tensor containing the linear interpolation of two tensors, controlled by a scalar or tensor weight.'
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

In PyTorch, the **`.lerp()`** function computes the linear interpolation between an input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) (`input`) and an end tensor (`end`), using a scalar or tensor `weight`. This is mathematically equivalent to applying the function $out_i = start_i + weight_i * (end_i - start_i)$.

The shapes of `input`, `end`, and `weight` must be [broadcastable](https://www.codecademy.com/resources/docs/numpy/array-broadcasting).

## Syntax

```pseudo
torch.lerp(input, end, weight, *, out=None)
```

**Parameters:**

- `input`: The input tensor containing the initial points.
- `end`: The ending tensor containing the finishing points.
- `weight`: The shapes of input, end, and weight must be
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

Returns a new tensor containing the result given by the interpolation formula.

## Example

The following example shows how to compute the interpolation between two tensors using `torch.lerp()` with a float scalar weight:

```py
import torch
import math

# Define two tensors
start = torch.tensor([12.0 , 14.0 , 16.0 , math.log(2.)])
end = torch.tensor([11.0 , 13.0 , 15.0 , math.log(2.)])

# Compute the interpolation with a float weight
out = torch.lerp(start, end, 0.8)

print(out)
```

Here is the output:

```shell
tensor([11.2000, 13.2000, 15.2000,  0.6931])
```
