---
Title: '.as_strided()'
Description: 'Creates a view of a tensor with a specified shape and strides.'
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

In PyTorch, the **`.as_strided()`** function creates a view of a tensor with a specified shape and strides. Unlike operations that copy data, `.as_strided()` allows modifying how the tensor accesses memory, which enables efficient slicing, reshaping, and advanced indexing without additional memory allocation.

> **Note:** Since `.as_strided()` manipulates tensor memory layout directly, incorrect stride values can lead to unexpected behavior or memory overlap.

## Syntax

```pseudo
torch.as_strided(input, size, stride, storage_offset=None)
```

- `input`: The input tensor.
- `size`: The desired shape of the output tensor.
- `stride`: A tuple specifying the step size to move across dimensions.
- `storage_offset` (Optional): Defines the starting point in the underlying storage for the output tensor. If set to `None`, the output tensor retains the same `storage_offset` as the input tensor.

## Example

The following example demonstrates how `.as_strided()` can be used to create a sliding window view of a tensor:

```py
import torch

# Create a 1D tensor
tensor = torch.arange(10)

# Create a 2x3 strided view (overlapping windows)
windowed_tensor = tensor.as_strided((2, 3), (2, 1))

# Print the resultant tensor
print(windowed_tensor)
```

This code generates the output as:

```shell
tensor([[0, 1, 2],
        [2, 3, 4]])
```

- The original tensor `tensor` contains values `[0, 1, 2, ..., 9]`.
- The `.as_strided()` function generates a view where:
  - The new shape is `(2, 3)`, meaning two rows and three columns.
  - The first stride is `2`, meaning each row starts 2 elements ahead in the original tensor.
  - The second stride is `1`, meaning elements within each row are consecutive.
