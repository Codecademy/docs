---
Title: '.log10()'
Description: 'RReturns a tensor containing the base-10 logarithm of each element in the input tensor.'
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

In PyTorch, the **`.log10()`** function computes the base-10 logarithm of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). Mathematically, this is equivalent to applying the function $y_i = \log_{10}(x_i)$ element-wise, where $log_{10}$ is the base-10 logarithm.

## Syntax

```pseudo
torch.log10(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor containing elements for which the logarithm will be computed.
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor. Must have the same shape as `input`.

**Return value:**

Returns a new tensor where each element is the base-10 logarithm of the corresponding element in `input`.

## Example

The following example shows how to compute the element-wise logarithm base 10 of a tensor using `torch.log10()`:

```py
import torch
import math

# Define a tensor
x = torch.tensor([5.0 , 6.0 , 7.0 , math.log(2.) ])

# Compute the logarithm base 10
result = torch.log10(x)

print(result)
```

Here is the output:

```shell
tensor([ 0.6990,  0.7782,  0.8451, -0.1592])
```
