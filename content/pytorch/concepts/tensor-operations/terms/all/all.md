---
Title: '.all()'
Description: 'Checks if all elements in the input tensor evaluate to True.'
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

The **`.all()`** function returns `True` if all elements in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) evaluate to `True`, otherwise it returns `False`. When a dimension `dim` is specified, the function checks all elements in that specific dimension.


## Syntax
```pseudo
torch.all(input: Tensor, *, out=None)
```
Or, alternatively:

```pseudo
torch.all(input, dim, keepdim=False, *, out=None) 
```
- `input`: The input tensor.
- `dim` (optional): An `int` or `tuple` of `int` values defining the dimension or dimensions to reduce. If `None`, all dimensions are reduced.
- `keepdim` (optional): A `bool` value that defines if the output tensor retains the reduced dimension. The default value is `False`.
- `out` (optional): The output tensor.

## Example 1

Checking if all elements in a tensor are `True`:

```py
import torch

# Define a tensor where all elements are True
tensor = torch.tensor([True, True, True])
print(tensor.all())

# Define a tensor that contains a False element
tensor = torch.tensor([True, False, True])
print(tensor.all())
```

This produces the following output:

```shell
tensor(True)
tensor(False)
```

## Example 2

Using `.all()` with numeric values (non-zero values are treated as `True` and zero is treated as `False`):

```py
import torch

# Define a tensor with numeric values
tensor = torch.tensor([1, 2, 3])
print(tensor.all())

# Define a tensor which contains a numeric value of zero 
tensor = torch.tensor([0, 1, 2])
print(tensor.all())
```

This produces the following output:

```shell
tensor(True)
tensor(False)
```

## Example 3

Using `.all()` to check specific dimensions in a 2D tensor:

```py
import torch

# Define a 2D boolean tensor
matrix = torch.tensor([[True, True],
                       [True, False],
                       [True, True]])

# Check dimension 1 (horizontal)
print(matrix.all(dim=1))

# Check dimension 0 (vertical)
print(matrix.all(dim=0))
```

This produces the following output:

```shell
tensor([ True, False,  True])
tensor([ True, False])
```

## Codebyte Example

```codebyte/python
import torch

# Boolean tensor
x = torch.tensor([True, True, False, True])
result = x.all()
print(f"Are all elements True? {result}")

# Numeric comparison
y = torch.tensor([10, 15, 20, 25])
positive_tensor = (y > 0).all()
print(f"Are all elementes positive? {positive_tensor}")

# Check dimension 1
matrix = torch.tensor([[1, 2], [3, 0], [4, 5]])
check_row = (matrix > 0).all(dim=1)
print(f"Are all elements positive per row? {check_row}")
```

