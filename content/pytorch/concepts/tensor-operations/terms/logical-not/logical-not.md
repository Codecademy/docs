---
Title: '.logical_not()'
Description: 'Performs element-wise logical NOT on boolean tensors, returning a tensor where each element is the boolean negation of the input.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Booleans'
  - 'PyTorch'
  - 'Tensor'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.logical_not()`** function computes the element-wise logical negation of a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). It returns a tensor where each element is `True` when the corresponding input element is `False` and vice versa. If the input tensor is not a boolean tensor, then zeros are treated as `False` and non-zeros are treated as `True`.

This operation is often used in masking, boolean indexing, and constructing complement conditions.

## Syntax

```pseudo
torch.logical_not(input, *, out=None)
```

**Parameters:**

- `input`: A tensor of any numeric or boolean dtype. The function returns a boolean tensor.
 - `out` (Optional): A tensor to store the result. Must have the same shape as the expected output. The typical dtype for the output is boolean (`torch.bool`), but integer dtypes that can represent `0`/`1` (for example, `torch.int16`) are accepted; results will be stored as `1` (True) and `0` (False) in that tensor.

**Return value:**

Returns a new boolean tensor containing the element-wise logical negation of `input`.

## Example

The following example shows typical usage of `.logical_not()` for masking and boolean inversion:

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
print(torch.logical_not(torch.tensor([0., 1.5, -10.], dtype=torch.double)))

# Using an integer out tensor (int16) to store 0/1 results
out_buf = torch.empty(3, dtype=torch.int16)
print(torch.logical_not(torch.tensor([0., 1.5, -10.], dtype=torch.double), out=out_buf))
```

The above code produces the following output:

```shell
mask: tensor([ True, False,  True, False])
logical_not(mask): tensor([False,  True, False,  True])

vals: tensor([ 0.0000,  1.5000, -2.0000,  0.0000])
cond (vals > 0): tensor([False,  True, False, False])
cond inverted with logical_not: tensor([ True, False,  True,  True])

tensor([ True, False, False])
tensor([1, 0, 0], dtype=torch.int16)
```

> **Note:** For integer or floating-point tensors, first create a boolean condition (for example, `x > 0`) or cast with `.to(torch.bool)` before calling `.logical_not()`.
