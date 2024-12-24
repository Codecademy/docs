---
Title: '.nonzero()'
Description: 'Returns a tensor containing the indices of non-zero elements in the input tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.nonzero()`** function returns a tensor of indices of all non-zero elements in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). This function is useful for identifying the locations of non-zero values in sparse tensors or when performing operations based on the positions of non-zero elements.

## Syntax

```pseudo
torch.nonzero(input, *, out=None, as_tuple=False)
```

- `input`: The input tensor for which the indices of non-zero elements are to be found.
- `out` (Optional): A tensor to store the result. It must have the appropriate shape to accommodate the output. If not provided, a new tensor will be allocated to store the result.
- `as_tuple` (Optional): If set to `True`, the result will be a tuple of 1-D tensors, each containing the indices for a specific dimension of the input tensor. If set to `False` (default), the result will be a 2-D tensor where each row represents the index of a non-zero element in the input tensor.

## Example

The following example demonstrates the usage of the `.nonzero()` function:

```py
import torch

# Create a tensor
ten = torch.tensor([[1, 0, 3], [0, 5, 6]])

# Get the indices of non-zero elements
indices = torch.nonzero(ten)

# Print the result
print(indices)
```

The above code produces the following output:

```shell
tensor([[0, 0],
        [0, 2],
        [1, 1],
        [1, 2]])
```

In this example, the tensor's non-zero elements are located at indices _(0,0)_, _(0,2)_, _(1,1)_, and _(1,2)_.
