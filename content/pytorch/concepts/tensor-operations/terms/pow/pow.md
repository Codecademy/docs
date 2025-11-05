---
Title: '.pow()'
Description: 'Raises each element of the input tensor to the specified power and returns a new tensor with the computed values.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Methods'
  - 'PyTorch'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.pow()`** method in PyTorch computes the power of each [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) element by raising it to a specified exponent.

## Syntax

```pseudo
torch.pow(input, exponent, *, out=None)
```

**Parameters:**

- `input`: The input tensor whose elements are to be raised to a power.
- `exponent`: The exponent value(s). If a tensor, it must be broadcastable to the shape of `input`.
- `out` (Optional): A tensor to store the output. If provided, it must have the same shape as `input`.

**Return value:**

Returns a new tensor containing the element-wise results of raising each input element to the specified power.

## Example

The following example demonstrates the usage of the `.pow()` function:

```py
import torch

# Define a tensor
input_tensor = torch.tensor([1.0, 0.5, 3.0, 5.5, 11.0])

# Compute the exponent of each element in the input tensor
output_tensor = torch.pow(input_tensor, 3)

# Print the resultant tensor
print(output_tensor)
```

The above code produces the following output:

```shell
tensor([1.0000e+00, 1.2500e-01, 2.7000e+01, 1.6638e+02, 1.3310e+03])
```
