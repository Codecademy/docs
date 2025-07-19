---
Title: '.normal()'
Description: 'Generates random samples from a normal (Gaussian) distribution.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Numpy'
  - 'Python'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.normal()`** function from NumPy's `random` module generates random numbers from a normal (Gaussian) distribution, which is a continuous, bell-shaped distribution commonly used in statistics and data science.

## Syntax

```pseudo
numpy.random.normal(loc=0.0, scale=1.0, size=None)
```

**Parameters:**

- `loc` (float or array_like of floats, optional): The mean ($\mu$) of the distribution. Default is `0.0`.
- `scale` (float or array_like of floats, optional): The standard deviation ($\sigma$) of the distribution. Must be non-negative. Default is `1.0`.
- `size` (int or tuple of ints, optional): The output shape. Specifies the number or shape of random samples to generate. If `None` (default), a single sample is returned.

**Return value:**

- `out` (ndarray or scalar): Random samples from the normal distribution.
  - If `size` is `None`, returns a single float.
  - If `size` is specified, returns a NumPy array of the given shape with samples drawn from the normal distribution.

## Statistical Properties

- Mean ($μ$) = `loc`
- Variance ($σ^2$) = $\text{scale}^2$

The Probability Density Function (PDF) of the normal distribution is:

$$
p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \ e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

- $\mu$ is the mean (`loc`).
- $\sigma$ is the standard deviation (`scale`).

## Example

This example generates two reproducible random samples from a normal distribution with `loc = 0` (mean) and `scale = 1` (standard deviation):

```py
import numpy as np
np.random.seed(15)
result = np.random.normal(loc=0, scale=1, size=2)
print(result)
```

The output for this code will be:

```shell
[-0.44493578  0.22274619]
```

Here:

- `np.random.seed(15)` ensures the same random numbers are generated every time the code runs.
- `np.random.normal()` draws two samples from the standard normal distribution.

## Codebyte Example

This codebyte example generates a 2×3 array of normally distributed random numbers with `loc = 5` (mean) and `scale = 2` (standard deviation):

```codebyte/python
import numpy as np
np.random.seed(42)
result = np.random.normal(loc=5, scale=2, size=(2, 3))
print(result)
```

- `np.random.seed(42)` sets the random seed for consistent results.
- `size=(2, 3)` creates a 2D array with 2 rows and 3 columns of normally distributed samples.
