---
Title: '.where()'
Description: 'Returns values from one tensor if a condition is true; otherwise, it takes values from another tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Machine Learning'
  - 'Python'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
  - 'paths/machine-learning'
---

In PyTorch, the **`.where()`** function returns a new tensor with elements selected from either `input` or `other`, depending on the condition. The function is part of the `torch` module.

## Syntax

```pseudo
torch.where(condition, x, y) → Tensor
```

- `condition`: The condition tensor.
- `x`: The tensor to select elements from when the condition is `True`.
- `y`: The tensor to select elements from when the condition is `False`.

## Returns

A tensor of elements selected from either `x` or `y`, depending on the condition.

## Example

The following example demonstrates the usage of the `.where()` function:

```py
import torch

# Define tensors
condition = torch.tensor([[True, False], [False, True]])
x = torch.tensor([[1, 2], [3, 4]])
y = torch.tensor([[9, 8], [7, 6]])

# Select elements based on the condition
res = torch.where(condition, x, y)

# Print the result
print(res)
```

The above code produces the following output:

```shell
tensor([[1, 8],
        [7, 4]])
```

In this example, the `.where()` function selects elements from the `x` tensor where the condition tensor is `True` and from the `y` tensor where the condition tensor is `False`. The resulting tensor is created by selecting elements from `x` or `y` based on the condition tensor.

The `.where()` function is particularly useful in conditional operations where you need to select elements from different tensors based on a condition.
