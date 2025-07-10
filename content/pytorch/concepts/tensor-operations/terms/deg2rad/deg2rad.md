---
Title: '.deg2rad()'
Description: 'Converts angles from degrees to radians.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Machine Learning'
  - 'Python'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.deg2rad()`** function converts angles from degrees to radians. This is especially useful when using trigonometric functions like `torch.sin()` or `torch.cos()`, which require input in radians.

## Syntax

```pseudo
torch.deg2rad(input, *, out=None)
```

**Parameters:**

- `input`: The input tensor containing angles in degrees.
- `out` (optional): The output tensor to store the result. If provided, the result is written to this tensor in-place.

**Return value:**

A tensor with the same shape as `input`, where each element is converted from degrees to radians. If `out` is specified, the returned tensor is the same as `out`.

## Example

The following example demonstrates the usage of the `.deg2rad()` function:

```py
import torch

# Define a tensor with angles in degrees
degrees = torch.tensor([0.0, 90.0, 180.0, 270.0])

# Convert to radians
radians = torch.deg2rad(degrees)

# Print the result
print(radians)
```

The above code produces the following output:

```shell
tensor([0.0000, 1.5708, 3.1416, 4.7124])
```
