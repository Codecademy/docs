---
Title: '.erfc()'
Description: 'Computes the complementary error function of input.'
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

In PyTorch, the **`.erfc()`** function returns the complementary error function of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). The complementary error function is written as:

$$erfc(x)= 1 - \frac{2}{\sqrt{\pi}}\int_0^1 e^{-t^2} dt$$

## Syntax

```pseudo
torch.erfc(input, *, out=None) → Tensor
```

Or,

```pseudo
torch.special.erfc(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor.
- `out` (Optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

It returns a new tensor of the same shape as the input, containing the computed complementary error function values for each corresponding element.

## Example

In this example, we compute the complementary error function values of each tensor using `.erfc()`:

```py
import torch

# Define a tensor
x = torch.tensor([0, -1., 10.])

result = torch.erfc(x)

print(result)
```

The output of this code is:

```shell
tensor([1.0000e+00, 1.8427e+00, 1.4013e-45])
```
