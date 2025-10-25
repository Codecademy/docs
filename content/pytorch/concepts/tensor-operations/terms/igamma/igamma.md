---
Title: '.igamma()'
Description: 'Computes the lower regularized incomplete gamma function for tensor inputs.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Methods'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`torch.igamma()`** function in PyTorch computes the lower regularized incomplete gamma function, a special mathematical function often used in probability, statistics, and machine learning. `torch.igamma()` is an alias for `torch.special.gammainc()`. This means both functions compute the regularized lower incomplete gamma function and can be used interchangeably.

## Syntax

```pseudo
torch.igamma(input, other, *, out=None)
```

Or, alternatively:

```pseudo
torch.special.gammainc(input, other, *, out=None)
```

**Parameters:**

- `input` (Tensor): The shape parameter ${a\}$ of the gamma function.
- `other` (Tensor): The upper limit ${x\}$ of the integral.
- `out` (Tensor, optional): The output tensor.

**Return value:**

Returns a tensor containing the lower regularized incomplete gamma function values for each corresponding pair of elements in `input` and `other`.

## Example 1: Basic Element-Wise Computation

In this example, `torch.igamma()` computes the lower regularized incomplete gamma function for corresponding elements of two 1D tensors:

```py
import torch

a = torch.tensor([2.0, 3.0, 4.0])
x = torch.tensor([1.0, 2.0, 3.0])

result = torch.igamma(a, x)
print(result)
```

This example produces the following output:

```shell
tensor([0.2642, 0.3233, 0.3528])
```

## Example 2: Gamma Distribution CDF

In this example, `torch.igamma()` calculates the cumulative distribution function (CDF) of a Gamma distribution with shape ${a\}$ and rate 1:

```py
import torch

a = torch.tensor([2.0])
x = torch.linspace(0, 5, 6)
gamma_cdf = torch.igamma(a, x)

print(gamma_cdf)
```

The output of this code is:

```shell
tensor([0.0000, 0.2642, 0.5940, 0.8009, 0.9084, 0.9596])
```

The `.igamma()` function is useful for:

- Computing CDFs of Gamma, Chi-square, or Exponential distributions.
- Performing Bayesian statistical modeling (priors and posteriors).
- Implementing neural network activations and loss functions involving special functions.
