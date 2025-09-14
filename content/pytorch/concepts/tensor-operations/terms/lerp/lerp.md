---
Title: '.lerp()'
Description: 'Returns a new tensor as a result of a linear interpolation between two tensors and a scalar or tensor weight.'
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

In PyTorch, the **lerp()** function computes the linear interpolation between two [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors) `start` (from the `input`) and `end` with an auxiliary scalar or tensor `weight`. The result is stored in a new tensor `out`. This is mathematically equivalent to compute the function $out_i = start_i + weight_i * (end_i - start_i)$.
The shapes of both tensors must be [broadcastable](https://www.codecademy.com/resources/docs/numpy/array-broadcasting). If `weight` is a tensor, then all the shapes of `start`, `end` and `weight` must be [broadcastable](https://www.codecademy.com/resources/docs/numpy/array-broadcasting).

## Syntax

```pseudo
torch.lerp(input, end, weight, *, out=None)
```

**Parameters:**

- `input`: The input tensor containing the initial points.
- `end`: The ending tensor containing the finishing points.
- `weight`: A float scalar or a tensor with the weight for the interpolation formula.
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

Returns a new tensor containing the result given by the interpolation formula.

## Example

In this example, we compute the interpolation between two tensors and a float scalar weight `torch.lerp()`:

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
