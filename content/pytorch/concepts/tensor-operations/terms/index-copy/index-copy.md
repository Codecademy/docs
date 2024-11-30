---
Title: '.index_copy_()'
Description: 'Copies values in-place into specified indices of a given tensor along the specified dimension.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Machine Learning'
  - 'Methods'
  - 'Python'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.index_copy_()`** method in PyTorch is an in-place operation that copies values from a source [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) into the specified indices of an input tensor along the given dimension, modifying the input tensor directly.

## Syntax

```pseudo
input_tensor.index_copy_(dim, index, source_tensor)
```

- `input_tensor`: The tensor to copy values into.
- `dim`: The dimension along which to copy values.
- `index`: A 1D tensor specifying the indices to copy the values to.
- `source_tensor`: The tensor containing the values to be copied. Its size along the specified dimension must match the size of the `index` tensor.

## Example

The following example illustrates the usage of the `.index_copy_()` method:

```py
import torch

# Case 1: Copying values along rows
input_tensor = torch.zeros(3, 3)
print("Input Tensor:\n", input_tensor)

index_row = torch.tensor([0, 2])
source_tensor_row = torch.tensor([[1, 1, 1], [3, 3, 3]], dtype=torch.float)

input_tensor.index_copy_(0, index_row, source_tensor_row)
print("\nResult Tensor (Row Copy):\n", input_tensor)

# Case 2: Copying values along columns
input_tensor = torch.zeros(3, 3)  # Reset the tensor
index_col = torch.tensor([0, 2])
source_tensor_col = torch.tensor([[1, 3], [1, 3], [1, 3]], dtype=torch.float)

input_tensor.index_copy_(1, index_col, source_tensor_col)
print("\nResult Tensor (Column Copy):\n", input_tensor)
```

The above program gives the following output:

```shell
Input Tensor:
 tensor([[0., 0., 0.],
        [0., 0., 0.],
        [0., 0., 0.]])

Result Tensor (Row Copy):
 tensor([[1., 1., 1.],
        [0., 0., 0.],
        [3., 3., 3.]])

Result Tensor (Column Copy):
 tensor([[1., 0., 3.],
        [1., 0., 3.],
        [1., 0., 3.]])
```
