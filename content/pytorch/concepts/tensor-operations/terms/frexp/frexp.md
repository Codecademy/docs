---
Title: '.frexp()'
Description: 'Decomposes input into mantissa and exponent tensors.'
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

In PyTorch, the **`.frexp()`** function takes a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) as input and returns a tuple containing two tensors: mantissa and exponent. The range of mantissa is the open interval (-1, 1). The original input can be reconstructed as :

$$\text{input} = \text{mantissa}\times 2^{\text{exponent}}$$

## Syntax

```pseudo
torch.frexp(input, *, out=None) -> (Tensor mantissa, Tensor exponent)
```

**Parameters:**

- `input`: The input tensor.
- `out` (Optional): A tuple of two tensors `(mantissa, exponent)` that will store the result. If provided, the output is written in place.

**Return value:**

It returns a tuple containing two tensors - mantissa and exponent.

## Example

In this example, we use `frexp()` , notice how we get two tensors mantissa and exponent ( which can give numerical stability when floating point numbers are too small or too large ) :

```py
import torch

x = torch.tensor([1. , 4. , 5. , 9. ])
mantissa, exponent = torch.frexp(x)

print(mantissa)
print(exponent)
```

The output of this code is:

```shell
tensor([0.5000, 0.5000, 0.6250, 0.5625])
tensor([1, 3, 3, 4], dtype=torch.int32)
```
