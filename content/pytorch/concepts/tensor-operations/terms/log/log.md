---
Title: '.log()'
Description: 'Returns a new tensor with the natural logarithm of each element in the input tensor.'
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

In PyTorch, the **log()** function computes the natural logarithm of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). This is mathematically equivalent to applying the function $y_i = log_{e}(x_i)$ element-wise, where $log_{e}$ is the natural logarithm}$.

## Syntax

```pseudo
torch.log(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor containing elements for which the logarithm will be computed.
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

Returns a new tensor where each element is the natural logarithm of the corresponding element within the input tensor.

## Example

In this example, we compute the element-wise natural logarithm of a tensor using `torch.log()`:

```py
import torch
import math

# Define a tensor
x = torch.tensor([7.0 , 8.0 , 9.0 , math.log(3.)])

# Compute the natural logarithm
result = torch.log(x)

print(result)
```

Here is the output:

```shell
tensor([1.9459, 2.0794, 2.1972, 0.0940])
```
