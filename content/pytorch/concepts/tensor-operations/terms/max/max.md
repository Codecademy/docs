---
Title: '.max()'
Description: 'Returns the maximum value of a tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Methods'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.max()`** method in PyTorch returns the maximum value from a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It can find the maximum value across the entire tensor. This method is commonly used in data analysis, finding peak values, and various neural network operations.

## Syntax

```pseudo
torch.max(input) → Tensor
```

**Parameters:**

- `input` (Tensor): The input tensor.

**Return value:**

Returns a tensor containing the maximum value from the `input`.

## Example

The following example demonstrates how to use the `.max()` method to find the maximum value in a tensor:

```py
import torch

# Create a tensor with various values
tensor = torch.tensor([1.5, -2.3, 0.0, 4.8, -1.2])

# Find the maximum value using the method form
max_value = tensor.max()

# Alternative: use the functional form
max_functional = torch.max(tensor)

print("Original Tensor:")
print(tensor)

print("\nMaximum Value (using .max()):")
print(max_value)

print("\nMaximum Value (using torch.max()):")
print(max_functional)

print("\nMaximum as Python number (using .item()):")
print(max_value.item())
```

This example results in the following output:

```shell
Original Tensor:
tensor([ 1.5000, -2.3000,  0.0000,  4.8000, -1.2000])

Maximum Value (using .max()):
tensor(4.8000)

Maximum Value (using torch.max()):
tensor(4.8000)

Maximum as Python number (using .item()):
4.800000190734863
```

In this example:

- The tensor contains five values: `1.5`, `-2.3`, `0.0`, `4.8`, and `-1.2`
- The `.max()` method identifies `4.8` as the maximum value in the tensor
- Both `.max()` and `torch.max()` produce identical results: `tensor(4.8000)`
- The `.item()` method converts the tensor result to a Python float: `4.800000190734863`
