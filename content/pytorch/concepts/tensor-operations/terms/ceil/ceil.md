---
Title: '.ceil()'
Description: 'Returns a new tensor with the smallest integer greater than or equal to each element of the input tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Machine Learning'
  - 'Functions'
  - 'Values'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.ceil()`** function returns a new tensor with the smallest integer greater than or equal to each element of the input tensor.

## Syntax

```pseudo
torch.ceil(input,*, out=None)
```

- `input`: the primary parameter, representing the tensor whose elements you want to apply the ceiling operation to

- `out`: an optional keyword argument. If you provide an existing tensor here, the result of the `ceil` operation will be stored in this `out`tensor. This can be useful for memory optimization if you want to reuse an existing tensor

## Example

```py
import torch

# Create a tensor
x = torch.tensor([1.2, -0.8, 3.0, -2.7, 5.5])

# Apply the ceil operation
y = torch.ceil(x)

print(f"Original tensor: {x}")
print(f"Ceil tensor: {y}")
```

The above program gives the following output:

```shell
Original tensor: tensor([1.2000, -0.8000, 3.0000, -2.7000, 5.5000])
Ceil tensor: tensor([2., -0.0000, 3., -2., 6.])
```
