---
Title: '.gamma()'
Description: 'Generates random samples from a Gamma distribution.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Numpy'
  - 'Python'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.gamma()`** function of the NumPy Random module generates random samples from a Gamma distribution, a two-parameter continuous probability distribution commonly used in statistics for modeling positive-valued data. The two parameters are `shape` and `scale`.

## Syntax

```pseudo
numpy.random.gamma(shape, scale=1.0, size=None)
```

**Parameters:**

- `shape` (float or array_like of floats): The shape parameter, denoted as $\kappa$ (or $k$). Must be non-negative. Determines the shape of the distribution.
- `scale` (float or array_like of floats, optional): The scale parameter, denoted as $\theta$. Must be non-negative. Default is `1.0`. It stretches or compresses the distribution.
- `size` (int or tuple of ints, optional): The output shape. Specifies the number or shape of random samples to generate. If `None` (default), a single sample is returned.

**Return value:**

- `out` (ndarray or scalar): Random samples from the Gamma distribution.
  - If `size` is `None`, returns a single `float`.
  - If `size` is specified, returns a NumPy array of shape `size` containing the sampled values.

## Statistical Properties

Mean: $μ=αθμ=αθ$\
Variance: $σ2=αθ2σ2=αθ2$

The probability density formula for the Gamma distribution is:

$$
p(x) = x^{k-1} \frac{e^{-x/\theta}} {\theta^{k}\Gamma(k)'}
$$

- $\kappa$ is the shape, $\theta$ is scale, and $\Gamma$ is the Gamma function.

## Example

This example generates two reproducible random samples from a Gamma distribution of `shape = 2` and `scale = 2`:

```py
import numpy as np
np.random.seed(15)
result = np.random.gamma(shape=2,scale=2,size=2)
print(result)
```

The output for this code will be:

```shell
[2.59018924 4.28834638]
```

Here:

- `np.random.seed(15)` ensures the output is reproducible across runs.
- `np.random.gamma()` draws two samples from the specified Gamma distribution.

## Codebyte Example

This codebyte example generates a 2×3 array of Gamma-distributed random numbers with `shape = 5` and `scale = 1.5`:

```codebyte/python
import numpy as np
np.random.seed(42)
result = np.random.gamma(shape=5, scale=1.5, size=(2, 3))
print(result)
```

- `np.random.seed(42)` sets the random seed for consistent results.
- `size=(2, 3)` creates a 2D array with 2 rows and 3 columns of gamma-distributed samples.
