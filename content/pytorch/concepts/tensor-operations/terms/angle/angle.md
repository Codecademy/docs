---
Title: '.angle()'
Description: 'Computes the element-wise angle of complex tensors in PyTorch.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Math'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.angle()`** method in [PyTorch](https://www.codecademy.com/resources/docs/pytorch) is a [tensor operation](https://www.codecademy.com/resources/docs/pytorch/tensor-operations) that computes the element-wise angle (in radians) of a given complex [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). This function returns the phase angle of each complex value in the tensor, representing the argument of each complex number. The `.angle()` method is particularly useful in signal processing, Fourier transforms, and other applications that involve complex number operations.

When working with complex tensors in PyTorch, the `.angle()` method allows you to extract the phase information from your data. This is essential for analyzing wave phenomena, processing image data in the frequency domain, and understanding the directional components of complex-valued [neural networks](https://www.codecademy.com/resources/docs/ai/neural-networks).

## Syntax

```pseudo
torch.angle(input, *, out=None)
```

**Parameters:**

- `input`: The input complex tensor for which to compute the element-wise angle.
- `out` (Optional): Output tensor to store the result. If provided, this tensor will be used for the output, otherwise a new tensor is created.

**Return value:**

A new tensor containing the element-wise angle (in radians) of the input tensor.

> **Note:** Starting in PyTorch 1.8, `.angle()` returns π (pi) for negative real numbers, zero for non-negative real numbers, and propagates NaNs. In previous versions, it would return zero for all real numbers and not propagate floating-point NaNs.

## Example 1: Calculating the element-wise angle of a complex tensor

This example demonstrates how to calculate the element-wise angle of a complex tensor and understand the output in radians:

```py
# Import the required libraries
import torch

# Create a complex tensor
input = torch.tensor([1 - 2j, 2 + 1j, 3 - 2j, -4 + 3j, -5 - 2j])

# Print the input tensor
print("\nInput Tensor: ", input)

# Compute the element-wise angle in radians
ang = torch.angle(input)

# Print the computed element-wise angle in radians
print("\nElement-wise angles in radian: ", ang)
```

This example produces the following output:

```shell
Input Tensor:  tensor([ 1.-2.j,  2.+1.j,  3.-2.j, -4.+3.j, -5.-2.j])

Element-wise angles in radian:  tensor([-1.1071,  0.4636, -0.5880,  2.4981, -2.7611])
```

The output shows the angle of each complex number in radians. For example, the angle of `1-2j` is approximately `-1.1071` radians.

## Example 2: Converting angles from radians to degrees

This example shows how to convert the angle from radians to degrees, which is often more intuitive for visualization and interpretation:

```py
# Import the required libraries
import torch
from numpy import pi

# Create a complex tensor
input = torch.tensor([1 - 2j, 2 + 1j, 3 - 2j, -4 + 3j, -5 - 2j])

# Print the input tensor
print("\nInput Tensor: ", input)

# Compute the element-wise angle in radians
ang = torch.angle(input)

# Convert the angle to degrees
deg = ang * 180 / pi

# Print the computed element-wise angle in degrees
print("\nElement-wise angles in degree: ", deg)
```

The example produces this output:

```shell
Input Tensor:  tensor([ 1.-2.j,  2.+1.j,  3.-2.j, -4.+3.j, -5.-2.j])

Element-wise angles in degree:  tensor([-63.4349,  26.5651, -33.6901, 143.1301, -158.1986])
```

Converting to degrees makes the angles easier to interpret in many applications, particularly when visualizing phases in a polar coordinate system.

## Example 3: Working with multi-dimensional complex tensors

This example demonstrates how the `.angle()` method handles multi-dimensional complex tensors, which is common in applications like image processing or multi-channel signal analysis:

```py
# Import the required libraries
import torch
from numpy import pi

# Define a complex 2D tensor
input = torch.tensor([
    [1 - 2j, 2 + 3j, 3 - 3j],
    [4 + 3j, 5 - 4j, -6 + 2j],
    [-7 - 2j, 8 + 2j, 9 - 4j]
])

# Print the input tensor
print("\nInput Tensor:\n", input)

# Compute the element-wise angle in radians
radians = torch.angle(input)

# Print the computed element-wise angle in radians
print("\nElement-wise angles in radians:\n ", radians)

# Convert the angle to degrees
degree = radians * 180 / pi

# Print the computed element-wise angle in degrees
print("\nElement-wise angles in degrees:\n ", degree)
```

This example produces the following output:

```shell
Input Tensor:
 tensor([[ 1.-2.j,  2.+3.j,  3.-3.j],
         [ 4.+3.j,  5.-4.j, -6.+2.j],
         [-7.-2.j,  8.+2.j,  9.-4.j]])

Element-wise angles in radians:
  tensor([[-1.1071,  0.9828, -0.7854],
         [ 0.6435, -0.6747,  2.8198],
         [-2.8633,  0.2450, -0.4182]])

Element-wise angles in degrees:
  tensor([[-63.4349,   56.3099,  -45.0000],
         [ 36.8699,  -38.6598,  161.5650],
         [-164.0546,   14.0362,  -23.9625]])
```

This example shows how `.angle()` preserves the dimensionality of the input tensor, calculating the phase angle for each complex value while maintaining the original structure.

To learn more about how to create, train, and test neural networks, check out this [Intro to PyTorch and Neural Networks](https://www.codecademy.com/enrolled/courses/intro-to-py-torch-and-neural-networks) course on Codecademy.
