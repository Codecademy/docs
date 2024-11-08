---
Title: '.view()'
Description: 'Reshapes a tensor to a specified shape without changing data, ideal for adjusting tensor dimensions to fit model requirements while preserving element count.'
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

The **`.view()`** method in PyTorch reshapes a tensor without changing its data. This is useful for preparing tensors for operations that require specific dimensions, such as feeding data into a neural network. It can change the tensor’s shape, but the total number of elements must remain the same.

## Syntax

```pseudo
tensor.view(shape)
```

- `shape`: A tuple or list defining the desired dimensions. The total number of elements must match the original tensor.

The function returns a tensor with the specified shape, sharing the same data as the original tensor.

## Example

This example reshapes a tensor from a shape of `(2, 3)` to `(3, 2)` using `.view()`.

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
