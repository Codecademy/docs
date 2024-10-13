---
Title: '.linspace()'
Description: 'Returns a one-dimensional tensor with a specified number of evenly spaced values between the given start and end points.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`.linspace()`** function in PyTorch is used to return a one-dimensional tensor with a specified number of evenly spaced values between the given start and end points.

## Syntax

```pseudo
torch.linspace(start, end, steps)
```

- `start`: The starting value to be used.
- `end`: The ending value to be used.
- `steps`: The number of steps to be taken between the starting and ending values.

This function is particularly useful when there is a need to create a tensor of equally spaced points for plotting graphs or for performing other numerical computations.

## Example

The following example shows how to use the `.linspace()` function in PyTorch:

```py
import torch

# Create a tensor of 5 equally spaced points between 0 and 1
x = torch.linspace(0, 1, 5)

print(x)
```

The code above generates the following output:

```shell
tensor([0.0000, 0.2500, 0.5000, 0.7500, 1.0000])
```
