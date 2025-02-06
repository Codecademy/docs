---
Title: '.is_nonzero()'
Description: 'Checks if a tensor's single element is non-zero, returning a boolean indicating whether the element is non-zero.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Boolean'
  - 'Data Structures'
  - 'Functions'
  - 'Tensors'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.is_nonzero()`** method is used to check if a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) contains a non-zero element. It returns `True` if the tensor's element is non-zero and `False` if it is zero. This method is particularly useful for conditional checks or validation in tensor operations.

## Syntax

```pseudo
torch.is_nonzero(input)
```

- `input`: tensor with a single element. The method checks if this single element is non-zero.

## Example

This code demonstrates how PyTorch's `torch.is_nonzero()` function checks whether a tensor contains a non-zero value, returning `True` for `tensor1 (5.0)` and `False` for `tensor2 (0.0)`.

```py
import torch
# Define a tensor with a non-zero element
tensor1 = torch.tensor(5.0)
# Check if the tensor contains a non-zero element
result1 = torch.is_nonzero(tensor1)
print(result1)
# Define a tensor with a zero element
tensor2 = torch.tensor(0.0)
# Check if the tensor contains a non-zero element
result2 = torch.is_nonzero(tensor2)
print(result2)
```

The above code produces the following output:

```shell
True
False
```
