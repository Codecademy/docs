---
Title: 'tensor-split'
Description: 'Takes a input for a tensor and splits it into multiple tensors.'
Subjects:
  - 'Data Science'
Tags:
  - 'Data Structures'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.tensor_split()`** function splits a tensor into multiple sub-tensors. PyTorch will attempt to split the tensor evenly but when the tensor cannot be split evenly it will create as close to even sub-tensors as possible. The sub tensors can be also shaped with a dim (dimension) input.

## Syntax

```pseudo
torch.tensor_split(input, indices_or_sections, dim=0)
```

- `input(Tensor)`: The tensor to be split.

- `indices_or_sections(int)`: How many sub tensors to split into

- `dim(int, optional)`: Change the dimensions of the split tensors, Default=0

## Example

The following example demonstrates the usage of the `.tensor_split()` function:

```py
import torch

x = torch.arange(10) #create a one dimensional tensor
torch.tensor_split(x, 2) #split the tensor into 2 parts
```
```shell
#the above code produces the tensor in 2 equal parts. 10 goes into 2 5 times so each subtensor has 5 elements
(tensor([0, 1, 2, 3, 4]), tensor([5, 6, 7, 8, 9]))
```

```py
import torch

x = torch.arange(13) #create a one dimensional tensor
torch.tensor_split(x, 6) #split the tensor into 6 parts
```
```shell
#the above code produces the tensor in 6 almost equal parts. 13 is not divisable by 6 so PyTorch does this as close to even as possible the first sub tensor having 3 elements and the rest only 2.
(tensor([0, 1, 2]), tensor([3, 4]), tensor([5, 6]), tensor([7, 8]), tensor([ 9, 10]), tensor([11, 12]))
```