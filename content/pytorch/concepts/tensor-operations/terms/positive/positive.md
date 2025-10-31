---
Title: '.positive()'
Description: 'Returns a copy of the input tensor with the same values. Implements the unary plus operation.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Methods'
  - 'Programming'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.positive()`** method in PyTorch returns a new [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) containing the same values as the input tensor. It implements the unary plus operation (`+tensor`), creating a copy of the tensor without modifying the values. This method is useful when an explicit copy or consistency with other unary operations in mathematical expressions is needed.

## Syntax

```pseudo
torch.positive(input)
```

**Parameters:**

- `input` (Tensor): The input tensor.

**Return value:**

The `.positive()` method returns a new tensor with the same values and data type as the input tensor.

## Example

This example demonstrates how to use the `.positive()` method to create a copy of a tensor:

```py
import torch

# Define a tensor with positive and negative values
tensor = torch.tensor([[-3.5, 2.1], [0.0, -7.8]])

# Apply the positive operation
positive_tensor = torch.positive(tensor)

# Verify they contain the same values
print("Original Tensor:")
print(tensor)

print("\nPositive Tensor:")
print(positive_tensor)

# Check if they are the same object
print("\nAre they the same object?", tensor is positive_tensor)
```

This example results in the following output:

```shell
Original Tensor:
tensor([[-3.5000,  2.1000],
        [ 0.0000, -7.8000]])

Positive Tensor:
tensor([[-3.5000,  2.1000],
        [ 0.0000, -7.8000]])

Are they the same object? False
```

In this example:

- **Value Preservation**: All values remain unchanged, including negative numbers (-3.5 stays -3.5, -7.8 stays -7.8).
- **New Tensor**: The `.positive()` method creates a new tensor object, as confirmed by the `is` comparison returning `False`.
- **Use Case**: This operation is equivalent to the unary `+` operator and is primarily used for creating explicit copies or maintaining consistency in mathematical operations.
