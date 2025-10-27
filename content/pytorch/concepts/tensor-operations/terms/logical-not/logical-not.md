---
Title: '.logical_not()'
Description: 'Performs element-wise logical NOT on boolean tensors, returning a tensor where each element is the boolean negation of the input.'
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Booleans'
  - 'Functions'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.logical_not()`** function performs an element-wise logical negation on a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It returns a tensor where each element is `True` if the corresponding input is `False`, and `False` otherwise. For non-boolean tensors, zeros are treated as `False` and non-zeros as `True`.

This function is commonly used in masking, boolean indexing, and creating complement conditions.

## Syntax

```pseudo
torch.logical_not(input, *, out=None)
```

**Parameters:**

- `input`: The input tensor containing boolean or numeric values.
- `out` (Optional): A tensor to store the result. It must have the same shape as the output. The dtype is typically `torch.bool`, but integer types that can represent `0` and `1` (like `torch.int16`) are also supported. The results are stored as `1` for `True` and `0` for `False`.

**Return value:**

Returns a new tensor containing the element-wise logical negation of the input tensor.

## Example

The following example demonstrates the use of `.logical_not()` for masking and boolean inversion:

```py
import torch

# Create a boolean tensor
mask = torch.tensor([True, False, True, False])

# Element-wise logical NOT
inv = torch.logical_not(mask)

print('mask:', mask)
print('logical_not(mask):', inv)

# Use logical_not to invert a condition from a numeric tensor
vals = torch.tensor([0.0, 1.5, -2.0, 0.0])
cond = vals > 0
cond_inv = torch.logical_not(cond)

print('\nvals:', vals)
print('cond (vals > 0):', cond)
print('cond inverted with logical_not:', cond_inv)

# Numeric input — zeros are False, non-zeros are True
print(torch.logical_not(torch.tensor([0., 2.45, -20., 3.8], dtype=torch.double)))

# Using an integer out tensor (int16) to store 0/1 results
out_buf = torch.empty(4, dtype=torch.int16)
print(torch.logical_not(torch.tensor([0., 2.45, -20., 3.8], dtype=torch.double), out=out_buf))
```

The above code produces the following output:

```shell
mask: tensor([ True, False,  True, False])
logical_not(mask): tensor([False,  True, False,  True])

vals: tensor([ 0.0000,  1.5000, -2.0000,  0.0000])
cond (vals > 0): tensor([False,  True, False, False])
cond inverted with logical_not: tensor([ True, False,  True,  True])
tensor([ True, False, False, False])
tensor([1, 0, 0, 0], dtype=torch.int16)
```
