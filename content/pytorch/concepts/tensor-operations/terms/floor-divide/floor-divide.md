---
Title: '.floor_divide()'
Description: 'Computes element-wise division of tensors (or tensor and scalar) and applies floor rounding.'
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

In PyTorch, the **`.floor_divide()`** function divides the `input` by other element-wise and rounds each quotient down to the nearest integer, returning the floored result as a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It supports broadcasting, type promotion, and both integer and floating-point operands. The operation can be expressed as:

$$\text{out}_i = \text{floor}(\frac{\text{input}_i}{\text{other}_i})$$

## Syntax

```pseudo
torch.floor_divide(input, other, *, out=None) → Tensor
```

**Parameters:**

- `input`: The input tensor. ( dividend )
- `other`: Tensor or Number. ( divisor )
- `out` (Optional): A tensor to store the output. If provided, the result is written to this tensor.

**Return value:**

It returns a new tensor of the same shape as the `input`, containing the result of element-wise division and rounds the result of the division down to the nearest integer.

## Example

In this example, we use `floor_divide()` to perform divison of two tensors `x` and `y` :

```py
import torch

x = torch.tensor([4.0, 3.0])

y = torch.tensor([2.0, 2.0])

print(torch.floor_divide(x, y))
```

The output of this code is:

```shell
tensor([2., 1.])
```
