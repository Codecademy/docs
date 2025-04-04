---
Title: '.bitwise_not()'
Description: 'Performs element-wise bitwise NOT operation on the input tensor, flipping each bit (0 becomes 1 and 1 becomes 0). Applicable to integer and boolean tensors.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.bitwise_not()`** function performs an element-wise bitwise NOT operation on the input tensor. This flips each bit of the tensor’s binary representation, turning `0` to `1` and `1` to `0`. It works for integer tensors (signed or unsigned) and boolean tensors (where it acts as a logical NOT).

## Syntax

```pseudo
torch.bitwise_not(input, *, out=None)
```

- `input`: A tensor of integer or boolean dtype.
- `out` (Optional): The output tensor to store the result.

## Example

The following example demonstrates the usage of the `.bitwise_not()` function:

```py
import torch

# Create a boolean tensor
tensor_in = torch.tensor([True, False, True])

# Apply bitwise NOT
result = torch.bitwise_not(tensor_in)

print(result)
```

The above code produces the following output:

```shell
tensor([False,  True, False])
```
