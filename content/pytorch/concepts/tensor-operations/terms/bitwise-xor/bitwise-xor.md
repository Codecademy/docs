---
Title: '.bitwise_xor()'
Description: 'Computes the bitwise XOR value of the inputs.'
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

The **`.bitwise_xor()`** is used to calculate the bitwise XOR value of the inputs. The inputs should be either of boolean or of integer value. In the case of integral inputs, the values are converted to their binary value and then computed.

## Syntax

```pseudo
torch.bitwise_xor(input, other, *, out=None)
```

**Parameters:**

- `input`: The first input tensor with boolean or integer values to apply XOR on.
- `other`: The second input tensor or a single number.
- `out`: The output tensor to store the result.

**Return value:**

- A tensor containing the result of the element-wise bitwise XOR operation. The output tensor has the same shape as the broadcasted shape of `input` and `other`.

## Example

The following example shows how to perform bitwise XOR on a tensor:

```py
import torch

# Create two tensors
a = torch.tensor([-1, 1, 0, -3], dtype=torch.int8)
b = torch.tensor([7, 1, -5, 3], dtype=torch.int8)

# Apply bitwise_xor on two tensors
c = torch.bitwise_xor(a,b)
print("c =",c)

# Apply bitwise_xor on a tensor and number
d = torch.bitwise_xor(b, -9)
print("d =",d)
```

This produces the following output:

```shell
c = tensor([-8,  0, -5, -2], dtype=torch.int8)
d = tensor([-16, -10,  12, -12], dtype=torch.int8)
```
