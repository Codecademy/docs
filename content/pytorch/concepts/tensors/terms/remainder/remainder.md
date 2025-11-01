---
Title: '.remainder()'
Description: 'Computes the element-wise remainder of tensor division, where the result’s sign matches the divisor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`.remainder()`** function computes the element-wise remainder of division between two tensors or between a tensor and a scalar. The result always has the same sign as the divisor, unlike torch.fmod(), which matches the sign of the dividend.
This operation works with both integer and floating-point tensors.

## Syntax

```pseudo
torch.remainder(input, other)
```

**Parameters:**

- `input` (Tensor): The input tensor containing dividend values.
- `other` (Tensor or Number): The divisor. It can be a scalar or another tensor of compatible shape.
- `out` (Tensor, optional): The output tensor to store the result.

**Return value:**

Returns a tensor containing the element-wise remainder of the division.

- If `other` is a scalar, the operation is applied using the same divisor for all elements.
- If `other` is a tensor, element-wise division is performed.

## Example 1: Divide a 1D tensor by an integer

This example computes the remainder of each element in `x` when divided by 2, keeping the sign consistent with the divisor:

```py
import torch

x = torch.tensor([-3, -2, -1, 0, 1, 2, 3])
print(torch.remainder(x, 2))
```

The output of this code is:

```shell
tensor([1, 0, 1, 0, 1, 0, 1])
```

## Example 2: Divide a 2D tensor by an integer

In this example each negative number wraps around within the range `[0, 4)` since the remainder must match the divisor’s sign:

```py
import torch

A = torch.tensor([[ 1,  2,  3],
                  [-1, -2, -3]])
print(torch.remainder(A, 4))
```

The output of this code is:

```shell
tensor([[1, 2, 3],
        [3, 2, 1]])
```

## Example 3: Divide a tensor by another tensor

This example demonstrates element-wise remainder calculation between two tensors of the same shape:

```py
import torch

num = torch.tensor([ 3, -3,  3, -3], dtype=torch.int32)
den = torch.tensor([ 2,  2, -2, -2], dtype=torch.int32)
print(torch.remainder(num, den))
```

The output of this code is:

```shell
tensor([ 1,  1, -1, -1])
```

> **Note:** If `input` and `other` don’t share the same shape, PyTorch tries automatic size expansion (broadcasting). Dimensions match when they’re equal or one of them is 1 (aligned from the right). If no match is possible, a size-mismatch error is raised. For example: shape `(2, 3)` ÷ `(3,) → expands to (2, 3)` or shape `(2, 3)` ÷ `(2,) → mismatch.`

## Example 4: Divide a floating-point tensor by a number

This example calculates remainders for floating-point values, preserving the sign of the divisor:

```py
import torch

xf = torch.tensor([-7.5, 7.5, 5.0])
print(torch.remainder(xf, 4.0))
```

The output of this code is:

```shell
tensor([0.5, 3.5, 1.0])
```
