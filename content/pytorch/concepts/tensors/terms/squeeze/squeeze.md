---
Title: '.squeeze()'
Description: 'Removes input of size one dimensions from tensors.'
Subjects: 
- 'Data Science'
Tags:
- 'Data Science'
- 'Squeeze Tensor Pytorch'
- 'Functions'

---

The **`.squeeze()`** function removes all dimensions of size one from a tensor. A dimension with length greater than one will not be squeezed.

## Syntax

```pseudo
tensor.squeeze() OR tensor.squeeze([dim])
```

- `tensor`: this is tensor to be squeezed (removing dimensions of size 1).
- `dim`: this is optional to remove a specific dimension. If specified as dim[1], only the second dimension is removed if it has size 1. If not specified, all dimensions with size 1 will be squeezed.

## Example

The tensor with shape of (1, 3, 1, 5) will print (3, 5) after using the function .squeeze()

```py
import torch

tensor = (1, 3, 1, 5)

print(tensor.shape) # Output [1, 3, 1, 5]

# Squeeze to remove size one dimensions

squeezedTensor = tensor.squeeze()

print(squeezeTensor.shape) #Output [3, 5]
```



