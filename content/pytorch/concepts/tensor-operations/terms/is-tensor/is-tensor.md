---
Title: '.is_tensor()'
Description: 'Checks if the given object is a PyTorch tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Arrays'
  - 'Data Structures'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.is_tensor()`** function checks if the given object is a PyTorch [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It returns `True` if the object is a tensor; otherwise, it returns `False`. This function is part of the `torch` module.

## Syntax

```pseudo
torch.is_tensor(obj)
```

- `obj`: The object to check whether it is a PyTorch tensor.

## Example

The following example demonstrates the usage of the `.is_tensor()` function:

```py
import torch

# Define objects
tensor_obj = torch.tensor([11, 22, 33, 44, 55])  # Tensor object
list_obj = [11, 22, 33, 44, 55]  # Non-tensor object

# Check if the objects are PyTorch tensors
print(torch.is_tensor(tensor_obj))  # True
print(torch.is_tensor(list_obj))    # False
```

The above code produces the following output:

```shell
True
False
```
