---
Title: '.expand()'
Description: 'Creates a new view of a tensor by expanding its singleton dimensions to a larger size without allocating new memory.'
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

The **`.expand()`** function in PyTorch creates a new view of a tensor by expanding its singleton dimensions (dimensions with size 1) to a larger size. This operation is memory-efficient, as it doesn't allocate new memory but instead returns a view where the singleton dimensions are expanded to the desired size.

## Syntax

```pseudo
tensor.expand(*sizes)
```

- `tensor`: The input tensor to be expanded.
- `*sizes`: The desired expanded size.

The function returns a new view of the original tensor with the specified size. Note that only dimensions of size 1 can be expanded to a larger size.

## Example

Here's an example of how `.expand()` can be used to expand a tensor's dimensions:

```py
import torch

# Define a tensor with a singleton dimension
x = torch.tensor([[1], [2], [3]])

# Expand the tensor to size (3, 4)
expanded_x = x.expand(3, 4)

print(expanded_x)
```

This example results in the following output:

```shell
tensor([[1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3]])
```

In this example, `.expand()` creates a new view of `x`, with the second dimension expanded from size `1` to size `4`. Each element in the original tensor is repeated along the expanded dimension, but no new memory is allocated for these repeats.

> **Note**: Since the expanded tensor is a view, modifying its contents in-place may lead to unexpected behavior. To safely modify the expanded tensor, use `.clone()` to create a copy before making changes.
