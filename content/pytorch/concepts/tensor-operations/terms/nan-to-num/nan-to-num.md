---
Title: '.nan_to_num()'
Description: 'Replaces NaN, positive infinity, and negative infinity values in a tensor with specified finite values.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'PyTorch'
  - 'Tensor Operations'
CatalogContent:
  - 'intro-to-pytorch'
  - 'paths/data-science'
---

The **`.nan_to_num()`** function in PyTorch replaces `NaN` (Not a Number), positive infinity, and negative infinity values in a tensor with user-defined finite numbers. This is useful for handling invalid or extreme values in numerical computations.

## Syntax

```pseudo
torch.nan_to_num(input, nan=0.0, posinf=None, neginf=None, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): The input tensor to process.
- `nan` (Number, optional): The value to replace `NaN` with. Default is `0.0`.
- `posinf` (Number, optional): The value to replace positive infinity with. If `None`, positive infinities are replaced with the greatest finite value representable by the input's dtype. Default is `None`.
- `neginf` (Number, optional): The value to replace negative infinity with. If `None`, negative infinities are replaced with the lowest finite value representable by the input's dtype. Default is `None`.
- `out` (Tensor, optional): The output tensor to store the result. Default is `None`.

**Return value:**

A tensor with `NaN`, positive infinity, and negative infinity values replaced according to the specified parameters.

## Example 1: Replacing `NaN` Values

This example demonstrates how to clean a tensor that contains `NaN` values by replacing them with zeros, which is a common preprocessing step before mathematical operations:

```py
import torch

# Create a tensor with NaN values
x = torch.tensor([1.0, float('nan'), 3.0, float('nan'), 5.0])
print("Original tensor:", x)

# Replace NaN with 0.0
result = torch.nan_to_num(x, nan=0.0)
print("After nan_to_num:", result)
```

The output of this code is:

```shell
Original tensor: tensor([1., nan, 3., nan, 5.])
After nan_to_num: tensor([1., 0., 3., 0., 5.])
```

## Example 2: Replacing Infinity Values

This example shows how to replace both positive and negative infinity values with finite numbers to prevent overflow or undefined results in computations:

```py
import torch

# Create a tensor with infinity values
x = torch.tensor([1.0, float('inf'), -float('inf'), 4.0])
print("Original tensor:", x)

# Replace infinities with specific values
result = torch.nan_to_num(x, nan=0.0, posinf=100.0, neginf=-100.0)
print("After nan_to_num:", result)
```

The output of this code is:

```shell
Original tensor: tensor([1., inf, -inf, 4.])
After nan_to_num: tensor([1., 100., -100., 4.])
```

## Example 3: Handling Mixed Invalid Values

Here, the tensor contains a mix of `NaN`, positive infinity, and negative infinity. All invalid values are replaced in one pass, making the tensor safe for numerical operations like normalization or model input:

```py
import torch

# Create a tensor with various invalid values
x = torch.tensor([2.0, float('nan'), float('inf'), -float('inf'), 7.0])
print("Original tensor:", x)

# Replace all invalid values
result = torch.nan_to_num(x, nan=-1.0, posinf=999.0, neginf=-999.0)
print("After nan_to_num:", result)
```

The output of this code is:

```shell
Original tensor: tensor([2., nan, inf, -inf, 7.])
After nan_to_num: tensor([2., -1., 999., -999., 7.])
```
