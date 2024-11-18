---
Title: '.squeeze()'
Description: 'Removes dimensions of size 1 from a tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'Python'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The PyTorch **'.squeeze()'** function removes dimensions of size 1 from a given tensor.


## Syntax

```pseudo
torch.squeeze(input, dim=None)
```

- `input`: tensor
- `dim`: specified dimension to squeeze (if None, the entire tensor is squeezed)


> **Note:** if the batch dimension is size 1, it will also be removed, which may result in errors.

## Example

The example below demonstrates the use of the `.squeeze` method. The tensor `x` is squeezed such that the resulting tensor, `y`, has any dimensions of size 1 removed:

```py
import torch

x = torch.rand(1, 1, 2, 1, 3)
x.size()

y = torch.squeeze(x)
y.size()

```


```shell
torch.Size([1, 1, 2, 1, 3])

torch.Size([2, 3])
```

If a dimension is specified, only that dimension will be removed if it is of size 1:
```py
z = torch.squeeze(x, dim = 1)
z.size()
```

```shell
torch.Size([1, 2, 1, 3])
```

## Codebyte Example

The code demonstrates use of the `.squeeze()` function on a tensor, with and without specifying the `dim` parameter:

```codebyte/python
import torch

x = torch.rand(1, 1, 2, 1, 3)
x.size()

y = torch.squeeze(x)
y.size()

z = torch.squeeze(x, dim = 1)
z.size()
```
