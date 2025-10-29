---
Title: '.igammac()'
Description: 'Computes the regularized upper incomplete gamma function.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`torch.igammac()`** function in PyTorch computes the upper regularized incomplete gamma function. This function is commonly used in probabilistic modeling, survival analysis, and statistical machine learning applications. `torch.igammac()` is an alias for `torch.special.gammaincc()`, meaning both functions compute the same values and can be used interchangeably.

## Syntax

```pseudo
torch.igammac(input, other, \*, out=None)
```

This is equivalent to:

```pseudo
torch.special.gammaincc(input, other, \*, out=None)
```

**Parameters:**

- `input` (Tensor): The first non-negative input tensor representing the shape parameter (${a}$).
- `other` (Tensor): The second non-negative input tensor representing the integration limit (${x}$).
- `out` (Tensor, optional): The output tensor.

**Return value:**

Returns a tensor containing the upper regularized incomplete gamma function values for each corresponding pair of elements in `input` and `other`.

> **Note:** Supports broadcasting to a common shape and requires float inputs. The backward pass with respect to `input` is not currently supported.

## Example 1: Basic Element-Wise Computation

In this example, `torch.igammac()` computes the upper regularized incomplete gamma function for corresponding elements of two 1D tensors:

```py
import torch

a = torch.tensor([4.0])
x = torch.tensor([3.0, 4.0, 5.0])

result = torch.igammac(a, x)
print("Upper incomplete gamma:", result)

# Verify complementary relationship with igamma
lower = torch.igamma(a, x)
print("Sum of igamma and igammac:", lower + result)
```

This code produces the following output:

```shell
Upper incomplete gamma: tensor([0.6472, 0.4335, 0.2650])
Sum of igamma and igammac: tensor([1., 1., 1.])
```

## Example 2: Survival Probabilities

In this example, `torch.igammac()` calculates the survival probability (complement of CDF) for a gamma distribution at a given time point:

```py
import torch

shape = torch.tensor([2.0, 3.0, 4.0])
time = torch.tensor([1.5])

survival_prob = torch.igammac(shape, time)
cdf = torch.igamma(shape, time)

print("Shape parameters:", shape)
print("Time point:", time)
print("Survival probabilities:", survival_prob)
print("\nCDF values:", cdf)
print("CDF + Survival:", cdf + survival_prob)
```

The output of this code is:

```shell
Shape parameters: tensor([2., 3., 4.])
Time point: tensor([1.5])
Survival probabilities: tensor([0.4422, 0.7127, 0.8221])

CDF values: tensor([0.5578, 0.2873, 0.1779])
CDF + Survival: tensor([1., 1., 1.])
```
