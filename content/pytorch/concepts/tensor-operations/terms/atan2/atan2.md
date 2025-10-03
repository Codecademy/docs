---
Title: '.atan2()'
Description: 'Computes the arctangent of the quotient of two tensors, element-wise.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Deep Learning'
  - 'Math'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.atan2()`** function in PyTorch computes the element-wise arctangent of the quotient of two tensors. It is particularly useful in applications involving polar coordinates and can be visualized to understand its behavior across a range of input values. This function is commonly used to convert Cartesian coordinates to polar form by computing the angle (θ), making it especially useful in vector and trigonometric computations.

## Syntax

```pseudo
torch.atan2(input, other, *, out=None)
```

**Parameters:**

- `input`: The first input tensor (numerator) containing values for which to calculate the arctangent.
- `other`: The second input tensor (denominator) containing values for which to calculate the arctangent.
- `out` (Optional): The output tensor to store the result. If provided, its shape must match with the shape that the inputs broadcast to.

**Return value:**

Returns a tensor of the same shape as `input` and `other` containing the arctangent of each element, with values in the range [-π, π] radians.

## Example 1: Basic Usage of `.atan2()`

This example demonstrates how to apply the `.atan2()` function to two tensors and understand its output:

```py
import torch

# Create two tensors with different values
x = torch.FloatTensor([1.0, -0.5, 3.4, 0.2, 0.0, -2])
y = torch.FloatTensor([0.0, 1.0, -1.0, 0.5, -0.5, 2.0])

print("Input tensors:")
print(x)
print(y)

# Apply the .atan2() function
result = torch.atan2(x, y)
print("\nArctangent of the input tensors:")
print(result)
```

This example results in the following output:

```shell
Input tensors:
tensor([ 1.0000, -0.5000,  3.4000,  0.2000,  0.0000, -2.0000])
tensor([ 0.0000,  1.0000, -1.0000,  0.5000, -0.5000,  2.0000])

Arctangent of the input tensors:
tensor([-1.5708, -0.4636,  1.1659,  0.3805, -0.0000, -0.7854])
```

In the output, it can be seen that the arctangent of (1.0, 0.0) is approximately -1.5708 radians (or -90 degrees), while the arctangent of (0.0, 1.0) is 0.0 radians (0 degrees).

## Example 2: Visualizing the `.atan2()` Function

This example visualizes the `.atan2()` function to better understand its behavior across a range of input values:

```py
import torch
import numpy as np
import matplotlib.pyplot as plt

# Generate values for x-axis (input values)
x = np.linspace(-10, 10, 100)
y = np.linspace(-10, 10, 100)

# Convert NumPy arrays to PyTorch tensors
x_tensor = torch.FloatTensor(x)
y_tensor = torch.FloatTensor(y)

# Calculate arctangent values
z_tensor = torch.atan2(x_tensor.unsqueeze(1), y_tensor.unsqueeze(0))
z = z_tensor.numpy()

# Create the plot
plt.figure(figsize=(8, 6))
plt.contourf(x, y, z, levels=100, cmap='viridis')
plt.colorbar(label='Arctangent')
plt.title('Arctangent Function Visualization')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.grid(True)
plt.show()
```

This example results in the following output:

![A 2D plot, representing the output for the above .atan2() example, showing a smooth contour with labeled axes](https://raw.githubusercontent.com/Codecademy/docs/main/media/atan2_output1.png)
