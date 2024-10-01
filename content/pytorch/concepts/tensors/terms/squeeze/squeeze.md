---
Title: '.squeeze()'
Description: 'Returns a tensor with all specified dimensions of input of size 1 removed.'
Subjects: 
- 'Data Science'
Tags:
- 'Data Science'
- 'Squeeze Tensor Pytorch'
- 'Methods, Functions'
CatalogContent:
- 'how-to-squeeze-tensor'
- 'pytorch-squeeze-and-excitation'
---

The **`.squeeze()`** function removes all dimensions of size 1 from a tensor. If a dimension has a size greater than 1, will not be squeezed.

## Syntax

```pseudo
tensor.squeeze() OR tensor.squeeze([dim])
```

- `tensor`: this is tensor to be squeezed (removing dimensions of size 1).
- `dim`: this is optional to remove a specific dimension. If specified as dim[1], only the second dimension is removed if it has size 1. If not specified, all dimensions with size 1 will be squeezed.

## Example

Using the tensor with shape of (1, 3, 1, 5)

```py
import torch

  tensor = (1, 3, 1, 5)
  ```
    Output: (1, 3, 1, 5)

If calling squeeze():

```shell
tensor.squeeze()
```
All dimensions with size 1 are removed:
    Output: (3, 5)



