---
Title: '.binomial()'
Description: 'Draws random samples from a binomial distribution.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Functions'
  - 'Numpy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy's `random` module, the **`.binomial()`** method generates random samples from a binomial distribution, representing the number of successes in `n` independent trials, each with a fixed probability `p` of success.

## Syntax

```pseudo
numpy.random.binomial(n, p, size=None)
```

**Parameters:**

- `n` (int or array-like of ints): Number of trials (must be non-negative).
- `p` (float or array-like of floats): Probability of success on each trial (must be between 0 and 1 inclusive).
- `size` (Optional): The shape of the output array. If `None`, a single value is returned. If given as a tuple, it specifies the shape of the output array.

**Return value:**

The `.binomial()` function returns one or more random integers representing the number of successes across `n` trials with success probability `p`.

- If `size` is `None`, a single integer is returned.
- If `size` is specified, an array of integers is returned with the given shape.

## Example: Generating Random Binomial Samples in NumPy

This example simulates 10 independent trials, repeated 5 times. Each value in the result represents the number of successes in one set of 10 trials:

```py
import numpy as np

# Generate 5 random samples from a binomial distribution
result = np.random.binomial(n=10, p=0.5, size=5)

print(result)
```

A possible output of this code could be:

```shell
[3 5 4 5 4]
```

> **Note:** The output will vary with each execution since it is randomly sampled.

## Codebyte Example

In this codebyte example, a single random value is generated from a binomial distribution with 15 trials and a 60% chance of success:

```codebyte/python
import numpy as np
# Define number of trials and probability
n = 15
p = 0.6
# Generate one random sample
sample = np.random.binomial(n, p)
print(sample)
```
