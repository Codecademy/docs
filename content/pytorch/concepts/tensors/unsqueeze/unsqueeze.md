---
Title: '.unsqueeze()'
Description: 'Adds a new dimension of size one to a PyTorch tensor at the specified position.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Programming'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.unsqueeze()`** method in PyTorch adds a new dimension of size one to a tensor at the specified position. It is often used to reshape tensors to align their dimensions for mathematical operations, such as broadcasting or feeding data into a neural network.

## Syntax

```pseudo
tensor.unsqueeze(dim)
```

- `dim`: The index at which to insert the new dimension. This must be a valid dimension for the tensor.

The function returns a new tensor with the additional dimension.

## Example

This example demonstrates adding a new dimension to a tensor using `.unsqueeze()`:

```py
import torch

# Create a 1D tensor
tensor = torch.tensor([1, 2, 3])

# Add a new dimension at position 0
unsqueezed_tensor_0 = tensor.unsqueeze(0)

# Add a new dimension at position 1
unsqueezed_tensor_1 = tensor.unsqueeze(1)

print("Original Tensor Shape:", tensor.shape)
print("Shape after unsqueeze(0):", unsqueezed_tensor_0.shape)
print("Shape after unsqueeze(1):", unsqueezed_tensor_1.shape)
```

This example results in the following output:

```shell
Original Tensor Shape: torch.Size([3])
Shape after unsqueeze(0): torch.Size([1, 3])
Shape after unsqueeze(1): torch.Size([3, 1])
```

In this example:

- `.unsqueeze(0)` adds a new dimension at the start, converting the tensor from shape `[3]` to `[1, 3]`.
- `.unsqueeze(1)` adds a new dimension after the first axis, resulting in the shape `[3, 1]`.
