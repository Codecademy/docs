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

The **`.add()`** method in PyTorch computes the element-wise sum of two tensors, enabling arithmetic operations even between tensors of different shapes through broadcasting. Broadcasting automatically expands tensors with mismatched dimensions to compatible shapes, following NumPy-style rules. This method is foundational for tasks like neural network weight updates, residual connections, and feature engineering.

## Syntax

```pseudo
torch.add(input, other, alpha=1)
```

- `input` (Tensor): The first input tensor.
- `other` (Tensor or Number): The second tensor/scalar to add.
- `alpha` (Number, optional): Multiplier for other before addition (default: 1).

The `.add()` method returns a new tensor containing the element-wise sum.

## Example

This example demonstrates tensor addition with and without scaling:

```py
import torch

# Define 2x2 tensors
a = torch.tensor([[1, 2], [3, 4]])
b = torch.tensor([[5, 6], [7, 8]])

# Element-wise addition (a + b)
c = torch.add(a, b)

# Scaled addition (a + 2 * b)
d = a.add(b, alpha=2)

print("Basic Addition:")
print(c)

print("\nScaled Addition (alpha=2):")
print(d)
```

This example results in the following output:

```shell
Basic Addition:
tensor([[ 6,  8],
        [10, 12]])

Scaled Addition (alpha=2):
tensor([[11, 14],
        [17, 20]])
```

In this example:

- **Basic Addition**: Each element in a is added to the corresponding element in b (e.g., 1 + 5 = 6, 2 + 6 = 8).
- **Scaled Addition**: The alpha=2 parameter scales b by 200% before adding it to a (e.g., 1 + (2 \* 5) = 11).

## Additional Notes

- `Broadcasting:` Supports operations between tensors with mismatched shapes (e.g., (3,1) + (1,4) → (3,4)).
- `In-Place Operation:` Use .add\_() to modify the original tensor directly.
- `Complex Numbers:` Handles complex tensors by adding real and imaginary components separately.
- `Device Consistency:` Both tensors must reside on the same device (CPU/GPU).
