---
Title: '.clamp()'
Description: 'Limits each element of a tensor to a specified range.'
Subjects:
  - 'AI'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Machine Learning'
  - 'Neural Networks'
  - 'Python'
CatalogContent:
  - 'learn-pytorch'
  - 'intro-to-py-torch-and-neural-networks'
---

The **`.clamp()`** method in PyTorch restricts each tensor element to a specified range, setting values below the minimum to the minimum and values above the maximum to the maximum. It is commonly used for normalization, gradient clipping, activation constraints, or to keep values within safe or interpretable ranges during model training and evaluation.

## Syntax

```pseudo
torch.clamp(input, min=None, max=None, *, out=None)
```

**Parameters:**

- `input`: Tensor with values to clamp.
- `min`: Lower bound to clamp values to. If `None`, no minimum is applied.
- `max`: Upper bound to clamp values to. If `None`, no maximum is applied.
- `out` (optional): Optional output tensor for `torch.clamp`.

> **Note:** At least one of the `min` or `max` values must be provided—otherwise, the tensor remains unchanged

**Return value:**

Returns a new tensor where each element is limited to the specified range `[min, max]`.

## Example

This example creates a tensor with values from `-5.0` to `5.0`, then uses the `.clamp()` method to restrict all values to the range `[-1.5, 1.5]` as follows:

```py
import torch

# Create a tensor with a range of values
tensor = torch.tensor([-5.00, -1.25, 0.00, 1.25, 5.00])

# Clamp values to the range [-1.50, 1.50]
clamped = tensor.clamp(min=-1.50, max=1.50)

# Print the clamped tensor
print(clamped)
```

The output of this code is:

```shell
tensor([-1.5000, -1.2500,  0.0000,  1.2500,  1.5000])
```
