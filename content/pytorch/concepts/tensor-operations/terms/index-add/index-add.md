---
Title: 'index_add()'
Description: 'Adds values to specific indices of a tensor along a specified dimension.'
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

In PyTorch, the **`.index_add()`** function adds values to a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) at specific indices along a specified dimension.

## Syntax

```pseudo
torch.index_add(input, dim, index, source, *, alpha=1, out=None)
```

- `input`: The tensor to which values will be added.
- `dim`: The dimension along which to index and add.
- `index`: The indices of the elements to add to.
- `source`: The tensor containing the values to add.
- `alpha`: A scalar multiplier which is used before adding the source values. It is an optional parameter.
- `out`: If provided, the result will be written to this tensor. It is also an optional parameter.

## Example

The following example demonstrates the usage of the `.index_add()` method:

```py
import torch

# Define the input
input = torch.zeros(5)

# Indices where the updates will occur
index = torch.tensor([0, 2, 4])

# The tensor containing the values to be added
source = torch.tensor([10, 20, 30]).float()

# Add the values to specified indices
result = torch.index_add(input, 0, index, source)

print("Updated Tensor:", result)
```

The above code produces the following output:

```shell
Updated Tensor: tensor([10.,  0., 20.,  0., 30.])
```

The indices `[0, 2, 4]` in the input tensor are updated with the corresponding values from the source tensor `[10, 20, 30]`.
