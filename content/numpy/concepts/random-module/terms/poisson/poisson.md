---
Title: '.poisson()' 
Description: 'Returns random integers from a Poisson distribution.' 
Subjects: 
  - 'Data Science'
  - 'Data Visualization'
Tags: 
  - 'Data Distributions'
  - 'NumPy'
  - 'Probability'
  - 'Random'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science-foundations'
---

NumPy’s `random` module includes the **`.poisson()`** function, which draws random samples from a Poisson distribution. This distribution models the probability of observing `k` events in a fixed time interval, given they occur at a constant average rate $`\lambda`$ and independently of the time since the last event.

**The Poisson distribution**:

$$f\left(k;\lambda\right) = \frac{\lambda^k e^{-\lambda}}{k!}$$

## Syntax

```pseudo
numpy.random.poisson(lam=1.0, size=None)
```

**Parameters:**

- `lam` (float, or array_like of floats): The expected number of events occurring over a fixed-time period. Must be non-negative.
- `size` (int, or tuple of ints, optional): Output shape. For example, `(3, 4)` produces a _3×4_ array. If `None`, a single sample is returned if `lam` is scalar; otherwise, `np.array(lam).size` samples are drawn.

**Return value:**

- `Out` (ndarray or scalar): Drawn samples from Poisson distribution given parameter inputs.Samples drawn from the Poisson distribution with the specified parameters.

## Example 1

The following example draws 10 samples from a Poisson distribution with `lam=5`:

```py
import numpy as np

# Generate 10 random samples from a Poisson distribution with λ = 5
results = np.random.poisson(5, 10)

# Print the samples
print(results)
```

This code will output something similar to this:

```shell
[ 7  5 13  5  4  3  2  8  3  4]
```

## Example 2

This example generates a _3×4_ matrix of random integers from a Poisson distribution with `λ = 5`:

```py
import numpy as np

# Generate a 3x4 array of Poisson samples with λ = 5
results = np.random.poisson(5, (3, 4))

print(results)
```

This code will produce an output similar to this:

```shell
[[4 4 4 7]
 [1 8 3 4]
 [3 4 8 5]]
```

> **Note:** The method produces random results so outcomes will vary.

## Codebyte Example

This codebyte example generates 10 Poisson-distributed random samples using a lambda value of 5 and prints the result:

```codebyte/python
import numpy as np

# Set lambda value
lam = 5

# Set sample size
size = 10

# Generate samples
results = np.random.poisson(lam, size)

# Print the samples
print(results)
```
