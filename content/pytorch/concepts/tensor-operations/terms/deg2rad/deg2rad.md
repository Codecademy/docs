---
Title: '.deg2rad()'
Description: 'Converts angles from degrees to radians.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Machine Learning'
  - 'Functions'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.deg2rad()`** function converts angles from degrees to radians. This is especially useful when working with trigonometric functions like `sin()` or `cos()`, which expect inputs in radians.

## Syntax

```py
torch.deg2rad(input, *, out=None)

```

-   `input`: A tensor containing angle values in degrees.
    
-   `out` _(optional)_: The output tensor.
    

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
