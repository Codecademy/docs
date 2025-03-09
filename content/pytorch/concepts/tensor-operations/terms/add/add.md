---
Title: '.add()'
Description: 'Performs element-wise addition of two tensors, with optional scaling. Supports broadcasting for tensors of different shapes.'
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

The **`.add()`** method in PyTorch computes the element-wise sum of two tensors. It supports broadcasting, allowing addition between tensors of different shapes if they are broadcastable. This operation is fundamental for mathematical computations in neural networks and data transformations.

## Syntax

```pseudo
torch.add(input, other, alpha=1)
```

- `input` (Tensor): The first input tensor.
- `other` (Tensor or Number): The second tensor/scalar to add.
- `alpha` (Number, optional): Multiplier for other before addition (default: 1).

The `.abs()` method returns a tensor where each element is the absolute value of the matching element in the input tensor.

## Example

This example demonstrates tensor addition with and without scaling:

```py
import torch

# Define tensors
a = torch.tensor([[1, 2], [3, 4]])
b = torch.tensor([[5, 6], [7, 8]])

# Element-wise addition
c = torch.add(a, b)      # Equivalent to a + b
d = a.add(b, alpha=0.5)  # a + (0.5 * b)

print("Basic Addition:")
print(c)

print("\nScaled Addition (alpha=0.5):")
print(d)
```

This example results in the following output:

```shell
Basic Addition:
tensor([[ 6,  8],
        [10, 12]])

Scaled Addition (alpha=0.5):
tensor([[ 3.5000,  5.0000],
        [ 6.5000,  8.0000]])
```

In this example:

- a, b are 2\*2 tensors. c is the result of basic addition operation where element-wise addition is computed.
- d is scaled addition. The alpha=0.5 scales tensor b before adding it to a.

## Additional Notes

- `Broadcasting:` Works with mismatched shapes (e.g., (3,1) + (1,4) → (3,4)).
- `In-Place Operation:` Use .add\_() to modify the original tensor.
- `Complex Numbers:` Handles complex tensors by adding real and imaginary components separately.
- `Device Consistency:` Both tensors must reside on the same device (CPU/GPU).
