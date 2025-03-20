---
Title: '.randint()'
Description: 'Returns a tensor filled with random integers generated uniformly between specified bounds.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'PyTorch'
  - 'Random'
  - 'Tensor'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

**`.randint()`** is a function in [PyTorch](https://www.codecademy.com/resources/docs/pytorch) that generates [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors) filled with random integers sampled uniformly between a specified lower bound (inclusive) and an upper bound (exclusive) This function is particularly useful when you need tensors with random integer values within a specific range for various machine learning tasks.

`.randint()` is commonly used in deep learning workflows for tasks such as creating random masks, generating synthetic datasets, initializing tensor values with random integers, and implementing various randomized algorithms. It provides a convenient way to introduce controlled randomness into tensor operations.

## Syntax

```pseudo
torch.randint(low=0, high, size, *, generator=None, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False)
```

**Parameters:**

- `low`(Optional): The inclusive lower bound of the random integers. Defaults to `0`.
- `high`: The exclusive upper bound of the random integers.
- `size`: A tuple defining the shape of the output tensor.
- `generator`(Optional): A pseudorandom number generator for sampling.
- `out`(Optional): The output tensor to fill with random integers.
- `dtype`(Optional): The data type of the returned tensor. Default: `torch.int64`.
- `layout`(Optional): The desired layout of returned tensor. Default: `torch.strided`.
- `device`(Optional): The desired device of returned tensor. Default: Uses current device for the default tensor type.
- `requires_grad`(Optional): If autograd should record operations on the returned tensor. Default: `False`.

**Return value:**

Returns a tensor filled with random integers generated uniformly between `low` (inclusive) and `high` (exclusive).

> **Note:** If there is a need to generate a random integer tensor with the same shape as an existing tensor, use `torch.randint_like()`. It works similarly to `torch.randint()` but automatically inherits the shape and device of the given tensor.

## Example 1: Creating basic random integer tensors

This example demonstrates how to generate basic tensors with random integer values within specified ranges:

```py
import torch

# Create a 2x3 tensor with random integers between 0 and 10
basic_tensor = torch.randint(0, 10, (2, 3))
print("Random tensor with values between 0 and 10:")
print(basic_tensor)

# Create a 3x4 tensor with random integers between 5 and 15
larger_range = torch.randint(5, 15, (3, 4))
print("\nRandom tensor with values between 5 and 15:")
print(larger_range)

# Create a 2x2x2 3D tensor with random integers between -5 and 5
three_d_tensor = torch.randint(-5, 5, (2, 2, 2))
print("\nRandom 3D tensor with values between -5 and 5:")
print(three_d_tensor)
```

This example results in the following output:

```shell
Random tensor with values between 0 and 10:
tensor([[7, 9, 2],
        [3, 6, 8]])

Random tensor with values between 5 and 15:
tensor([[10, 13,  8, 14],
        [ 7,  5, 11,  9],
        [14, 12,  7,  6]])

Random 3D tensor with values between -5 and 5:
tensor([[[ 2, -2],
         [-3,  4]],

        [[ 0,  3],
         [-4, -1]]])
```

## Example 2: Generating random binary masks

This example shows how to create simple random binary masks (containing only 0s and 1s) using `.randint()`:

```py
import torch

# Set a seed for reproducibility
torch.manual_seed(42)

# Create a random binary mask (0 or 1) with shape 5x5
mask = torch.randint(0, 2, (5, 5))
print("Random binary mask:")
print(mask)

# Count how many 1s are in the mask
num_ones = mask.sum().item()
print(f"Number of 1s in the mask: {num_ones}")
print(f"Number of 0s in the mask: {mask.numel() - num_ones}")

# Apply the mask to a tensor of ones
data = torch.ones(5, 5)
masked_data = data * mask
print("\nData after applying the mask:")
print(masked_data)
```

This example results in the following output:

```shell
Random binary mask:
tensor([[1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1],
        [0, 0, 0, 1, 0],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0]])
Number of 1s in the mask: 10
Number of 0s in the mask: 15

Data after applying the mask:
tensor([[1., 1., 0., 0., 0.],
        [0., 0., 1., 1., 1.],
        [0., 0., 0., 1., 0.],
        [1., 1., 0., 1., 1.],
        [1., 0., 0., 0., 0.]])
```

## Example 3: Creating random dice rolls

This example demonstrates how to simulate dice rolls using `.randint()` to generate random integers between 1 and 6:

```py
import torch

# Set seed for reproducibility
torch.manual_seed(123)

# Simulate rolling a single die 10 times
single_die = torch.randint(1, 7, (10,))
print("10 dice rolls:")
print(single_die)

# Count the frequency of each number
for i in range(1, 7):
  count = (single_die == i).sum().item()
  print(f"Number {i} appeared {count} times")

# Simulate rolling 5 dice at once
dice_rolls = torch.randint(1, 7, (5,))
print("\n5 dice rolled simultaneously:")
print(dice_rolls)

# Calculate the sum of the dice
total = dice_rolls.sum().item()
print(f"Sum of all dice: {total}")
```

This example results in the following output:

```shell
10 dice rolls:
tensor([4, 2, 6, 1, 2, 6, 5, 2, 2, 5])
Number 1 appeared 1 times
Number 2 appeared 4 times
Number 3 appeared 0 times
Number 4 appeared 1 times
Number 5 appeared 2 times
Number 6 appeared 2 times

5 dice rolled simultaneously:
tensor([1, 3, 4, 6, 3])
Sum of all dice: 17
```

To learn more about how to create, train, and test neural networks, check out this [Intro to PyTorch and Neural Networks](https://www.codecademy.com/enrolled/courses/intro-to-py-torch-and-neural-networks) course on Codecademy.
