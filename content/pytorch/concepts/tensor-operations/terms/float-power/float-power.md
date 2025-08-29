---
Title: torch.float-power
Description: ' `torch.float_power` computes the element-wise power of an input tensor to a given exponent, always casting the exponent to a floating point type before the operation. This function is particularly useful when working with fractional exponents or when floating point precision is required.'

Subjects:
  - 'Computer Science'
Tags:
  - 'Python'
  - 'Pytorch'

CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

[ **float_power** is a PyTorch function that performs element-wise exponentiation using floating-point arithmetic, returning a float tensor even if the inputs are integers.]

## Syntax

```python
torch.float_power(input, exponent, *, out=None)
```

## Example

```python
import torch

# Example 1: Tensor base, scalar exponent
base = torch.tensor([1, 2, 3, 4])
exp = 2
result = torch.float_power(base, exp)
print(result)
# Output: tensor([ 1.,  4.,  9., 16.])

# Example 2: Tensor base, tensor exponents (including fractional)
base = torch.tensor([1, 2, 3, 4])
exp = torch.tensor([0.5, 1, 1.5, 2])
result = torch.float_power(base, exp)
print(result)
# Output: tensor([ 1.0000, 2.0000, 5.1962, 16.0000 ])
```

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.

import torch

base = torch.tensor([2, 3, 4])
exponent = torch.tensor([3, 2, 0.5])

result = torch.float_power(base, exponent)
print(result)
# Output: tensor([8.0000, 9.0000, 2.0000])
```
