---
Title: '.igamma'
Description: 'Computes the lower regularized incomplete gamma function.'
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

The torch.igamma() function in PyTorch computes the lower regularized incomplete gamma function, a special mathematical function often used in probability, statistics, and machine learning.
It returns a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) containing the computed values for each element pair in the input tensors.

## Syntax

```pseudo
torch.igamma(input, other, *, out=None)
```

**Parameters:**
input (Tensor): The shape parameter 𝑎 a of the gamma function.
other (Tensor): The upper limit 𝑥 of the integral.
out (Tensor, optional): The output tensor.

**Return value:**

The `.igamma` property returns a tensor containing the result of the lower regularized incomplete gamma function for each pair of elements in input and other

## Example 1

The following example demonstrates how to use the `torch.igamma()` function to compute the lower regularized incomplete gamma values:

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

## Example 2

The CDF of a Gamma distribution with shape 𝑎 a and rate 1 can be computed using torch.igamma:

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

The `.igamma` property is useful for:

- Computing CDFs of Gamma, Chi-square, or Exponential distributions.
- Performing Bayesian statistical modeling (priors and posteriors).
- Implementing neural network activations and loss functions involving special functions.
