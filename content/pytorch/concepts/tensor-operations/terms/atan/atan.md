---
Title: '.atan()'
Description: 'Computes the inverse tangent of each element in the input tensor.'
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

The **`.atan()`** function in PyTorch computes the inverse tangent (arctangent) of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It returns a new tensor containing the arctangent values in radians. The arctangent function is the inverse of the tangent function, which means it returns the angle whose tangent is the given input value.

When applied to a PyTorch tensor, `.atan()` performs an element-wise operation, calculating the arctangent for each individual value. This function is particularly useful in various mathematical computations, computer vision applications, signal processing, and deep learning models where angle calculations are necessary.

## Syntax

```pseudo
torch.atan(input, *, out=None)
```

**Parameters:**

- `input`: The input tensor containing values for which to calculate the arctangent.
- `out` (Optional): The output tensor to store the result. If provided, it must have a shape that the inputs broadcast to.

**Return value:**

Returns a tensor of the same shape as `input` containing the arctangent of each element, with values in the range [-π/2, π/2] radians.

## Example 1: Basic Usage of `.atan()`

This example demonstrates how to apply the arctangent function to a simple tensor and understand its output:

```py
import torch

# Create a tensor with different values
x = torch.FloatTensor([1.0, -0.5, 3.4, 0.2, 0.0, -2])
print("Input tensor:")
print(x)

# Apply the arctangent function
result = torch.atan(x)
print("\nArctangent of the input tensor:")
print(result)

# Convert the result from radians to degrees
result_degrees = result * (180 / torch.pi)
print("\nArctangent in degrees:")
print(result_degrees)
```

This example results in the following output:

```shell
Input tensor:
tensor([ 1.0000, -0.5000,  3.4000,  0.2000,  0.0000, -2.0000])

Arctangent of the input tensor:
tensor([ 0.7854, -0.4636,  1.2847,  0.1974,  0.0000, -1.1071])

Arctangent in degrees:
tensor([ 45.0000, -26.5651,  73.6141,  11.3099,   0.0000, -63.4349])
```

In the output, it can be seen that the arctangent of 1.0 is approximately 0.7854 radians (or 45 degrees), while the arctangent of 0.0 is 0.0 radians (0 degrees).

## Example 2: Visualizing the Arctangent Function

This example visualizes the arctangent function to better understand its behavior across a range of input values:

```py
import torch
import numpy as np
import matplotlib.pyplot as plt

# Generate values for x-axis (input values)
x = np.linspace(-5, 5, 1000)

# Convert numpy array to PyTorch tensor
x_tensor = torch.FloatTensor(x)

# Calculate arctangent values
y_tensor = torch.atan(x_tensor)

# Convert back to numpy for plotting
y = y_tensor.numpy()

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2)
plt.grid(True, alpha=0.3)
plt.axhline(y=0, color='k', linestyle='-', alpha=0.3)
plt.axvline(x=0, color='k', linestyle='-', alpha=0.3)
plt.axhline(y=np.pi/2, color='r', linestyle='--', alpha=0.5, label='π/2')
plt.axhline(y=-np.pi/2, color='r', linestyle='--', alpha=0.5, label='-π/2')
plt.xlabel('x')
plt.ylabel('atan(x)')
plt.title('PyTorch torch.atan() Function Visualization')
plt.legend()
plt.ylim(-2, 2)
plt.show()

# Display the range of the arctangent function
print(f"The range of arctangent is: [{-np.pi/2:.4f}, {np.pi/2:.4f}] radians")
print(f"or approximately: [{-90:.1f}, {90:.1f}] degrees")
```

This example results in the following output:

![A 2D plot of the arctangent function using PyTorch, showing a smooth curve with asymptotes at ±π/2 and labeled axes](https://raw.githubusercontent.com/Codecademy/docs/main/media/atan_output1.png)

```shell
The range of arctangent is: [-1.5708, 1.5708] radians
or approximately: [-90.0, 90.0] degrees
```

This example also generates a plot showing how the arctangent function maps any real input to a value in the range `[-π/2, π/2]`. Notice how the function approaches but never quite reaches -π/2 as x approaches negative infinity, and π/2 as x approaches positive infinity.

## Example 3: Estimating Angles in a Right Triangle

This example demonstrates how to use torch.atan() to estimate angles in a right triangle given the opposite and adjacent sides:

```py
import torch
import matplotlib.pyplot as plt
import numpy as np

# Define opposite and adjacent sides for multiple right triangles
opposite = torch.tensor([1.0, 2.0, 0.5, 3.0, -1.5])
adjacent = torch.tensor([1.0, 1.5, 2.0, 4.0, 2.0])

# Calculate the angle in radians using atan(opposite / adjacent)
angles_rad = torch.atan(opposite / adjacent)

# Convert the angles to degrees
angles_deg = angles_rad * (180 / torch.pi)

# Print results
print("Right Triangle Sides and Their Estimated Angles:")
for i in range(len(opposite)):
  print(f"Triangle {i+1}: Opposite={opposite[i].item()}, Adjacent={adjacent[i].item()} -> Angle={angles_deg[i].item():.2f}°")

# Visualization
x_vals = adjacent.numpy()
y_vals = opposite.numpy()

plt.figure(figsize=(6, 6))
for i in range(len(x_vals)):
  plt.plot([0, x_vals[i]], [0, y_vals[i]], 'bo-', label=f'θ={angles_deg[i]:.1f}°' if i == 0 else "")

plt.axhline(y=0, color='k', linestyle='--', alpha=0.5)
plt.axvline(x=0, color='k', linestyle='--', alpha=0.5)
plt.xlabel('Adjacent Side')
plt.ylabel('Opposite Side')
plt.title('Estimating Right Triangle Angles using torch.atan()')
plt.legend()
plt.grid(True)
plt.show()
```

This example results in the following output:

![A 2D plot of right triangles estimating angles using PyTorch's atan(), with labeled sides and angles plotted from the origin](https://raw.githubusercontent.com/Codecademy/docs/main/media/atan_output2.png)

```shell
Right Triangle Sides and Their Estimated Angles:
Triangle 1: Opposite=1.0, Adjacent=1.0 -> Angle=45.00°
Triangle 2: Opposite=2.0, Adjacent=1.5 -> Angle=53.13°
Triangle 3: Opposite=0.5, Adjacent=2.0 -> Angle=14.04°
Triangle 4: Opposite=3.0, Adjacent=4.0 -> Angle=36.87°
Triangle 5: Opposite=-1.5, Adjacent=2.0 -> Angle=-36.87°
```

In this example, `.atan()` is used to calculate the angle of a right triangle given the opposite and adjacent sides.

To learn more about how to create, train, and test neural networks, check out this [Intro to PyTorch and Neural Networks](https://www.codecademy.com/enrolled/courses/intro-to-py-torch-and-neural-networks) course on Codecademy.
