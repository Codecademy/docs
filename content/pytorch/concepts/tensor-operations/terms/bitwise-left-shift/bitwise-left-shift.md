---
Title: '.bitwise_left_shift()'
Description: 'Shifts the input to the left by a certain amount of bits'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Linear Algebra'
  - 'Machine Learning'
  - 'Pytorch'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`bitwise_left_shift`** is used to shift the input to left by a specified amount of bits. The input should be of integral type only. Left shifting by a negative number is always 0.

## Syntax

```pseudo
torch.bitwise_left_shift(input, other, *, out=None)
```

**Parameters**:

- `input`: The input tensor to which left shift is applied
- `other`: The second input (can be a tensor or integer)
- `out`: The output tensor

**Return value**:

- A tensor containing the result of the element-wise bitwise left shift operation. The output tensor has the same shape as the input tensor.

## Example

The following example shows how to perform bitwise left shift on a tensor:

```py
import torch

# Create two tensors
a = torch.tensor([-1, 4, 3], dtype=torch.int8)
b = torch.tensor([1, 0, 3], dtype=torch.int8)

# Apply bitwise_left_shift on two tensors
c = torch.bitwise_left_shift(a,b)
print("c =",c)

# Apply bitwise_left_shift on a tensor and number
d = torch.bitwise_left_shift(a, 2)
print("d =",d)
```

This produces the following output:

```shell
c = tensor([-2,  4, 24], dtype=torch.int8)
d = tensor([-4, 16, 12], dtype=torch.int8)
```
