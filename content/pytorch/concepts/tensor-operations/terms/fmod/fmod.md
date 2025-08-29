---
Title: '.fmod()' 
Description: 'Computes element-wise remainder of tensor division with sign matching the dividend.'
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

In PyTorch, the .fmod() method performs element-wise modulo operation on a tensor [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) and returns a new tensor containing the remainders. The sign of the result always matches the sign of the dividend (the input tensor elements).

Mathematically, for each element in the input tensor, the operation follows:

$$
\text{result} = \text{input} - (\text{divisor} \times \text{trunc}(\text{input}/\text{divisor}))
$$

where `trunc` means truncation toward zero (i.e., rounding towards 0).  

## Syntax



### 1. Tensor Method Call
```python
result = tensor.fmod(divisor)
```

### 2. Function Form Call
```python
result = torch.fmod(input, divisor)

```

### 3. In-place Operation
```python
tensor.fmod_(divisor)  # Modifies original tensor, returns no new tensor
```

**Parameters**

- **`input`** (Tensor): The dividend tensor
- **`divisor`** (Tensor or Number): The divisor, can be:
  - Scalar value (int or float)
  - Tensor with the same shape as input
  - Tensor broadcastable to input's shape

**Return Value**
- Returns a new tensor containing element-wise remainder results
- Result tensor has the same shape as input tensor (considering broadcast rules)



## Example

```python
import torch

# Scalar divisor
x = torch.tensor([5.0, -3.5, 2.1])
result = x.fmod(2)  # or torch.fmod(x, 2)
print(result)  # tensor([1.0000, -1.5000, 0.1000])

# Tensor divisor
x = torch.tensor([5.0, -3.5, 2.1])
y = torch.tensor([3.0, 2.0, 1.5])
result = x.fmod(y)
print(result)  # tensor([2.0000, -1.5000, 0.6000])

# In-place operation
x = torch.tensor([5.0, -3.5, 2.1])
x.fmod_(2)  # x is modified directly
print(x)  # tensor([1.0000, -1.5000, 0.1000])
```
