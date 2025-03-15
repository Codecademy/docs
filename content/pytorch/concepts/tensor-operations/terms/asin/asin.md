---
Title: '.asin()'
Description: 'Computes the inverse sine (arcsine) of each element in a PyTorch tensor. Input values must be in the range [-1, 1]. Outputs are in the range [-π/2, π/2].'
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

The **`.asin()`** method in PyTorch computes the inverse sine (arcsine) of each element in a tensor. For real numbers, it returns the angle in radians whose sine is the input value. This method is useful in trigonometric computations, signal processing, and geometric transformations.

## Syntax

```pseudo
torch.asin(input)
```

- `input` (Tensor): The input tensor (elements must be in the range [-1, 1]).

The `.asin()` method returns a tensor where each element is the arcsine of the corresponding element in the input tensor. Values are in the range [-π/2, π/2].

## Example

This example shows how to use the `.asin()` method to compute the inverse sine of tensor elements:

```py
import torch

# Define a tensor with values in the range [-1, 1]
tensor = torch.tensor([0.0, 0.5, -1.0, 1.0])

# Compute inverse sine (arcsine)
asin_tensor = torch.asin(tensor)

print("Original Tensor:")
print(tensor)

print("\nArcsine Values:")
print(asin_tensor)
```

This example results in the following output:

```shell
Original Tensor:
tensor([ 0.0000,  0.5000, -1.0000,  1.0000])

Arcsine Values:
tensor([ 0.0000,  0.5236, -1.5708,  1.5708])
```

In this example:

- 0.0 → arcsine(0.0) = 0.0 radians.
- 0.5 → arcsine(0.5) ≈ 0.5236 radians (π/6).
- 1.0 → arcsine(-1.0) ≈ -1.5708 radians (-π/2).
- 1.0 → arcsine(1.0) ≈ 1.5708 radians (π/2).

## Additional Notes

- Valid Range: Input values outside [-1, 1] will result in NaN (not a number).
- In-Place Operation: Use `.asin_()` to modify the tensor directly.
- Complex Numbers: PyTorch's `.asin()` supports complex tensors, computing the complex arcsine.
