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

In PyTorch, the **`.is_tensor()`** function checks if the given object is a PyTorch [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) and returns `True` if it is. This function is part of the `torch` module.

## Syntax

```pseudo
torch.is_tensor(obj, /)
```

- `obj`: The input object to be tested.

## Example

The following example demonstrates the usage of the `.is_tensor()` function:

```py
import torch

# Define an object
obj = torch.tensor([11, 22, 33, 44, 55])

# Check if the given object is a PyTorch tensor
res = torch.is_tensor(obj)

# Print the result
print(res)
```

The above code produces the following output:

```shell
True
```
