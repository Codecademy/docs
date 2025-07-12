---
Title: '.exp()'
Description: 'Returns a new tensor with the exponential of each element in the input tensor.'
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

In PyTorch, the **`.exp()`** function computes the exponential of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). This is mathematically equivalent to applying the function $y_i = e^{x_i}$ element-wise, where `e` is Euler's number (approximately 2.71828).

## Syntax

```pseudo
torch.exp(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor containing elements for which the exponential will be computed.
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

Returns a new tensor where each element is the exponential of the corresponding element in the input tensor.

## Example

In this example, we compute the element-wise exponential of a tensor using `torch.exp()`:

```py
import torch
import math

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
