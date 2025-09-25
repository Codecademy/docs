---
Title: '.logical_and()'
Description: 'Performs element-wise logical AND operation between two tensors.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'PyTorch'
  - 'Tensors'
  - 'Logical Operations'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`torch.logical_and()`** function in PyTorch performs an element-wise logical AND operation between two [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors). It returns a new tensor with boolean values (`True` or `False`) depending on whether the corresponding elements in both input tensors evaluate to `True`.

This operation is often used in tensor-based computations where conditional checks need to be applied element-wise, such as in [masking](https://pytorch.org/docs/stable/notes/broadcasting.html) or filtering data.

## Syntax

```py
torch.logical_and(input, other, *, out=None)
```

**Parameters:**

- `input` (Tensor): The first tensor for the logical AND operation.
- `other` (Tensor): The second tensor, must be broadcastable to the shape of `input`.
- `out` (Tensor, optional): The output tensor to store the result.

**Return value:**

A tensor of type `torch.bool` containing the result of the element-wise logical AND operation.

## Example 1: Basic Usage

This example shows how `torch.logical_and()` compares two tensors element-wise:

```py
import torch

a = torch.tensor([True, False, True])
b = torch.tensor([True, True, False])

result = torch.logical_and(a, b)
print(result)
```

Output:

```shell
tensor([True, False, False])
```

## Example 2: Using with Integer Tensors

Nonzero values in integer tensors are treated as `True`, while `0` is treated as `False`:

```py
import torch

x = torch.tensor([1, 0, 3])
y = torch.tensor([2, 0, 0])

result = torch.logical_and(x, y)
print(result)
```

Output:

```shell
tensor([True, False, False])
```

## Example 3: Broadcasting in `torch.logical_and()`

The function supports [broadcasting](https://pytorch.org/docs/stable/notes/broadcasting.html):

```py
import torch

m = torch.tensor([[1, 0], [0, 1]])
n = torch.tensor([1, 0])

result = torch.logical_and(m, n)
print(result)
```

Output:

```shell
tensor([[True, False],
        [False, False]])
```

## Codebyte Example

```codebyte/python
import torch

a = torch.tensor([True, False, True, False])
b = torch.tensor([True, True, False, False])

print(torch.logical_and(a, b))
```

Expected Output:

```shell
tensor([True, False, False, False])
```
