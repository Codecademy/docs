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

The **`.bitwise_left_shift()`** function shifts each element of the input tensor to the left by a specified number of bits. Both operands must be of an integral type (e.g., int32, int64). Shifting by a negative number of bits returns 0.

## Syntax

```pseudo
torch.bitwise_left_shift(input, other, *, out=None)
```

**Parameters**:

- `input`: 	The first input tensor, must be of integral type
- `other`: The second input (can be a tensor or integer)
- `out` (Optional): A tensor where the output will be stored

**Return value**:

Returns a tensor of the same shape as the broadcasted inputs, with each element being the result of left-shifting the corresponding element in input by the amount in other.

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
