---
Title: '.hsplit()'
Description: 'Splits a tensor into multiple chunks.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Arrays'
  - 'Data Structures'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.hsplit()`** method splits a tensor into multiple sub-tensors horizontally (column-wise) along a specified axis.

## Syntax

```pseudo
torch.hsplit(tensor, split_size_or_sections, dim=0)
```

- `tensor`: The tensor to be split.
- `split_size_or_sections`: The number of sub-tensors to be created or the size of each sub-tensor.
- `dim` (Optional): The axis along which to split the tensor. The default value is `0`.

## Example

The following example demonstrates the usage of the `.hsplit()` method:

```py
import torch

# Define a tensor
tensor = torch.tensor([[1, 2, 3, 4],
                      [5, 6, 7, 8],
                      [9, 10, 11, 12]])

# Split the tensor
sub_tensors = torch.hsplit(tensor, 2)

print(sub_tensors)
```[tensor([[1, 2, 3],
            [5, 6, 7]]), 
    
    tensor([[4], [8], [12]])]

The above code produces the following output:

[tensor([[1, 2, 3],
         [5, 6, 7]]),

tensor([[4], [8], [12]])]

The tensor is split into two sub-tensors along the columns. The first sub-tensor contains the first two columns of the original tensor, while the second sub-tensor contains the last two columns.
