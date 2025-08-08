---
Title: '.floor()'
Description: 'Rounds each element of the input tensor down to the nearest integer.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Neural Networks'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-python'
  - 'paths/machine-learning'
---
In PyTorch, the **`.floor()`** function rounds each element of the input tensor down to the nearest integer, including negative numbers.(Official documentation: https://docs.pytorch.org/docs/stable/generated/torch.floor.html)


## Syntax

```pseudo
torch.floor(input, *, out=None)
```
- `input`: The input tensor whose elements will be rounded down.
- `out` (optional): A tensor to store the output. Must have the same shape as input.

The asterisk * means that `out` must be passed as a keyword argument (e.g., `out=result`) rather than a positional argument.
```py
# correct 
torch.floor(input, out=result)

# incorrect 
torch.floor(input, result)
```


## Example

The following example demonstrates the usage of the `.floor()` function:

```py
import torch

# Define input
input = torch.randn(4)
print(input)                    # the .randn() function produces values like: tensor([-0.8166, 1.5308, 5.6701, -1.589])

# Round down to the nearest integer
output = torch.floor(input)              
print(output)                   # the .floor() function rounds each value down: tensor([-1., 1., 5., -2.])
```

### Using the `out` parameter
This example shows how to use the optional `out` argument to store the results in a pre-allocated tensor:

```py
import torch

# Define input
input = torch.tensor([1.7, -0.2, 3.9])

# Pre-allocate an output tensor with the same shape
result = torch.empty_like(input)

# Compute floor and store result in `result` tensor
torch.floor(input, out=result)

print(result)                   # the values are rounded down: tensor([1., -1., 3.])
```