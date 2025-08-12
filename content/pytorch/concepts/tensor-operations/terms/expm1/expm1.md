---
Title: '.expm1()'
Description: 'Computes the exponential of the elements minus 1 of input.'
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

In PyTorch, the **`.expm1()`** function takes in an input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) and calculates value for each element in it. This function provides greater precision than $$exp(x) - 1$$ for small values of x. The value **`.expm1()`** function calculated using :

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

In this example, we use `.expm1()` function:

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
