---
Title: '.clamp()'
Description: 'Limits each element of a tensor to a specified range [min, max].'
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Machine Learning'
  - 'Neural Networks'
  - 'Python'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-pytorch'
  - 'intro-to-py-torch-and-neural-networks'
---

The **`.clamp()`** method in PyTorch restricts each tensor element to a specified range, setting values below the minimum to the minimum and values above the maximum to the maximum. It is commonly used for normalization, gradient clipping, activation constraints, or to keep values within safe or interpretable ranges during model training and evaluation.

This operation is commonly applied in scenarios like bounding activations in a neural network layer or preprocessing data to fit within a specific range. For example, clamping can prevent extreme values from destabilizing training or ensure outputs meet model requirements, such as keeping probabilities between 0 and 1.

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

The output would be:

```shell
tensor([-1.5000, -1.2500,  0.0000,  1.2500,  1.5000])
```
