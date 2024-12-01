---
Title: '.t()'
Description: 'Returns the transpose of a given 2D tensor.'
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

In PyTorch, the **`.t()`** method returns the transpose of a given 2D tensor. If the tensor is a 0D or 1D tensor, the method returns it as it is.

## Syntax

```pseudo
torch.t(ten)
```

- `ten`: The tensor to be transposed.

## Example

The following example demonstrates the usage of the `.t()` method:

```py
import torch

# Define a tensor
ten = torch.tensor([[1, 2, 3],
                    [4, 3, 8]])

# Calculate the transpose of the tensor
out = torch.t(ten)

print(out)
```

The above code produces the following output:

```shell
tensor([[1, 4],
        [2, 3],
        [3, 8]])
```

## Codebyte Example

The following codebyte example shows the use of the `.t()` method:

```codebyte/python
import torch

# Define a tensor
ten = torch.tensor([[6, 8, 1],
                    [5, 2, 4]])

# Calculate the transpose of the tensor
out = torch.t(ten)

print(out)
```
