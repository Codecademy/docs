---
Title: 'index_copy()'
Description: 'Returns a new tensor by copying values to specified indices of a given tensor along the specified dimension.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Machine Learning'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`index_copy()`** function in PyTorch creates a new [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) with values from a source tensor copied to specific indices of input tensor along the specified dimension.

## Syntax

```pseudo
torch.index_copy(input_tensor, dim, index, source_tensor)
```

- `input_tensor`: The tensor to copy values into.
- `dim`: The dimension along which to copy values.
- `index`: A 1D tensor specifying the indices to copy to.
- `source_tensor`: A tensor containing the values to be copied, matching dimension with the specified indices.

## Example

The following example illustrates the usage of `index_copy()` method:

```py
import torch

# Case-1: index_copy() along row
input_tensor = torch.zeros(3, 3)
print("\nInput Tensor:\n", input_tensor)

index_row = torch.tensor([0, 2])
source_tensor_row = torch.tensor([[1, 1, 1], [3, 3, 3]], dtype=torch.float)

result = torch.index_copy(input_tensor, 0, index_row, source_tensor_row)

print("\nResult Tensor (Row Copy):\n", result)

# Case-2: index_copy() along column
index_col = torch.tensor([0, 2])
source_tensor_col = torch.tensor([[1, 3], [1, 3], [1, 3]], dtype=torch.float)

result = torch.index_copy(input_tensor, 1, index_col, source_tensor_col)

print("\nResult Tensor (Column Copy):\n", result)
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
