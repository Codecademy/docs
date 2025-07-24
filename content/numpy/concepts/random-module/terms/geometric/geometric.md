---
Title: '.geometric()'
Description: 'Genereates random samples from the specified geometric distribution.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Numpy'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.geometric()`** function in `numpy.random` returns random samples from a geometric distribution based on a given probability of success, with the option to control the number of samples through the `size` parameter.

## Syntax

```pseudo
numpy.random.geometric(p, size=None)
```

**Parameters:**

- `p` (float or array_like): Probability of success for each trial. Must be in the range (0, 1].
- `size` (int or tuple of ints, optional): Output shape. If None, a single value is returned.

**Return Value:**

Returns random samples drawn from the geometric distribution, representing the number of trials until the first success.

The probability mass function of the geometric distribution is:

$$
f(k) = (1 - p)^{k - 1} \ p
$$

`p` in this case is the success probability of an individual trial.

## Example

The following code returns 10 random samples from a geometric distribution with the probability of success set to 0.35:

```py
import numpy as np

#  Setting the seed ensures reproducible results
np.random.seed(42)

results = np.random.geometric(p=0.35, size=10)
print(results)
```

The output of this code would be:

```shell
[2 7 4 3 1 1 1 5 3 3]
```

## Codebyte Example

This Codebyte simulates 100 coin flips with an unfair coin (35% chance of Heads), then counts how many trials resulted in a success on the first attempt:

```codebyte/python
import numpy as np

# Set the seed for reproduceability
np.random.seed(33)

# Simulate 100 trials
results = np.random.geometric(p=0.35, size=100)

# How many trials succeeded on the first attempt?
print((results == 1).sum())
```

Here:

- `p=0.35`: Probability of success (e.g., the coin landing on Heads).
- `size=100`: Generates 100 random samples.
- `np.random.geometric(p, size)`: Returns the number of trials needed to get the first success.

This example demonstrates how geometric distributions can model binary outcome processes like coin tosses where the goal is to measure how many attempts are needed to succeed once.
