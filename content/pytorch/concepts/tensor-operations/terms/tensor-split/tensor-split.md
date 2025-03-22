---
Title: '.tensor_split()'
Description: 'Splits a tensor into multiple sub-tensors along a specified dimension, based on either specified indices or the number of equal parts.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Deep Learning'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.tensor_split()`** function splits a tensor into multiple sub-tensors along a specified dimension. If the tensor cannot be split evenly, the function distributes the elements across the sub-tensors as evenly as possible.

## Syntax

```pseudo
torch.tensor_split(input, indices_or_sections, dim=0)
```

- `input`: The tensor to be split.
- `indices_or_sections`:
  - If _int_: The number of sub-tensors to split the input tensor into. If the split is uneven, the resulting sub-tensors will differ in size to distribute elements as evenly as possible.
  - If _list or tuple of ints_: The indices at which to split the tensor along the specified dimension.
- `dim`: The dimension along which to split the tensor. Default is `0`.

## Example

The following example demonstrates the use of the `.tensor_split()` function:

```py
import torch

# Create a one-dimensional tensor
x = torch.arange(10)

# Split the tensor into 2 parts
result = torch.tensor_split(x, 2)

# Print the result
print(result)
```

The code above gives the output as follows:

```shell
(tensor([0, 1, 2, 3, 4]), tensor([5, 6, 7, 8, 9]))
```

The output is a list of two sub-tensors, where the input tensor is evenly split into two parts along its only dimension.
