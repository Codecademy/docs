---
Title: '.logical_and()'
Description: 'Performs an element-wise logical AND operation on two input tensors, returning a tensor of Boolean values.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Logical'
  - 'Operators'
  - 'Python'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`torch.logical_and()`** function in PyTorch performs an element-wise logical AND operation between two [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors). It returns a new tensor with boolean values (`True` or `False`) depending on whether the corresponding elements in both input tensors evaluate to `True`.

This operation is often used in tensor-based computations where conditional checks need to be applied element-wise, such as in masking or filtering data.

## Syntax

```pseudo
torch.logical_and(input, other, *, out=None)
```

**Parameters:**

- `input` (Tensor): The first tensor for the logical AND operation.
- `other` (Tensor): The second tensor, must be broadcastable to the shape of `input`.
- `out` (Tensor, optional): The output tensor to store the result.

**Return value:**

A tensor of type `torch.bool` containing the result of the element-wise logical AND operation.

## Example 1: Basic Usage

In this example, two Boolean tensors are compared element-wise using `torch.logical_and()`:

```py
import torch

a = torch.tensor([True, False, True])
b = torch.tensor([True, True, False])

result = torch.logical_and(a, b)
print(result)
```

The output of this code is as follows:

```shell
tensor([True, False, False])
```

## Example 2: Using with Integer Tensors

In this example, integer tensors are treated as Boolean values, with nonzero as `True` and 0 as `False`:

```py
import torch

x = torch.tensor([1, 0, 3])
y = torch.tensor([2, 0, 0])

result = torch.logical_and(x, y)
print(result)
```

The output of this code is:

```shell
tensor([True, False, False])
```

## Example 3: Broadcasting in `torch.logical_and()`

In this example, [broadcasting](https://pytorch.org/docs/stable/notes/broadcasting.html) allows a smaller tensor to be compared across the rows of a larger tensor.

```py
import torch

m = torch.tensor([[1, 0], [0, 1]])
n = torch.tensor([1, 0])

result = torch.logical_and(m, n)
print(result)
```

The output of this code will be:

```shell
tensor([[True, False],
        [False, False]])
```
