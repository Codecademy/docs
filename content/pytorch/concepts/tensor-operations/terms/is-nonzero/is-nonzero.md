---
Title: '.is_nonzero()'
Description: 'Checks if all elements of a tensor are non-zero. Returns a boolean value indicating whether the tensor contains any non-zero elements.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Boolean'
  - 'Tensors'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.is_nonzero()`** method is used to check if a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) contains any non-zero elements. It returns a boolean value (True or False) indicating whether the tensor has at least one element that is not zero. This method is particularly useful for conditional checks or validation in tensor operations.

## Syntax

```pseudo
Tensor.is_nonzero()
```

The method takes no parameters and returns:

- `True` if the tensor has exactly one element and that element is non-zero
- `False` in all other cases (multiple elements, single zero element, or empty tensor)

## Example

```py
import torch

# Define a tensor with non-zero elements
tensor1 = torch.tensor([0.0, 1.0, 2.0])

# Check if the tensor contains any non-zero elements
result1 = tensor1.is_nonzero()
print(result1)  # Output: True

# Define a tensor with all zero elements
tensor2 = torch.tensor([0.0, 0.0, 0.0])

# Check if the tensor contains any non-zero elements
result2 = tensor2.is_nonzero()
print(result2)
```

The above code produces the following output:

```shell
True
False
```
