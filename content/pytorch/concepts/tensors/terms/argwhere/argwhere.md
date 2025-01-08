---
Title: '.argwhere()'
Description: 'Returns the indices of elements in a tensor that satisfy a specified condition, arranged in a 2D tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, **`.argwhere()`** returns the indices of elements in a tensor that satisfy a specified condition. It is useful for finding the positions of elements in a tensor that meet specific conditions, such as values greater than a threshold.

## Syntax

```pseudo
torch.argwhere(input)
```

- `input`: A tensor containing the elements to be checked. The condition will be applied to this tensor.

It returns a 2D tensor containing the indices of the elements in the input tensor that satisfy the specified condition. Each row in the resulting tensor represents the indices of an element that meets the condition.

## Example

In this example, `.argwhere()` is used to find the indices of elements in the tensor that are greater than _0_, equal to _0_, and less than _2_:

```py
import torch

# Define a tensor
tensor = torch.tensor([[0, 1], [2, 0], [-1, 3]])

# Case 1: Use argwhere to find indices of elements greater than 0
indices_case_1 = torch.argwhere(tensor > 0)

# Case 2: Use argwhere to find indices of elements equal to 0
indices_case_2 = torch.argwhere(tensor == 0)

# Case 3: Use argwhere to find indices of elements less than 2
indices_case_3 = torch.argwhere(tensor < 2)

print("Case 1 (elements > 0):", indices_case_1)
print("Case 2 (elements == 0):", indices_case_2)
print("Case 3 (elements < 2):", indices_case_3)
```

Here is the output for the above example:

```shell
Case 1 (elements > 0): tensor([[0, 1],
        [1, 0],
        [2, 1]])
Case 2 (elements == 0): tensor([[0, 0],
        [1, 1]])
Case 3 (elements < 2): tensor([[0, 0],
        [0, 1],
        [1, 1],
        [2, 0]])
```
