---
Title: '.gamma()'
Description: 'Draws samples from a gamma distribution'
Subjects:
  - 'computer science'
  - 'data visualization'
Tags:
  - 'numpy'
  - 'python'
  - 'random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **.gamma()** function of NumPy Random module generates random samples from the Gamma distribution, a three-parameter continuous probability distribution commonly used in statistics for modeling positive-valued data. 

## Syntax

The basic syntax to generate a random gamma distribution.

```pseudo
numpy.random.gamma(shape, scale, size)
```

> [!Note]
> New code should use the `.gamma` method of a `Generator` instance instead.

### Parameters

`shape`: float or array_like of floats.  
The shape parameter, $\kappa$ of the distribution. Must be non-negative.

`scale': float or array_like of floats, optional.  
The scale parameter $\theta$ of the distribution. Default is 1.0. Must be non-negative.

`size`: int or tuple of ints, optional.  
The output shape. If provided, the function returns samples in the specified shape. If `None` (default), a single sample is returned.

### Statistical Properties

Mean: $μ=αθμ=αθ$\
Variance: $σ2=αθ2σ2=αθ2$

The probability density for the Gamma distribution is:

$$
p(x) = x^{k-1} \frac{e^{-x/\theta}} {\theta^{k}\Gamma(k)'}
$$

Where $\kappa$ is the shape, $\theta$ is scale and $\Gamma$ is the Gamma function.  
The Gamma distribution is often used to model the times to failure of electronic components,  
and arises naturally in processes for which the waiting times between Poisson distributed events are relevant.

### Returns

out: scalar for single result, ndarray (N-dimensional array) for multiple results.  
Drawn samples from the parameterized Gamma distribution.

## Example

`np.random.seed(15)` for repeatability.

```py
import numpy as np
np.random.seed(15)
result = np.random.gamma(shape=2,scale=2,size=2)
print(result)
```

Output:

```shell
[2.59018924 4.28834638]
```
