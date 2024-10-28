---
Title: '.split()'
Description: 'Splits a tensor into chunks of specified sizes along a given dimension.'
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

In PyTorch, the **`.split()`** function is used to split a tensor into chunks of specified sizes along a specified dimension and returns a tuple of tensors. It is useful for processing smaller segments of data independently.

## Syntax

```pseudo
torch.split(tensor, split_size_or_sections, dim=0)
```

- `tensor`: The tensor to be split. This is a required parameter.
- `split_size_or_sections`: Specifies the size of each chunk. If an integer, it defines the number of elements in each chunk. If a list of integers, it specifies the exact size of each chunk in order.
- `dim`(Optional): The dimension along which to split the tensor. The default value is 0.

## Example

The following example illustrates the usage of `.split()` in various scenarios:

```py
import torch

# a 1D tensor and a 2D tensor
tensor_1d = torch.arange(1, 13)
tensor_2d = tensor_1d.reshape(2, 6)

print(f"Input 1D Tensor - {tensor_1d}")

# Case 1: Splitting into equal chunks of size 3
equal_chunks = torch.split(tensor_1d, 3)
print("\nCase 1: Equal Chunks (Size = 3)")
for chunk in equal_chunks:
    print(chunk)

# Case 2: Splitting into unequal chunks of sizes [4, 3, 5]
unequal_chunks = torch.split(tensor_1d, [4, 3, 5])
print("\nCase 2: Unequal Chunks (Sizes = [4, 3, 5])")
for chunk in unequal_chunks:
    print(chunk)

# Case 3: Attempting to split with non-divisible chunk size
non_divisible_split = torch.split(tensor_1d, 5)
print("\nCase 3: Non-Divisible Chunk Size (Size = 5)")
for chunk in non_divisible_split:
    print(chunk)

print(f"\nInput 2D Tensor - {tensor_2d}")

# Case 4: Splitting a 2D tensor along rows (dim=0)
row_split = torch.split(tensor_2d, 1, dim=0)
print("\nCase 4: Split Along Rows (dim=0, size=1)")
for chunk in row_split:
    print(chunk)

# Case 5: Splitting a 2D tensor along columns (dim=1)
col_split = torch.split(tensor_2d, 3, dim=1)
print("\nCase 5: Split Along Columns (dim=1, size=3)")
for chunk in col_split:
    print(chunk)

# Case 6: Splitting a 2D tensor into unequal sizes along columns (dim=1)
uneven_split_2d = torch.split(tensor_2d, [1, 3, 2], dim=1)
print("\nCase 6: Unequal Split Sizes on 2D Tensor ([1, 3, 2], dim=1)")
for chunk in uneven_split_2d:
    print(chunk)

# Case 7: Unequal split with sizes that do not sum up to the tensor size
# In this case, .split() raises an error when the sizes don't add up correctly.
print("\nCase 7: Unequal Split Sizes That Do Not Sum Upto the 2D Tensor Size ([1, 3, 3], dim=1)")
try:
    error_split = torch.split(tensor_2d, [1, 3, 3], dim=1)

    for chunk in error_split:
        print(chunk)

except RuntimeError as e:
    print(f"RuntimeError - {e}")
```

The above program gives the following output:

```shell
Input 1D Tensor - tensor([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12])

Case 1: Equal Chunks (Size = 3)
tensor([1, 2, 3])
tensor([4, 5, 6])
tensor([7, 8, 9])
tensor([10, 11, 12])

Case 2: Unequal Chunks (Sizes = [4, 3, 5])
tensor([1, 2, 3, 4])
tensor([5, 6, 7])
tensor([ 8,  9, 10, 11, 12])

Case 3: Non-Divisible Chunk Size (Size = 5)
tensor([1, 2, 3, 4, 5])
tensor([ 6,  7,  8,  9, 10])
tensor([11, 12])

Input 2D Tensor - tensor([[ 1,  2,  3,  4,  5,  6],
        [ 7,  8,  9, 10, 11, 12]])

Case 4: Split Along Rows (dim=0, size=1)
tensor([[1, 2, 3, 4, 5, 6]])
tensor([[ 7,  8,  9, 10, 11, 12]])

Case 5: Split Along Columns (dim=1, size=3)
tensor([[1, 2, 3],
        [7, 8, 9]])
tensor([[ 4,  5,  6],
        [10, 11, 12]])

Case 6: Unequal Split Sizes on 2D Tensor ([1, 3, 2], dim=1)
tensor([[1],
        [7]])
tensor([[ 2,  3,  4],
        [ 8,  9, 10]])
tensor([[ 5,  6],
        [11, 12]])

Case 7: Unequal Split Sizes That Do Not Sum Upto the 2D Tensor Size ([1, 3, 3], dim=1)
RuntimeError - split_with_sizes expects split_sizes to sum exactly to 6 (input tensor's size at dimension 1), but got split_sizes=[1, 3, 3]
```
