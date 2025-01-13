---
Title: '.narrow_copy()'
Description: 'Creates a new tensor containing a narrowed subsection of data from the input tensor along a specified dimension.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Machine Learning'
  - 'Methods'
  - 'Python'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In Pytorch, **`.narrow_copy()`** is a function that creates a new tensor containing the same data as the input tensor but with a narrowed dimension. Unlike [`.narrow()`](https://www.codecademy.com/resources/docs/pytorch/tensor-operations/narrow), which returns a view of the original tensor, `.narrow_copy()` returns a new tensor.

## Syntax

```pseudo
torch.narrow_copy(input, dim, start, length)
```

- `input`: The input tensor to be narrowed.
- `dim`: The dimension along which the narrowing is applied.
- `start`: The index where the narrowing begins. This can be a positive integer, a negative integer (to index from the end of `dim`), or a 0-dimensional integer tensor.
- `length`: The number of elements to include from the starting position.

## Example

The following example demonstrates the usage of the `.narrow_copy()` function:

```py
import torch

# Create a 2D tensor
tensor_2d = torch.arange(1, 13).reshape(3, 4)
print(f"Original 2D Tensor:\n{tensor_2d}")

# Narrow the tensor along rows and create a new tensor
narrowed_tensor = torch.narrow_copy(tensor_2d, 0, 1, 2)
print(f"Narrowed 2D Tensor:\n{narrowed_tensor}")
```

The above code produces the following output:

```shell
Original 2D Tensor:
tensor([[ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12]])

Narrowed 2D Tensor:
tensor([[ 5,  6,  7,  8],
        [ 9, 10, 11, 12]])
```

In this example, the `.narrow_copy()` function creates a new tensor by narrowing an input tensor along a specific dimension. In the given code, the input tensor is narrowed along rows (dimension 0), starting from index _1_ and including _2_ rows.

The `.narrow_copy()` function is used to create a new tensor containing a subset of data from an existing tensor without modifying the original tensor.
