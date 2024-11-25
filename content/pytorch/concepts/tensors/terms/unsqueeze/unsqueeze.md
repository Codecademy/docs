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

The **`.unsqueeze()`** method in PyTorch adds a new dimension of size one at the specified position in a tensor. It is commonly used to reshape tensors for operations like broadcasting or to match input dimensions for neural networks.

## Syntax

```pseudo
torch.unsqueeze(input, dim)
```

- `input`: The input tensor to which a new dimension will be added.
- `dim`: The index at which to insert the new dimension. This must be a valid dimension index for the tensor, including both positive and negative indices.

The method returns a new tensor with the additional dimension.

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
