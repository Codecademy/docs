---
Title: '.size()'
Description: 'Returns the size of the self tensor as a tuple of integers.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Structures'
  - 'Deep Learning'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`size()`** method in PyTorch returns a `torch.Size` object containing the size (shape) information of a tensor. It serves as a fundamental function for dynamically obtaining the tensor's shape during operations. Specific dimensions can be accessed by indexing into the `torch.Size` object, which functions like a tuple.

## Syntax

```pseudo
tensor.size(dim=None)
```

- `tensor`: The PyTorch tensor on which the `.size()` method is called.
- `dim` (Optional): Specifies the dimension for which to retrieve the size. The default value is `None`.
  - If `dim` is not provided, the returned value is a `torch.Size` object representing the size of all dimensions.
  - If `dim` is specified, the returned value is an `int` representing the size of the given dimension.

## Example

The following example shows how to use the `.size()` method:

```py
import torch

t = torch.empty(3, 4, 5)

print(t.size())
print(t.size(dim=1))
```

The code above generates the following output:

```shell
torch.Size([3, 4, 5])
4
```
