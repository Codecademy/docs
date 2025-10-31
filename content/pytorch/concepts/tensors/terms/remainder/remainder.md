---
Title: '.remainder()'
Description: 'Computes the remainder of tensor division; result sign matches the divisor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`.remainder()`** operation computes, for each value in a tensor, the remainder after division by a number or by another tensor. The remainder **has the same sign as the divisor**. Works with both integer and floating-point tensors.

## Syntax
To compute the remainder, use either of the following forms:
```pseudo
torch.remainder(input, other)
```
```pseudo
input.remainder(other)
```
Parameters:
- `input:` A tensor of integer or floating-point values.
- `other:` A non-zero number or a tensor used as the divisor.

Returns: 
A tensor of remainders. If `other` is a number, the same divisor is applied to every value in `input`. If `other` is a tensor of a compatible shape, division happens value by value.

## Example 1: Divide a 1D tensor by an integer

```py
import torch

x = torch.tensor([-3, -2, -1, 0, 1, 2, 3])
print(torch.remainder(x, 2))
```
**Output:**
```shell
tensor([1, 0, 1, 0, 1, 0, 1])
```

## Example 2: Divide a 2D tensor by an integer
```py
import torch

A = torch.tensor([[ 1,  2,  3],
                  [-1, -2, -3]])
print(torch.remainder(A, 4))
```
**Output:**
```shell
tensor([[1, 2, 3],
        [3, 2, 1]])
```
**Note:** For a positive divisor `d`, the remainder `r` is the unique value with `0 ≤ r < d` such that `a = d*q + r`.\
Thus for `d = 4`: `-1 → 3`, `-2 → 2`, `-3 → 1`, so `[-1, -2, -3]` becomes `[3, 2, 1]`.

## Example 3: Divide a tensor by another tensor
```py
import torch

num = torch.tensor([ 3, -3,  3, -3], dtype=torch.int32)
den = torch.tensor([ 2,  2, -2, -2], dtype=torch.int32)
print(torch.remainder(num, den))
```
**Output:**
```shell
tensor([ 1,  1, -1, -1])
```
**Note:** If `input` and `other` don’t share the same shape, PyTorch tries **automatic size expansion** (*broadcasting*). Dimensions match when they’re equal or one of them is 1 (aligned from the right). If no match is possible, a size-mismatch error is raised.\
**Examples:** shape `(2, 3)` ÷ `(3,) → expands to (2, 3)` or shape `(2, 3)` ÷ `(2,) → mismatch.`

## Example 4: Divide a floating-point tensor by a number
```py
import torch

xf = torch.tensor([-7.5, 7.5, 5.0])
print(torch.remainder(xf, 4.0))
```
**Output:**
```shell
tensor([0.5, 3.5, 1.0])
```
