---
Title: '.linspace()'
Description: 'Returns a one-dimensional tensor of the specified size, whose values are equally spaced from the given starting and ending values.'
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

The **`.linspace()`** function in Pytorch is used to create a one-dimensional tensor of steps equally spaced points between the start and end values. It takes three arguments: the start value, the end value, and the number of steps.

The function returns a one-dimensional tensor of equally spaced points between the start and end values.

## Syntax

```pseudo
torch.linspace(start, end, steps)
```

- `start` is the starting value of the sequence.
- `end` is the ending value of the sequence.
- `steps` is the number of steps to be taken between the start and end values.

This function is particularly useful when you need to create a tensor of equally spaced points for plotting graphs or for other numerical computations.

## Example

Let's see an example of how to use the `.linspace()` function in PyTorch:

```py
import torch

# Create a tensor of 10 equally spaced points between 0 and 1
x = torch.linspace(0, 1, 10)
print(x)
```

The code above generates the following output:

```shell
tensor([0.0000, 0.1111, 0.2222, 0.3333, 0.4444, 0.5556, 0.6667, 0.7778, 0.8889, 1.0000])
```

In this example, we created a tensor `x` containing 10 equally spaced points between 0 and 1 using the `.linspace()` function. The tensor `x` contains the values `[0.0000, 0.1111, 0.2222, 0.3333, 0.4444, 0.5556, 0.6667, 0.7778, 0.8889, 1.0000]`.

The `.linspace()` function is a convenient way to create a tensor of equally spaced points for various numerical computations in PyTorch.
