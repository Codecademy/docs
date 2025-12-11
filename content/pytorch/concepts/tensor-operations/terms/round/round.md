---
Title: 'round.()'
Description: 'Rounds each element to the nearest integer or specified number of decimals.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'Round'
  - 'Python'
  - 'Tensor'
  - 'Computer Science'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
  - 'paths/machine-learning'
  - 'paths/data-science'
---

In PyTorch, the **`.round`** function returns a new [tensor](https://docs.pytorch.org/docs/stable/generated/torch.round.html#torch.round) rounded to the nearest integer.

## Syntax

```
torch.round(input, decimals=0)
```

- `input`: (tensor) the input tensor to be rounded.
- `decimals`: (int) Number of decimal places to round to (default: 0). If decimals is negative, it specifies the number of positions to the left of the decimal point.

## Examples

```python
torch.round(torch.tensor((4.7, -2.3, 9.1, -7.7)))

# Values equidistant from two integers are rounded towards the
# the nearest even value (zero is treated as even)
torch.round(torch.tensor([-0.5, 0.5, 1.5, 2.5]))

# A positive decimals argument rounds to the to that decimal place
torch.round(torch.tensor([0.1234567]), decimals=3)

# A negative decimals argument rounds to the left of the decimal
torch.round(torch.tensor([1200.1234567]), decimals=-3)
```
