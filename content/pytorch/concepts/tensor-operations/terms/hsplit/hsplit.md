---
Title: '.hsplit()'
Description: 'Splits a tensor horizontally into multiple sub-tensors.'
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

In PyTorch, the **`.hsplit()`** method splits a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) into multiple sub-tensors horizontally (column-wise) along the specified dimension (axis).

## Syntax

```pseudo
torch.hsplit(tensor, indices_or_sections)
```

- `tensor`: The tensor to be split.
- `indices_or_sections`: This can be an integer or a list of integers.
  - If it's an integer, it specifies the number of equal-sized sub-tensors to split the tensor into.
  - If it's a list of integers, it specifies the sizes of each sub-tensor along the specified dimension.

## Example

The following example demonstrates the usage of the `.hsplit()` method:

```py
import torch

# Define a tensor
tensor = torch.tensor([[1, 2, 3, 4],
                       [5, 6, 7, 8],
                       [9, 10, 11, 12]])

# Split the tensor into 2 equal parts
sub_tensors = torch.hsplit(tensor, 2)

print(sub_tensors)
```

The above code produces the following output:

```shell
(tensor([[ 1,  2],
        [ 5,  6],
        [ 9, 10]]), tensor([[ 3,  4],
        [ 7,  8],
        [11, 12]]))
```

The tensor is split into two sub-tensors along the columns. The first sub-tensor contains the first two columns of the original tensor, while the second sub-tensor contains the last two columns.
