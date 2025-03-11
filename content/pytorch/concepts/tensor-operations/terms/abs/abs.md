---
Title: '.abs()'
Description: 'Computes the absolute value of each element in a PyTorch tensor, returning the magnitude for complex numbers.'
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

The **`.abs()`** method in PyTorch computes the absolute value of each [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) element. For real numbers, it returns the non-negative value. For complex numbers, it calculates the magnitude using √(real² + imag²). This method is useful in data preprocessing, signal processing, and mathematical transformations.

## Syntax

```pseudo
torch.abs(input)
```

- `input` (Tensor): The input tensor (can be real or complex).

The `.abs()` method returns a tensor where each element is the absolute value of the matching element in the input tensor.

## Example

This example shows how to use the `.abs()` method to compute absolute values for both real and complex tensors:

```py
import torch

# Define a tensor with real and complex numbers
tensor = torch.tensor([[-3.0, 2.5], [1 - 2j, 3 + 4j]])

# Compute absolute values
abs_tensor = tensor.abs()

print("Original Tensor:")
print(tensor)

print("\nAbsolute Values:")
print(abs_tensor)
```

This example results in the following output:

```shell
Original Tensor:
tensor([[-3.0000+0.j,  2.5000+0.j],
        [1.0000-2.j, 3.0000+4.j]])

Absolute Values:
tensor([[3.0000, 2.5000],
        [2.2361, 5.0000]])
```

In this example:

- **Real numbers**: -3.0 becomes 3.0, 2.5 remains 2.5.
- **Complex numbers**: 1 - 2j → √(1² + (-2)²) ≈ 2.2361; 3 + 4j → √(3² + 4²) = 5.0
