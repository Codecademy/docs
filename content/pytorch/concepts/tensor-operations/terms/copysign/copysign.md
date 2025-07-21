---
Title: '.copysign()'
Description: 'Returns a tensor with the magnitude of the first input and the sign of the second input, element-wise.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/data-science'
---

Torch's **`.copysign()`** function creates a new tensor by combining the magnitude of the first input with the sign of the second input, element-wise. This is useful when you want to retain values’ absolute sizes but align their signs to match another tensor.

> **Note:** If the first input contains booleans, they are cast to floats (`True` becomes `1.0`, `False` becomes `0.0`). `-0.0` or `-0` in the second input is treated as a negative sign, while `0.0` or `0` is treated as positive, and these signs are preserved when copied.

## Syntax

```pseudo
torch.copysign(input, other, *, out=None)
```

**Parameters:**

- `input` (Tensor): The input tensor providing magnitudes.
- `other` (Tensor): The tensor whose sign will be copied to input. Must be broadcastable to the shape of `input`.
- `out` (Tensor, optional): The tensor to store the output. Must have the same shape as the broadcasted result.

> **Note:** The tensors must be [broadcastable](https://www.codecademy.com/resources/docs/numpy/array-broadcasting) in order to perform the operation. Otherwise this will result in a **RuntimeError**.

**Return value:**

A tensor where each element has the absolute value of the corresponding element in `input` and the sign of the corresponding element in `other`.

## Example 1

This example shows how to copy signs from the `signs` tensor to the `magnitudes` tensor using `torch.copysign()`:

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

This example shows how to copy the sign from a one-dimensional `signs` tensor to a two-dimensional `magnitudes` tensor using broadcasting. Each row of `magnitudes` is aligned with the corresponding value in `signs`, and the sign is applied column-wise:

```py
import torch

torch.manual_seed(0)

# Create a 3x3 tensor of magnitudes
magnitudes = torch.rand(3, 3)
print("Magnitudes:\n", magnitudes)

# 1D tensor whose signs will be broadcast across rows
signs = torch.tensor([0.6323, 0.3489, -0.4017])

# Apply copysign with broadcasting
result = torch.copysign(magnitudes, signs)
print("\nResult:\n", result)
```

The output of this code is as follows:

```shell
Magnitudes:
 tensor([[0.4963, 0.7682, 0.0885],
        [0.1320, 0.3074, 0.6341],
        [0.4901, 0.8964, 0.4556]])

Result:
 tensor([[ 0.4963,  0.7682, -0.0885],
        [ 0.1320,  0.3074, -0.6341],
        [ 0.4901,  0.8964, -0.4556]])
```
