---
Title: '.binomial()'
Description: 'Draw samples from a binomial distribution'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Functions'
  - 'Numpy'
  - 'Probability'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the `random` module of NumPy, the **`.binomial()`** method generates random samples from a binomial distribution. It is commonly used to simulate the number of successes in a sequence of independent trials, where each trial has the same probability of success.

## Syntax

```pseudo
numpy.random.binomial(n, p, size=None)
````

**Parameters:**

* `n` *(int or array-like of ints)* : Number of trials. Must be **non-negative**.
* `p` *(float or array-like of floats)* : Probability of success for each trial (between 0 and 1).
* `size` *(Optional)* : The shape of the output array. If not specified, a single value is returned.

**Return value:**

The `.binomial()` function returns one or more random values representing the number of successes across `n` trials with success probability `p`.

* If `size` is `None`, a single integer is returned.
* If `size` is specified, an array of integers is returned with the given shape.

## Example: Generating Random Binomial Samples in NumPy

The following example simulates the number of successful outcomes in 10 trials, repeated 5 times:

```py
import numpy as np

# Generate 5 random samples from a binomial distribution
result = np.random.binomial(n=10, p=0.5, size=5)

print(result)
```

A possible output of this code could be:

```shell
array([4 6 5 3 7])
```

Each value represents the number of successful outcomes (e.g., "heads") in 10 independent trials.

## Codebyte Example

In this Codebyte example, we generate a single random value from a binomial distribution with 15 trials and a 60% chance of success per trial:

```codebyte/python
import numpy as np

# Define number of trials and probability
n = 15
p = 0.6

# Generate one random sample
sample = np.random.binomial(n, p)

print(sample)
# Returns single value output as size is not specified .
```

> **Note:** The result may vary with each execution, as the output is randomly sampled.