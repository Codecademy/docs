---
Title: '.unbind()'

Description: 'Removes a dimension and returns a tuple of slices along the given dimension' 
Subjects:
  - 'AI'
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'PyTorch'
  - 'Tensor'
  - 'Functions'
CatalogContent: 
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **.unbind()** function takes two arguments: The first being the tensor you wish to unbind, and the second being the dimension to remove. The function then returns a tuple of tensors along the specified dimension.

## Syntax

```python
torch.unbind(tensor, dim=0)
```

- `tensor`: The tensor to be unbinded;
- `dim`: The dimension to be removed from the original tensor. If not provided, it's set value is 0.

## Example

```python
import torch

# Create a tensor
ten = torch.tensor([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

# Unbind the tensor, and save it as the tuple "unbinded"
unbinded = torch.unbind(ten)

# Print the tuple
print(unbinded)
```

The code above should output the following:

```shell
(tensor([1, 2, 3]), tensor([4, 5, 6]), tensor([7, 8, 9]))
```