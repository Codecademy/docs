---
Title: '.exp()'
Description: 'Returns a new tensor with the exponential of the elements of the input tensor input..'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Machine Learning'
  - 'Functions'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.exp()`** function computes the exponential of each element in the input tensor. This is mathematically equivalent to applying the function $y_i = e^{x_i}$ element-wise, where `e` is Euler’s number (~2.71828).

## Syntax

```py
torch.exp(input, *, out=None) → Tensor
```

**Parameters :**

- input: The input tensor.
- out *(optional)*: The output tensor to store results.

**Return Value :**

A tensor with the same shape as `input`, where each element is converted from degrees to radians. If `out` is specified, the returned tensor is the same as `out`.

Example : 
```py
import torch

# Define a tensor
x = torch.tensor([0.0 , 1.0 , 2.0 , math.log(2.) ])

# Compute the exponential
result = torch.exp(x)

print(result)

```

The above code produces the following output:

```shell
tensor([1.0000 , 2.7183, 7.3891 , 2. ])
```