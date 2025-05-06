---
Title: '.bitwise_xor()'
Description: 'Computes the bitwise XOR value of the inputs'
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
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.bitwise_xor()`** is used to calculate the bitwise XOR value of the inputs. The inputs should be either of boolean or of integer value. In the case of integral inputs, the value are converted to their binary value and then computed.

## Syntax

```pseudo
torch.bitwise_xor(input, other, *, out=None)
```

Parameters:

-`input`: The first input tensor -`other`: The second input tensor or a single number -`out`: The output tensor

## Example

The following example demonstrates how to perform bitwise XOR on a tensor:

```py
import torch

#create two tensors
a = torch.tensor([-1, 1, 0, -3], dtype=torch.int8)
b = torch.tensor([7, 1, -5, 3], dtype=torch.int8)

#apply bitwise_xor on two tensors
c = torch.bitwise_xor(a,b)
print("c =",c)

#apply bitwise_xor on a tensor and number
d = torch.bitwise_xor(b, -9)
print("d =",d)
```

This produces the following output:

```shell
c = tensor([-8,  0, -5, -2], dtype=torch.int8)
d = tensor([-16, -10,  12, -12], dtype=torch.int8)
```
