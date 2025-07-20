---
Title: '.copySign()'
Description: 'Creates a new tensor by copying the sign of one tensor to another tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'PyTorch'
  - 'Tensor'
  - 'Functions'
CatalogContent:
  - 'paths/data-science'
---

<!-- Description -->

Torch's **.copysign()** function is used to create a new tensor by copying the sign of one tensor (the second input) to another tensor (the first input), while preserving the magnitude of the first input. This function is particularly useful when maintaining the magnitude of one tensor and applying the sign of another tensor.

> **Notes:** When there is a boolean in the first input, it is converted to a float, where `True` becomes `1.0` and `False` becomes `0.0`. If the second tensor contains -0.0 or -0 the function will treat this as a negative sign, while a 0.0 or 0 will be treated as a positive sign, copying them over to the first tensor.

## Syntax

<!-- Syntax -->

```pseudo
print(torch.copysign(x, y))
```

**Parameters:**

<!-- Parameters -->

- `Input 1`: The first input must be a tensor containing booleans, integers, or floating-point numbers.
- `Input 2`: The second input must be a tensor containing integers or floating-point numbers. It may also be a number instead of a tensor.

> **Note:** The tensors must be [broadcastable](https://www.codecademy.com/resources/docs/numpy/array-broadcasting) in order to perform the operation. Otherwise this will result in a **RuntimeError**.

<!-- Return value -->

`Return`: The output tensor is generated using the shape and preserves the data type and magnitude or value of the first input tensor while using the sign of the second tensor.

## Example 1

<!-- Example -->

This example shows how to copy the sign from the `signs` tensor to the `magnitudes` tensor, outputting the `result` tensor. This also shows how to use `.copysign()` with a one-dimensional tensor applied to another one-dimensional tensor.

```py
import torch

# Initializing tensors
magnitudes = torch.tensor([-5.0, True, -8.0])
signs = torch.tensor([-0.0, 0.0, 3.0])

# Using torch.copysign to copy the sign from 'signs' to 'magnitudes'
result = torch.copysign(magnitudes, signs)
print(result)
```

The output of this code is as follows:

```shell
tensor([-5., 1., 8.])
```

## Example 2

This example shows how to copy the sign from the `signs` tensor to the `magnitudes` tensor, outputting the `result` tensor. It demonstrates how a one-dimensional tensor can be broadcast to a multi-dimensional tensor, affecting the output accordingly.

```py
import torch

torch.manual_seed(0)

magnitudes = torch.rand(3, 3)
'''tensor([[0.4963, 0.7682, 0.0885],
        [0.1320, 0.3074, 0.6341],
        [0.4901, 0.8964, 0.4556]])'''
signs = torch.tensor([0.6323, 0.3489, -0.4017])

# Using torch.copysign to copy the sign from 'signs' to 'magnitudes'
result = torch.copysign(magnitudes, signs)
print(result)
```

The output of this code is as follows:

```shell
tensor([[0.4963, 0.7682, -0.0885],
        [0.1320, 0.3074, -0.6341],
        [0.4901, 0.8964, -0.4556]])
```
