---
Title: '.mvlgamma()'
Description: 'Computes the multivariate log-gamma function for tensor inputs.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'PyTorch'
  - 'Tensor Operations'
  - 'Math Functions'
  - 'Probability'
  - 'Statistics'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`torch.mvlgamma()`** function in PyTorch computes the multivariate log-gamma function for tensor inputs. It is widely used in multivariate statistics, particularly to calculate normalization constants in distributions such as the Wishart or multivariate Gamma distributions. Denoted as ${(\ln(\Gamma_p(a))\)}$, the multivariate log-gamma function generalizes the standard log-gamma function to matrix-valued arguments and is evaluated element-wise for each tensor value. It is defined for ${\(a > \frac{p-1}{2}\)}$, where ${\(p\)}$ is the specified dimension.

The function is commonly applied in probability distributions over matrices, with the Wishart distribution being a frequent use case.

The formula for the multivariate log-gamma function is:

$$\ln(\Gamma_p(a)) = \frac{p(p-1)}{4} \ln(\pi) + \sum_{i=1}^{p} \ln\left(\Gamma\left(a - \frac{i-1}{2}\right)\right)$$

where $\Gamma(\cdot)$ is the standard gamma function.

## Syntax

```pseudo
torch.mvlgamma(input, p, out = None)
```

**Parameters:**

- `input` (Tensor): Tensor of values for which to compute the multivariate log-gamma function.
- `p` (int): Number of dimensions in the multivariate gamma function. Must be a positive integer.
- `out` (Tensor, optional): Tensor to store the output. If provided, must be broadcastable to the shape of the result.

**Return value:**

Returns a tensor containing the multivariate log-gamma values for each element in `input`, evaluated element-wise according to the specified dimension `p`.

## Example 1: Element-wise computation

In this example, `torch.mvlgamma()` computes the multivariate log-gamma function for a 1D tensor:

```py
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
```

The output of this code is:

```shell
Input tensor: tensor([1.5000, 2.0000, 3.5000])
Dimension p: 3
Result (mvlgamma): tensor([2.1687, 1.5963, 3.8959])
```

## Example 2: Comparison with standard lgamma

In this example, `torch.mvlgamma()` is computed with `p=1` to show it matches the standard `torch.lgamma()`:

```py
import torch

a_scalar = torch.tensor([2.5, 4.0])
p1_result = torch.mvlgamma(a_scalar, p=1)
lgamma_result = torch.lgamma(a_scalar)

print(f"Input (p=1): {a_scalar}")
print(f"mvlgamma (p=1): {p1_result}")
print(f"lgamma: {lgamma_result}")
```

The output of this code is:

```shell
Input (p=1): tensor([2.5000, 4.0000])
mvlgamma (p=1): tensor([0.2847, 1.7918])
lgamma: tensor([0.2847, 1.7918])
```
