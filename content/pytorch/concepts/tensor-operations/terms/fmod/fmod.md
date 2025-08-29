---
Title: '.fmod()' 
Description: 'Returns the element-wise remainder of division, keeping the same sign as the dividend.'
Subjects: 
  - 'Computer Science'
  - 'Machine Learning'
Tags: 
  - 'Functions'
  - 'Machine Learning'
  - 'Python'
  - 'Tensor'
CatalogContent: 
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.fmod()`** method performs element-wise modulo operation on a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) and returns a new tensor containing the remainders. The sign of the result always matches the sign of the dividend (the input tensor elements).

Mathematically, for each element in the input tensor, the operation follows:

$$
\text{result} = \text{input} - (\text{divisor} \times \text{trunc}(\text{input}/\text{divisor}))
$$

where `trunc` means truncation toward zero (i.e., rounding towards 0).

## Syntax

```pseudo
torch.fmod(input, other, *, out=None) -> Tensor
```

**Parameters**

- `input` (Tensor): Dividend tensor.
- `other` (Tensor or Scalar): Divisor, can be a tensor (broadcastable with input) or a scalar.
- `out` (Tensor, optional): Output tensor to store the result.

**Return value:**

- Returns a tensor containing the element-wise remainder of division, where the result has the same sign as `input`.

## Example

```py
import torch

# Scalar divisor
x = torch.tensor([5.0, -3.5, 2.1])
result = x.fmod(2)  # or torch.fmod(x, 2)
print(result)

# Tensor divisor
x = torch.tensor([5.0, -3.5, 2.1])
y = torch.tensor([3.0, 2.0, 1.5])
result = x.fmod(y)
print(result)

# In-place operation
x = torch.tensor([5.0, -3.5, 2.1])
x.fmod_(2)  # x is modified directly
print(x)
```

The output of this code is:

```shell
tensor([ 1.0000, -1.5000,  0.1000])
tensor([ 2.0000, -1.5000,  0.6000])
tensor([ 1.0000, -1.5000,  0.1000])
```
