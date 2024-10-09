---
Title: '.mm()'
Description: 'Calculates the matrix product of two given tensors.'
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

In PyTorch, the **`.mm()`** method calculates the matrix product of two given tensors.

## Syntax

```pseudo
torch.mm(ten1, ten2, *, out=None)
```

- `ten1`: The first tensor to be multiplied.
- `ten2`: The second tensor to be multiplied.
- `out` (Optional): The output tensor to be used. The default value is `None`.

> **Note:** If `ten1` is a `(m x n)` tensor and `ten2` is a `(n x p)` tensor, then `out` will be a `(m x p)` tensor.

## Example

The following example demonstrates the usage of the `.mm()` method:

```py
import torch

# Define two tensors
ten1 = torch.tensor([[1, 2, 3],
                     [4, 3, 8],
                     [1, 7, 2]])

ten2 = torch.tensor([[2, 4, 1],
                     [1, 3, 6],
                     [2, 6, 5]])

# Multiply the tensors
out = torch.mm(ten1, ten2)

print(out)
```

The above code produces the following output:

```shell
tensor([[10, 28, 28],
        [27, 73, 62],
        [13, 37, 53]])
```

## Codebyte Example

The following codebyte example shows the use of the `.mm()` method:

```codebyte/python
import torch

# Define two tensors
ten1 = torch.tensor([[6, 8, 1],
                     [5, 2, 4],
                     [9, 3, 7]])

ten2 = torch.tensor([[9, 2, 3],
                     [7, 8, 4],
                     [6, 1, 5]])

# Multiply the tensors
out = torch.mm(ten1, ten2)

print(out)
```
