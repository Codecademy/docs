---
Title: '.igammac()'
Description: 'Computes the regularized upper incomplete gamma function.'
Subjects:
  - 'AI'
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

In PyTorch, the `.igammac()` method is an alias for `torch.special.gammaincc()` and computes the regularized upper incomplete gamma function. This function is commonly used in probabilistic modeling, survival analysis, and statistical machine learning applications.

\## Syntax

```py

torch.igammac(input, other, \*, out=None)

```

This is equivalent to:

```py

torch.special.gammaincc(input, other, \*, out=None)

```

\### Parameters

\- `input` (Tensor): The first non-negative input tensor representing the shape parameter.

\- `other` (Tensor): The second non-negative input tensor representing the integration limit.

\### Keyword Arguments

\- `out` (Tensor, optional): The output tensor.

\### Return Value

Returns a tensor containing the computed regularized upper incomplete gamma function values. The function computes the probability mass from `other` to infinity under the gamma distribution.

\*\*Note:\*\* The function supports broadcasting to a common shape and requires float inputs. The backward pass with respect to `input` is not currently supported.

\## Example

The following example demonstrates the use of `.igammac()`:

```py

import torch



\# Create input tensors

a = torch.tensor(\[4.0])

x = torch.tensor(\[3.0, 4.0, 5.0])



\# Compute the regularized upper incomplete gamma

result = torch.igammac(a, x)



print("Upper incomplete gamma:", result)



\# Verify complementary relationship

lower = torch.igamma(a, x)

sum\_result = lower + result



print("Sum of igamma and igammac:", sum\_result)

```

The above code produces the following output:

```

Upper incomplete gamma: tensor(\[0.6472, 0.4335, 0.2650])

Sum of igamma and igammac: tensor(\[1., 1., 1.])

```

\## Codebyte Example

The following codebyte demonstrates `.igammac()` in an interactive example:

```codebyte/python

import torch



\# Example: Computing survival probabilities

shape = torch.tensor(\[2.0, 3.0, 4.0])

time = torch.tensor(\[1.5])



\# Calculate the probability of surviving past time 1.5

survival\_prob = torch.igammac(shape, time)



print("Shape parameters:", shape)

print("Time point:", time)

print("Survival probabilities:", survival\_prob)



\# Show complementary relationship

cdf = torch.igamma(shape, time)

print("\\nCDF values:", cdf)

print("CDF + Survival:", cdf + survival\_prob)

```
