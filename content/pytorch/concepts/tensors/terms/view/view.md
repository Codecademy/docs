---
Title: '.view()'
Description: 'Reshapes a tensor to a specified shape without changing its data, as long as the total number of elements remains the same.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.view()`** method in PyTorch reshapes a tensor without altering its underlying data, provided the total number of elements remains the same. This method is useful when preparing tensors for operations requiring specific dimensions, such as neural network inputs.

## Syntax

```pseudo
tensor.view(shape)
```

- `shape`: A tuple or list defining the desired dimensions. The total number of elements must match the original tensor.

The function returns a tensor with the specified shape, sharing the same data as the original tensor.

## Example

This example reshapes a tensor from a shape of _(2, 3)_ to _(3, 2)_ using `.view()`:

```py
import torch

# Create a tensor of shape (2, 3)
original_tensor = torch.tensor([[1, 2, 3], [4, 5, 6]])

# Reshape the tensor to (3, 2)
reshaped_tensor = original_tensor.view(3, 2)

print(reshaped_tensor)
```

This example results in the following output:

```shell
tensor([[1, 2],
        [3, 4],
        [5, 6]])
```

In this example, `.view()` modifies the shape of `original_tensor` while preserving its data.
