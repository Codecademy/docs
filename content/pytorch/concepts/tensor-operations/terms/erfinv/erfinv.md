---
Title: '.erfinv()'
Description: 'Computes the inverse error function of input.'
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

In PyTorch, the **`.erfinv()`** is a special function. Computes the inverse error function of input. The inverse error function is defined in the range $(−1,1)$ as: \
erfinv(erf(x))=x 

## Syntax

```pseudo
torch.special.erfinv(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor.
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

Returns corresponding x-value for which the error function would produce that value.

## Example

In this example, we compute the element-wise exponential of a tensor using `torch.special.erfinv()`:

```py
import torch

# Define a tensor
x = torch.tensor([0, 0.5, -1.])

result = torch.special.erfinv(torch.tensor(x))


print(result)
```

Here is the output:

```shell
tensor([ 0.0000,  0.4769,    -inf])
```
