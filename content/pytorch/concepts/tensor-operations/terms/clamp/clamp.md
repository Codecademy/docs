---
Title: '.clamp()'
Description: 'The PyTorch .clamp() method limits tensor values to a specified range, setting elements below the minimum to the minimum and elements above the maximum to the maximum'
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
  - 'learn-python-3'
  - 'paths/build-a-machine-learning-model'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/machine-learning'
  - 'py-torch-for-classification'
---

The **`.clamp()`** method in PyTorch limits tensor values to a specified range, setting elements below the minimum to the minimum and elements above the maximum to the maximum. It's used to normalize data or enforce constraints. PyTorch offers a functional version (`torch.clamp`), a tensor method (`.clamp`), and an in-place method (`.clamp_`).

## Syntax

```py
torch.clamp(input, min=None, max=None, *, out=None) -> Tensor
input.clamp(min=None, max=None) -> Tensor
input.clamp_(min=None, max=None) -> Tensor
```

**Parameters:**

- `input`: Tensor with values to clamp.
- `min`: Lower bound; values below this are set to `min`. If `None`, no lower bound.
- `max`: Upper bound; values above this are set to `max`. If `None`, no upper bound.
- `*`: Indicates that `out` must be passed as a keyword argument.
- `out`: Optional output tensor for `torch.clamp`.
- `.clamp_`: In-place operation.

At least one of the `min` or `max` must be provided, or the tensor remains unchanged. The `.clamp` method is equivalent to `torch.clamp` called on a tensor. The in-place `.clamp_` modifies the tensor directly, saving memory. Use this operation to stabilize gradients, ensure non-negative outputs, or cap values in neural network training.

This operation is commonly applied in scenarios like bounding activations in a neural network layor or preprocessing data to fit within a specific range. For example, clamping can prevent extreme values from destabilizing training or ensure outputs meet model requirements, such as probabilities between 0 and 1.

## Example

This example creates a tensor with values from -5.0 to 5.0. The `.clamp()` method restricts these values to the range [-1.5, 1.5], so -5.0 becomes -1.5, 5.0 becomes 1.5, and values like 0.0 remain unchanged. The result is a new tensor with all values within the specified bounds.

```py
import torch

# Create a tensor with a range of values
tensor = torch.tensor([-5.00, -1.25, 0.00, 1.25, 5.00])

# Clamp values to the range [-1.50, 1.50]
clamped = tensor.clamp(min=-1.50, max=1.50)

# Print the clamped tensor
print(clamped)
```

The output would be:

```shell
tensor([-1.5000, -1.2500,  0.0000,  1.2500,  1.5000])
```
