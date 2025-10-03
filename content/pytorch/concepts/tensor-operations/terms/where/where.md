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

In PyTorch, the **`.where`** function returns a new [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) with elements chosen based on a condition, selecting values from one source when the condition is met and from another when it is not.

## Syntax

```pseudo
torch.where(condition, input, other) → Tensor
```

- `condition`: The boolean tensor that controls selection.
- `input`: The tensor to select elements from when the condition is `True`.
- `other`: The tensor to select elements from when the condition is `False`.

It returns a tensor of elements selected from either `input` or `other`, based on the condition.

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

The `.where()` function is particularly useful in conditional operations where element-wise selection between tensors is required.
