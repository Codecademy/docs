---
Title: '.nextafter()'
Description: 'Returns the next floating-point value after `input` in the direction of `other`.'
Subjects:
  - 'PyTorch'
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'PyTorch'
  - 'Tensor'
  - 'Operations'
  - 'Functions'
CatalogContent:
---

The **`.nextafter()`** function, `torch.nextafter()`, is a PyTorch function that computes the next representable floating-point value following each element in the `input` tensor in the direction of the corresponding element in the `other` tensor.

> **Note:** If an element in `input` is equal to the corresponding element in `other`, that element is returned unchanged in the output tensor.

## Syntax

```py
torch.nextafter(input, other, out=None)

import torch

# Create input tensors (must be float type)
input_tensor = torch.tensor([1.0, 5.0, -10.0, 8.0])
other_tensor = torch.tensor([2.0, 1.0, -11.0, 8.0])

# Calculate nextafter
result = torch.nextafter(input_tensor, other_tensor)

print(f"Input Tensor:\n{input_tensor}\n")
print(f"Other Tensor:\n{other_tensor}\n")
print(f"Result Tensor:\n{result}")

# 1.0 towards 2.0 -> slightly larger
# 5.0 towards 1.0 -> slightly smaller
# -10.0 towards -11.0 -> slightly smaller (more negative)
# 8.0 towards 8.0 -> unchanged

