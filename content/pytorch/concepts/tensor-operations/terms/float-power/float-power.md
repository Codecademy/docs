---
Title: '.float_power()'
Description: 'Raises each element of a tensor to the power of the given exponent with the result always returned in floating point.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Python'
  - 'Pytorch'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In PyTorch, **`.float_power()`** raises each element of a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) to the power of the given exponent with the result always returned in floating point.

## Syntax

```pseudo
torch.float_power(input, exponent, *, out=None)
```

**Parameters:**

- `input` (Tensor): The base tensor.
- `exponent` (Tensor or Scalar): The exponent to which each element of the input is raised. Must be broadcastable to input.
- `out` (Tensor, optional): The output tensor to store the result.

**Return value:**

- Returns a tensor containing the input elements raised to the specified power, with the result always in the floating point data type.

## Example 1: Tensor Base with Scalar Exponent

In this example, each element of the tensor is raised to the same scalar exponent `2`:

```py
import torch

base = torch.tensor([1, 2, 3, 4])
exp = 2
result = torch.float_power(base, exp)
print(result)
```

The output of this code is:

```shell
tensor([ 1.,  4.,  9., 16.])
```

## Example 2: Tensor Base with Tensor Exponents

In this example, each element of the base tensor is raised to the corresponding element in the exponent tensor, allowing for fractional powers:

```py
import torch

base = torch.tensor([1, 2, 3, 4])
exp = torch.tensor([0.5, 1, 1.5, 2])
result = torch.float_power(base, exp)
print(result)
```

The output of this code is:

```shell
tensor([ 1.0000,  2.0000,  5.1962, 16.0000])
```
