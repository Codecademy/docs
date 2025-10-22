---
Title: Multivariate Log Gamma Function
Description: Computes the multivariate log gamma function element-wise.
---

## Introduction

The **multivariate log gamma function**, denoted as $\ln(\Gamma_p(a))$, is a generalization of the standard log gamma function to matrix-valued arguments. In PyTorch, `torch.mvlgamma(input, p)` computes this function element-wise.

It's primarily used in probability distributions involving matrices, particularly the Wishart distribution, which is a multivariate generalization of the gamma distribution. The function is defined for $a > \frac{p-1}{2}$, where `p` is the dimension specified.

The formula for the multivariate log gamma function is:

$$\ln(\Gamma_p(a)) = \frac{p(p-1)}{4} \ln(\pi) + \sum_{i=1}^{p} \ln\left(\Gamma\left(a - \frac{i-1}{2}\right)\right)$$

where $\Gamma(\cdot)$ is the standard gamma function.

## Syntax

```python
torch.mvlgamma(input, p)
```

### Parameters

- **input** (Tensor): The input tensor containing the values 'a' for which to compute the function. Each element must satisfy $a > \frac{p-1}{2}$.
- **p** (int): The dimension parameter, must be at least 1 ($p \ge 1$).

### Returns

A new tensor with the multivariate log gamma function computed for each element in the input tensor.

## Example

```python
import torch

# Input tensor (values must be > (p-1)/2)
# Here p = 3, so input elements must be > (3-1)/2 = 1
a = torch.tensor([1.5, 2.0, 3.5])
p_dimension = 3

# Compute the multivariate log gamma function
result = torch.mvlgamma(a, p=p_dimension)

print(f"Input tensor: {a}")
print(f"Dimension p: {p_dimension}")
print(f"Result (mvlgamma): {result}")
# Expected Output (approximate):
# Input tensor: tensor([1.5000, 2.0000, 3.5000])
# Dimension p: 3
# Result (mvlgamma): tensor([1.9365, 2.1485, 3.8642])

# Example with p = 1 (should match standard lgamma)
a_scalar = torch.tensor([2.5, 4.0])
p1_result = torch.mvlgamma(a_scalar, p=1)
lgamma_result = torch.lgamma(a_scalar)

print(f"\nInput (p=1): {a_scalar}")
print(f"mvlgamma (p=1): {p1_result}")
print(f"lgamma: {lgamma_result}")
# Expected Output (approximate):
# Input (p=1): tensor([2.5000, 4.0000])
# mvlgamma (p=1): tensor([0.2847, 1.7918])
# lgamma: tensor([0.2847, 1.7918])
```

This example demonstrates computing $\ln(\Gamma_3(a))$ for different values of $a$ and also shows that for $p=1$, `torch.mvlgamma` yields the same result as the standard `torch.lgamma`.