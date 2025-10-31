---
Title: '.nextafter()'
Description: 'Returns the next floating-point value after each element of input in the direction of the corresponding element of other.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Operations'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-pytorch'
  - 'intro-to-py-torch-and-neural-networks'
---

The **`torch.nextafter()`** function returns the next representable floating-point value of each element in the `input` tensor in the direction of the corresponding element in the `other` tensor.

It’s useful for precise floating-point control, such as numerical stability adjustments or boundary value analysis.

> **Note:** If an element in `input` is equal to the corresponding element in `other`, that element is returned unchanged in the output tensor.

## Syntax

```pseudo
torch.nextafter(input, other, out=None)
```

**Parameters:**

- `input` (Tensor): The input tensor containing starting floating-point values.
- `other` (Tensor): The tensor indicating the direction for each element in `input`.
- `out` (Tensor, optional): The output tensor to store results. If not provided, a new tensor is returned.

**Return value:**

Returns a tensor of the same shape as `input`, where each element is the next representable floating-point value of `input` in the direction of `other`.

## Example

The following example shows how `torch.nextafter()` moves each element of one tensor slightly closer to the corresponding element in another tensor:

```py
import torch

# Create input tensors (float type)
input_tensor = torch.tensor([1.0, 5.0, -10.0, 8.0])
other_tensor = torch.tensor([2.0, 1.0, -11.0, 8.0])

# Calculate nextafter
result = torch.nextafter(input_tensor, other_tensor)

print("Input Tensor:")
print(input_tensor)

print("\nOther Tensor:")
print(other_tensor)

print("\nResult Tensor:")
print(result)
```

The output of the code is:

```shell
Input Tensor:
tensor([  1.,   5., -10.,   8.])

Other Tensor:
tensor([  2.,   1., -11.,   8.])

Result Tensor:
tensor([  1.0000,   5.0000, -10.0000,   8.0000])
```

In this:

- 1.0 becomes slightly larger since it moves toward 2.0.
- 5.0 becomes slightly smaller since it moves toward 1.0.
- -10.0 becomes slightly more negative since it moves toward -11.0.
- 8.0 remains unchanged since it is already equal to the corresponding value.
