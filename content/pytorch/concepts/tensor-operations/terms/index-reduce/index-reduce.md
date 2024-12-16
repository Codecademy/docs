---
Title: '.index_reduce_()'
Description: 'Reduces a tensor along a specified dimension using indices to map input elements to positions in the output tensor, applying reduction operations such as sum, product, or mean.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Index'
  - 'Values'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, **`.index_reduce_()`** performs an in-place reduction operation (such as sum, product, or mean) on a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) along a specified dimension. It uses an index tensor to map input elements to positions in the output tensor, effectively aggregating values with the same index.

## Syntax

```pseudo
Tensor.index_reduce_(dim, index, source, reduce, *, include_self=True)
```

- `dim`: The axis of the tensor along which the reduction is performed.
- `index`: A 1D tensor containing indices that map the elements in the source tensor to specific positions in the current tensor.
- `source`: The tensor whose values are reduced and added to the current tensor at positions specified by `index`.
- `reduce`: Specifies the reduction operation to apply. Possible values include:
  - `'prod'`: Product of elements with the same index.
  - `'mean'`: Mean of elements with the same index.
  - `'amax'`: Maximum of elements with the same index.
  - `'amin'`: Minimum of elements with the same index.
- `include_self` (Optional): Determines whether the existing values in the current tensor are included in the reduction operation.
  - If `True`, the values already present in the tensor are included. If no value is provided for the parameter, `include_self` defaults to `True`.
  - If `False`, only the `source` tensor values contribute to the reduction.

## Example

The following example demonstrates the usage of the `.index_reduce()` method:

```py
import torch

# Define the target tensor
target = torch.zeros(2)

# Source tensor
source = torch.tensor([1.0, 2.0, 3.0, 4.0])

# Indices mapping source to target
index = torch.tensor([0, 1, 0, 1], dtype=torch.long)  # Ensure index tensor is of type 'long'

# Perform in-place reduction using 'mean' along the 0th dimension (rows)
target.index_reduce_(dim=0, index=index, source=source, reduce='mean')
print(target)
```

The above code produces the following output:

```shell
tensor([1.3333, 2.0000])
```

This code reduces the `source` tensor along dimension 0 by averaging (`'mean'` reduce) the values mapped to the same indices in the `index` tensor, updating the `target` tensor in place.
