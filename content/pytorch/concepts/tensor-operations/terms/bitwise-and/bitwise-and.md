---
Title: '.bitwise_and()'
Description: 'Performs the element-wise bitwise AND operation on tensors in PyTorch.'
Subjects:
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

The **`.bitwise_and()`** method in PyTorch performs an element-wise bitwise AND operation on two tensors or a tensor and a scalar. The result contains `1` where both corresponding bits are `1`, otherwise `0`. This function is useful for binary operations and low-level bit manipulation.

## Syntax

```pseudo
torch.bitwise_and(input, other, *, out=None) → Tensor
```

## Example

import torch

# Define two tensors
a = torch.tensor([5, 6, 7], dtype=torch.int32)  # Binary: [101, 110, 111]
b = torch.tensor([3, 2, 1], dtype=torch.int32)  # Binary: [011, 010, 001]

# Perform bitwise AND operation
result = torch.bitwise_and(a, b)

print("Bitwise AND Result:")
print(result)

## output
Bitwise AND Result:
tensor([1, 2, 1])

