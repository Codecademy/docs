---
Title: '.expm1()'
Description: 'Calculates the exponential of each element in a tensor and then subtracts 1.'
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

In PyTorch, the **`.expm1()`** function takes in an input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) and returns a tensor where each element is the exponential of the input element minus 1. It provides greater precision than performing $$exp(x) - 1$$ directly, especially for small values of `x`. The function computes each element as:

$$y_i= e^{x_i}-1$$

## Syntax

```pseudo
torch.expm1(input, *, out=None) → Tensor
```

Or,

```pseudo
torch.special.expm1(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor.
- `out` (Optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

It returns a new tensor of the same shape as the input, containing the computed values for each corresponding element.

## Example

This example demonstrates the usage of the `.expm1()` function:

```py
import torch

# Define a tensor
x = torch.tensor([0, math.log(2.)])

result = torch.special.expm1(x)

print(result)
```

The output of this code is:

```shell
tensor([ 0.,  1.])
```
