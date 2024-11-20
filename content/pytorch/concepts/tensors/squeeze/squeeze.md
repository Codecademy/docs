---
Title: '.squeeze()'
Description: 'Returns a tensor with all dimensions of size 1 in the input removed, or removes specific singleton dimensions if specified.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, the **`.squeeze()`** method removes all dimensions of size 1 from the input tensor, reducing its shape. If a specific dimension is provided, it will only remove that singleton dimension, leaving the rest of the tensor unchanged.

## Syntax

```pseudo
torch.squeeze(input, dim=None)
```

- `input`: The input tensor from which dimensions will be squeezed.
- `dim` (Optional): The dimension to squeeze. If specified, it removes the dimension only if its size is 1. If set to `None` (default), all singleton dimensions (dimensions of size 1) are removed from the tensor.

> **Note**: If the specified dim is not a singleton (size 1), the tensor remains unchanged.

## Example

This example uses `.squeeze()` to remove the singleton dimensions from a tensor, reducing the shape from *(1, 3, 1, 4)* to *(3, 4)*:

```py
import torch

# Create a tensor with dimensions (1, 3, 1, 4) filled with zeros
input_tensor = torch.zeros(1, 3, 1, 4)

# Apply squeeze to remove singleton dimensions
squeezed_tensor = torch.squeeze(input_tensor)

# Print the shape of the original and squeezed tensors
print("Original shape:", input_tensor.shape)  # Output: torch.Size([1, 3, 1, 4])
print("Squeezed shape:", squeezed_tensor.shape)  # Output: torch.Size([3, 4])
```

Here is the output for the above example:

```shell
Original shape: torch.Size([1, 3, 1, 4])
Squeezed shape: torch.Size([3, 4])
```
