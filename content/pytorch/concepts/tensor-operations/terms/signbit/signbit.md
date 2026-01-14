---
Title: '.signbit()'
Description: 'Returns a boolean tensor indicating whether each element has its sign bit set.'
Subjects:
  - 'Computer Science'cod
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Integers'
  - 'Python'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.signbit()`** function in PyTorch checks the sign bit of each element in a tensor and returns a boolean tensor. It evaluates to `true` for values that are negative (including -0.0) and `false` otherwise.

Unlike simple comparison operators, `.signbit()` works at the numerical representation level, making it useful when dealing with edge cases such as negative zero and floating-point sign handling.

## Syntax

```pseudo
torch.signbit(input) → Tensor
```

**Parameters:**

- `input`: A tensor containing numeric values whose sign bits are to be checked.

**Return value:**

Returns a boolean tensor of the same shape as `input`, where:

- `true` indicates the value has its sign bit set
- `false` indicates the value does not have its sign bit set

## Example 1: Detecting Negative Values

This example demonstrates how `.signbit()` identifies negative numbers in a tensor:

```py
import torch

x = torch.tensor([-3.0, -1.0, 0.0, 2.5])

result = torch.signbit(x)

print("Input tensor:", x)
print("Sign bit result:", result)
```

The output of this code is:

```shell
Input tensor: tensor([-3.0000, -1.0000,  0.0000,  2.5000])
Sign bit result: tensor([ True,  True, False, False])
```

Values less than zero return `true`, while zero and positive values return `false`.

## Example 2: Handling Negative Zero (`-0.0`)

This example shows how `.signbit()` treats negative zero differently from positive zero:

```py
import torch

x = torch.tensor([0.0, -0.0, 1.0, -1.0])

result = torch.signbit(x)

print("Input tensor:", x)
print("Sign bit result:", result)
```

The output of this code is:

```shell
Input tensor: tensor([ 0., -0.,  1., -1.])
Sign bit result: tensor([False,  True, False,  True])
```

Here, `-0.0` returns `true` because its sign bit is set, even though it compares equal to `0.0`.

## Example 3: Multi-Dimensional Tensor

This example applies `.signbit()` to a 2D tensor:

```py
import torch

x = torch.tensor([[1.0, -2.0],
                  [-0.0, 3.5]])

result = torch.signbit(x)

print("Input tensor:")
print(x)
print("\nSign bit result:")
print(result)
```

The output of this code is:

```shell
Input tensor:
tensor([[ 1.0000, -2.0000],
        [-0.0000,  3.5000]])

Sign bit result:
tensor([[False,  True],
        [ True, False]])
```

The returned tensor preserves the original shape and indicates the sign bit status for each element.
