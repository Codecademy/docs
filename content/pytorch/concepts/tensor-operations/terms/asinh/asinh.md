---
Title: '.asinh()'
Description: 'Returns the inverse hyperbolic sine of each element in an input tensor.'
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Machine Learning'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The PyTorch method **`.asinh()`** returns the inverse hyperbolic sine of each element in a given [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It is useful for mathematical and scientific computations involving hyperbolic functions.

## Syntax

```psuedo
torch.asinh(input, *, out=None) → Tensor
```

### Parameters

- `input`: A tensor containing real or complex values of any dimension.
- `out` (Optional): The output tensor to store the result. If not specified, a new tensor is returned.

### Returns

A new tensor containing the inverse hyperbolic sine of each element in the input tensor.

## Example

The following example demonstrates how to use `.asinh()` to compute the inverse hyperbolic sine for the real-valued 1D tensor:

```py
import torch

input_tensor = torch.tensor([0.125, 0.25, 0.5, 0.75])

output_tensor = torch.asinh(input_tensor)

print("Input Tensor:")
print(input_tensor)

print("\nOutput Tensor:")
print(output_tensor)
```

This example outputs:

```shell
Input Tensor:
tensor([0.1250, 0.2500, 0.5000, 0.7500])

Output Tensor:
tensor([0.1253, 0.2526, 0.5211, 0.8223])
```

The values in `output_tensor` represents the inverse hyperbolic sine of the corresponding values in `input_tensor`.
