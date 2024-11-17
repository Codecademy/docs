---
Title: 'index_add()'
Description: 'Adds values to specific indices of a tensor along a specified dimension.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Updates'
  - 'Data Structures'
  - 'Index'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In Pytorch, the **.index_add()** function adds values to a tensor at specific indices along a specified dimension.

## Syntax

```pseudo
torch.index_add(input, dim, index, source)
```

- `input`: The tensor to which values will be added.
- `dim`: The dimension along which to index and add.
- `index`: The indices of elements to add to.
- `source`: The tensor containing values to add.

## Example

The following example demonstrates the usage of the `.index_add()` method:

```py
import torch

# Define the input
input = torch.zeros(5)

# Indices where updates will occur
index = torch.tensor([0, 2, 4])

# The tensor containing values to be added
source = torch.tensor([10, 20, 30]).float()

# Add values to specified indices
result = torch.index_add(input, 0, index, source)

print("Updated Tensor:", result)
```

The above code produces the following output:

```shell
Updated Tensor: tensor([10.,  0., 20.,  0., 30.])
```

The indices [0, 2, 4] in the input tensor are updated with the corresponding values from the source tensor [10, 20, 30].
