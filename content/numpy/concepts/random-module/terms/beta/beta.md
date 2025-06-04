---
Title: '.beta()'
Description: 'Generates random values based on a beta distribution.'
Subjects:
  - 'AI'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Functions'
  - 'Numpy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the `random` module of NumPy, the **`.beta()`** method generates random samples from a Beta distribution, which is defined by two shape parameters, `a` and `b`. This distribution is commonly used in Bayesian inference to model the distribution of probabilities and in order statistics due to its flexibility in shape.

The Beta distribution has the probability function:

```tex
f\left(x; \alpha, \beta \right) = \int \frac{1}{B\left(\alpha, \beta \right)} x^{\alpha -1} \left(1-x \right)^{\beta -1}
```

Where `B` represents the beta function:

```tex
B(\alpha, \beta) = \int_0^1 t^{\alpha -1} (1-t)^{\beta -1 } dt
```

## Syntax

```pseudo
numpy.random.beta(a, b, size=None)
```

**Parameters:**

- `a` (float or array_like of floats): The alpha shape parameter. This must be a positive value.
- `b` (float or array_like of floats): The beta shape parameter. This must also be positive.
- `size` (Optional): Defines the shape of the output array. If not provided, the behavior depends on whether `a` and `b` are scalars or arrays.

**Return value:**

In NumPy, the `.beta()` function returns a randomly drawn sample or an array of samples from beta distribution configured according to `a` and `b`.

- If `size` is `None`, a single random value is returned if both `a` and `b` are scalars. Otherwise, `np.broadcast(a, b).size` samples are returned.
- If `size` is specified, an array of randomly generated values is returned, with the shape of the array determined by `size`.

## Example: Generating Random Values from a Beta Distribution

The example below shows how to generate random values from a beta distribution configured with an alpha and beta value:

```py
import numpy as np

# Generate 5 random values from a beta distribution with an alpha of 3 and a beta of 4
result = np.random.beta(3, 4, size = 5)

print(result)
```

A possible output of this code can be:

```shell
[0.14092969 0.52861406 0.15658351 0.545189   0.47077243]
```

This code randomly draws 5 values from a beta distribution with an alpha of 3 and a beta of 4.

> **Note:** The output may vary with each execution because the values are randomly generated.

## Codebyte Example

In this codebyte example, we sample 5 values from a beta distribution with an alpha or (`a`) of 2 and a beta or (`b`) of 5:

```codebyte/python
import numpy as np

# Set value of alpha
alpha = 2

# Set value of beta
beta = 5

# Generates 5 random values from the beta distribution
values =  np.random.beta(alpha, beta, size = 5)

print(values)
```
