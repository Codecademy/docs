---
Title: 'tensor-split'
Description: 'Takes an input tensor and splits it into multiple sub-tensors.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Data Structures'
  - 'Deep Learning'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.tensor_split()`** function splits a tensor into multiple sub-tensors. If the tensor cannot be split evenly, PyTorch distributes the elements as evenly as possible. The shape of the sub-tensors can also be controlled using the `dim` (dimension) parameter.

## Syntax

```pseudo
torch.tensor_split(input, indices_or_sections, dim=0)
```

- `input(Tensor)`: The tensor to be split.
- `indices_or_sections(int)`: Number of sub-tensors to split the input tensor into, or the indices at which to split along the specified dimension.
- `dim(int, optional)`: The dimension along which to split the tensor. Default is `0`.

## Example

The following example demonstrates the use of the `.tensor_split()` function:

```py
import torch

x = torch.arange(10) #create a one dimensional tensor
torch.tensor_split(x, 2) #split the tensor into 2 parts
```
```shell
#the above code produces the tensor in 2 equal parts. 10 goes into 2 5 times so each subtensor has 5 elements
(tensor([0, 1, 2, 3, 4]), tensor([5, 6, 7, 8, 9]))
```