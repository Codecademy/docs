---
Title: '.vsplit()'
Description: 'Divides a tensor into multiple sub-tensors vertically.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Machine Learning'
  - 'Functions'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.vsplit()`** function divides a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) into multiple sub-tensors vertically (row-wise). This function is particularly useful when a tensor needs to be divided into smaller chunks, keeping the number of rows consistent across each chunk.

## Syntax

```pseudo
torch.vsplit(tensor, sections)
```

- `tensor`: The tensor to be split vertically.
- `sections`: The value for this parameter can be either an integer or a list of integers.
  - If the value is an integer, the tensor is split into the specified number of equal parts.
  - If the value is a list of integers, it specifies the indices where the tensor is to be split.

## Example

The following example demonstrates the usage of the `.vsplit()` function:

```py
import torch

# Define a tensor
ten = torch.tensor([[0, 1, 2], [3, 4, 5], [6, 7, 8]])

# Split the tensor into 3 sub-tensors vertically
res = torch.vsplit(ten, 3)

# Print the result
print(res)
```

The above code produces the following output:

```shell
(tensor([[0, 1, 2]]), tensor([[3, 4, 5]]), tensor([[6, 7, 8]]))
```
