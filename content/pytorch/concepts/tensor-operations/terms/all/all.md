---
Title: '.all()'
Description: 'Returns True if all elements in a tensor evaluate to True.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Structures'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.all()`** function returns `True` if all elements in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) evaluate to `True`, otherwise it returns `False`. If a dimension is specified, the function performs a logical AND reduction along that dimension.

Non-zero numeric values evaluate as `True`, and zero evaluates as `False`.

## Syntax

```pseudo
torch.all(input, dim, keepdim=False, *, out=None)
```

Or alternatively, in tensor method form:

```pseudo
tensor.all(dim=None, keepdim=False)
```

**Parameters:**

- `input`: The input tensor.
- `dim` (optional): An `int` or `tuple` of `int` values defining the dimension or dimensions to reduce. If `None`, all dimensions are reduced.
- `keepdim` (optional): A `bool` value that defines if the output tensor retains the reduced dimension. The default value is `False`.
- `out` (optional): The output tensor.

**Return value:**

- If `dim` is not specified, returns a zero-dimensional boolean tensor containing `True` or `False`.
- If `dim` is specified, returns a tensor reduced along the given dimension(s), containing boolean values.

## Example 1: Reducing an Entire Tensor

In this example, `torch.all()` checks whether all elements in a boolean tensor are `True`:

```py
import torch

tensor = torch.tensor([True, True, False])
print(torch.all(tensor))
```

This produces the following output:

```shell
tensor(False)
```

## Example 2: Using Numeric Values

In this example, non-zero values evaluate as `True` and zero evaluates as `False`:

```py
import torch

tensor = torch.tensor([1, 2, 0])
print(torch.all(tensor))
```

This produces the following output:

```shell
tensor(False)
```

## Codebyte Example: Reducing Along a Dimension

In this example, `torch.all()` checks values along specific dimensions of a 2D tensor:

```py
import torch

matrix = torch.tensor([[True, True],
                       [True, False],
                       [True, True]])

print(torch.all(matrix, dim=1))
```
