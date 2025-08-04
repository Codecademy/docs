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

In PyTorch, the `torch.erfinv()` function returns the inverse error function of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). The inverse error function is defined in the range (−1,1) as: $$erfinv(erf(x))=x$$.

## Syntax

```pseudo
torch.erfinv(input, *, out=None) → Tensor
```

Or,

```pseudo
torch.special.erfinv(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: A tensor containing values in the range (-1, 1).
- `out` (optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

It returns a new tensor of the same shape as the input, containing the computed inverse error function values for each corresponding element.

## Example

In this example, we compute the inverse error function values of each tensor using `torch.erfinv()`:

```py
import torch

# Define a tensor
x = torch.tensor([0, 0.5, -1.])

result = torch.erfinv(torch.tensor(x))

print(result)
```

Here is the output:

```shell
tensor([ 0.0000,  0.4769,    -inf])
```
