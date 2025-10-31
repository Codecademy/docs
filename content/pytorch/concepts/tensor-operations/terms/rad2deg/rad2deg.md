---
Title: '.rad2deg()'
Description: 'Converts the elements of a tensor from radians to degrees.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'PyTorch'
  - 'Tensor'
  - 'Trigonometry'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.rad2deg()`** method in PyTorch converts the elements of a tensor from **radians to degrees**. This is useful for trigonometric and rotational operations when working with angular measurements.

The operation is performed element-wise, meaning it applies the conversion formula ($$\text{degrees} = \text{radians} \times \frac{180}{\pi}$$) to every value in the tensor, returning a new tensor with the results.

This method is available for tensors with floating-point data types such as `torch.float16`, `torch.float32`, or `torch.float64`.

## Syntax

```pseudo
torch.rad2deg(input)
```

**Parameters:**
* `input` (Tensor): A tensor containing angular values in radians.

**Return value:**
Returns a tensor containing the degree equivalents of the original tensor's elements. The returned tensor has the same size and data type as the original input tensor.

## Example

This example demonstrates how to use `.rad2deg()` to convert common angular values ($\pi$ radians and $\frac{\pi}{2}$ radians) into degrees:

```python
import torch
import math

# Create a tensor with values in radians
radians_tensor = torch.tensor([
    math.pi / 2, 
    math.pi,     
    0.0           
])

print("Original Tensor (Radians):")
print(radians_tensor)

# Convert radians to degrees using torch.rad2deg()
degrees_tensor = torch.rad2deg(radians_tensor)

print("\nConverted Tensor (Degrees):")
print(degrees_tensor)
```

The output of this code is:

```shell
Original Tensor (Radians):
tensor([1.5708, 3.1416, 0.0000])

Converted Tensor (Degrees):
tensor([ 90.0000, 180.0000,   0.0000])
```