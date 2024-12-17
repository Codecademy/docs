---
Title: '.cat()'
Description: 'Concatenates two or more tensors in the same dimension.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

The **`.cat()`** function in PyTorch concatenates two or more tensors along a specified dimension. The tensors must have the same shape in all dimensions except for the dimension along which they are concatenated.

## Syntax

```pseudo
torch.cat(tensors, dim=0, out=None)
```

## Parameters

- `tensors`: A sequence (like a list or tuple) of tensors to be concatenated. All tensors must have the same shape in all dimensions except for the specified dimension.
- `dim`: An integer specifying the dimension along which the tensors will be concatenated. The default value is `0`, which means concatenation will occur along the first dimension.
- `out`: A pre-allocated tensor with the correct shape to store the result of the concatenation. If not provided, a new tensor will be allocated.

## Example 1

The example below showcases concatenating tensors along the first dimension using the `.cat()` function:

```py
import torch

# Create two tensors of shape (2, 3)
tensor1 = torch.tensor([[1, 2, 3], [4, 5, 6]])
tensor2 = torch.tensor([[7, 8, 9], [10, 11, 12]])

# Concatenate the tensors along the first dimension
result = torch.cat((tensor1, tensor2), dim=0)

print("tensor1:")
print(tensor1)

print("\ntensor2:")
print(tensor2)

print("\nresult:")
print(result)
```

The output shows the two tensors and the concatenated tensor along the first dimension:

```shell
tensor1:
tensor([[1, 2, 3],
        [4, 5, 6]])

tensor2:
tensor([[ 7,  8,  9],
        [10, 11, 12]])

result:
tensor([[ 1,  2,  3],
        [ 4,  5,  6],
        [ 7,  8,  9],
        [10, 11, 12]])
```

## Example 2

The example below showcases concatenating tensors along the second dimension using the `.cat()` function:

```py
import torch

# Create two tensors of shape (2, 3)
tensor1 = torch.tensor([[1, 2, 3], [4, 5, 6]])
tensor2 = torch.tensor([[7, 8, 9], [10, 11, 12]])

# Concatenate the tensors along the second dimension
result = torch.cat((tensor1, tensor2), dim=1)

print("tensor1:")
print(tensor1)

print("\ntensor2:")
print(tensor2)

print("\nresult:")
print(result)
```

The output shows the two tensors and the concatenated tensor along the second dimension:

```shell
tensor1:
tensor([[1, 2, 3],
        [4, 5, 6]])

tensor2:
tensor([[ 7,  8,  9],
        [10, 11, 12]])

result:
tensor([[ 1,  2,  3,  7,  8,  9],
        [ 4,  5,  6, 10, 11, 12]])
```

## Example 3

The example below showcases concatenating tensors along the third dimension using the `.cat()` function:

```py
import torch

# Create two tensors of shape (2, 2, 3)
tensor1 = torch.tensor([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
tensor2 = torch.tensor([[[13, 14, 15], [16, 17, 18]], [[19, 20, 21], [22, 23, 24]]])

# Concatenate the tensors along the third dimension
result = torch.cat((tensor1, tensor2), dim=2)

print("tensor1:")
print(tensor1)

print("\ntensor2:")
print(tensor2)

print("\nresult:")
print(result)
```

The output shows the two tensors and the concatenated tensor along the third dimension:

```shell
tensor1:
tensor([[[ 1,  2,  3],
         [ 4,  5,  6]],

        [[ 7,  8,  9],
         [10, 11, 12]]])

tensor2:
tensor([[[13, 14, 15],
         [16, 17, 18]],

        [[19, 20, 21],
         [22, 23, 24]]])

result:
tensor([[[ 1,  2,  3, 13, 14, 15],
         [ 4,  5,  6, 16, 17, 18]],

        [[ 7,  8,  9, 19, 20, 21],
         [10, 11, 12, 22, 23, 24]]])
```
