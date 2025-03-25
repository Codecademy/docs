---
Title: 'asinh()'
Description: 'Returns the inverse hyperbolic sine of each element in an input tensor.'
Subject:
 - 'AI'
 - 'Computer Science'
 - 'Data Science'
 - 'Data Visualtization'
 - 'Machine Learning'
Tags:
 - 'AI'
 - 'Machine Learning'
 - 'PyTorch'
CatalogContent:
 - 'intro-to-pytorch-and-neural-networks'
 - 'paths/data-science
---

The PyTorch method **`asinh()`** returns the inverted hyperbolic sine of each element of a given [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors)

## Syntax

```psuedo
torch.asinh(input, *, out=NONE) → Tensor
```

**Parameters**

- `input`: Can accept both real-valued and complex valued input tensors of any dimension.
- `out` (Optional): Stores the result of the `.asinh()` method. A new tensor will be created otherwise.

**Returns**

A new tensor with the inverse hyperbolic sine of each element from the input tensor.

## Example

The following demonstrates how to use `.asinh()` to compute the inverse hyperbolic sine for the real-valued 1D tensor.

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
