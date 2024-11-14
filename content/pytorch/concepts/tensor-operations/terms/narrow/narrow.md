---
Title: '.narrow()'
Description: 'Returns a narrow subsection of a tensor along a specified dimension.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Machine Learning'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.narrow()`** method selects a subsection of a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) along a specified dimension. It returns a narrowed view without copying the underlying data, making it efficient for extracting specific sections of large tensors without incurring additional memory allocations.

## Syntax

```pseudo
torch.narrow(input, dim, start, length)
```

- `input`: The tensor to be narrowed.
- `dim`: The dimension along which the input tensor is to be narrowed.
- `start`: The index where the narrowing begins. This can be a positive integer, a negative integer (to index from the end of `dim`) or a 0-dimensional integer tensor.
- `length`: The number of elements to include from the starting position.

## Example

The following example illustrates the usage of the `.narrow()` method in various scenarios:

```py
import torch

# Create a 2D tensor
tensor_2d = torch.arange(1, 13).reshape(3, 4)
print(f"Original 2D Tensor:\n{tensor_2d}")

# Case 1: Narrowing along rows (dim=0)
row_narrow = torch.narrow(tensor_2d, 0, 1, 2)
print("\nCase 1: Narrow Along Rows (dim=0, start=1, length=2)")
print(row_narrow)

# Case 2: Narrowing along columns (dim=1)
col_narrow = torch.narrow(tensor_2d, 1, 1, 2)
print("\nCase 2: Narrow Along Columns (dim=1, start=1, length=2)")
print(col_narrow)

# Case 3: Extracting a single column (dim=1, length=1)
single_col = torch.narrow(tensor_2d, 1, 2, 1)
print("\nCase 3: Extract Single Column (dim=1, start=2, length=1)")
print(single_col)

# Case 4: Narrow with length extending beyond tensor's dimension
# In this case, .narrow() raises an error because the sub-tensor's length exceeds the tensor's dimension
try:
  error_narrow = torch.narrow(tensor_2d, 0, 1, 5)
  print("\nCase 4: Narrow With Length Exceeding Dimension Size")
  print(error_narrow)
except RuntimeError as e:
  print("\nCase 4: RuntimeError -", e)

# Case 5: Using a negative start index (dim=1, start=-3, length=2)
negative_start_narrow = torch.narrow(tensor_2d, 1, -3, 2)
print("\nCase 5: Negative Start Index (dim=1, start=-3, length=2)")
print(negative_start_narrow)

# Case 6: Using a 0-dimensional start index
tensor_0_dim = torch.tensor(1)  # 0-dimensional integer tensor
tensor_start_narrow = torch.narrow(tensor_2d, 0, tensor_0_dim, 2)
print("\nCase 6: Start Index as a 0-Dim Tensor (dim=0, start=tensor(1), length=2)")
print(tensor_start_narrow)
```

The above program gives the following output:

```shell
Original 2D Tensor:
tensor([[ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12]])

Case 1: Narrow Along Rows (dim=0, start=1, length=2)
tensor([[ 5,  6,  7,  8],
        [ 9, 10, 11, 12]])

Case 2: Narrow Along Columns (dim=1, start=1, length=2)
tensor([[ 2,  3],
        [ 6,  7],
        [10, 11]])

Case 3: Extract Single Column (dim=1, start=2, length=1)
tensor([[ 3],
        [ 7],
        [11]])

Case 4: RuntimeError - start (1) + length (5) exceeds dimension size (3).

Case 5: Negative Start Index (dim=1, start=-3, length=2)
tensor([[ 2,  3],
        [ 6,  7],
        [10, 11]])

Case 6: Start Index as a 0-Dim Tensor (dim=0, start=tensor(1), length=2)
tensor([[ 5,  6,  7,  8],
        [ 9, 10, 11, 12]])
```
