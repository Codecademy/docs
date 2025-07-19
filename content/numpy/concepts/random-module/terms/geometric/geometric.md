---
Title: '.geometric()'
Description: 'Genereates random samples from the specified geometric distribution.'
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Data'
  - 'Numpy'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.geometric()`** function in the numpy.random module generates random samples from the specified geometric distribution, where `p` is the probability of success of an individual trial, and `size` is the shape of the output array.

## Syntax

```pseudo
numpy.random.geometric(p, size=None)
```

**Parameters:**

- `p` (float or array_like of floats): The probability of success of an individual trial
- `size` (int or tuple of ints, optional): Specifies output shape. Default is `None`, a single value is returned if `p` is a scalar. If integer or tuple returns an array of that shape.

**Return Value:**

Returns random samples from the geometric distribution in the shape specified by `size`.

The probability mass function of the geometric distribution is:

```
$f(k) = (1-p) \exp(k-1) p,$
```

where `p` is the probability of success of an individual trial.

## Example

The following code returns 10 random samples from a geometric distribution with probability of success set to 0.35. Setting the seed ensures reproduceable results.

```py
import numpy as np
np.random.seed(42)
results = np.random.geometric(p=0.35, size=10)
print(results)
```

The output of this code would be:

```shell
[2 7 4 3 1 1 1 5 3 3]
```

## Codebyte Example

This codebyte simulates 100 coin flips on an unfair coin, 35% chance of Heads, then calculates how many trials succeeded on the first attempt when calling only Heads.

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

- `p=0.35` is the chance of success, 35% chance of the coin coming up Heads
- `size=100' generates 100 trials
- `np.random.geometric(p, size)` creates the random samples from the specified distribution

This example demonstrates how geometriuc distributions can be used to model real-world scenarios with only 2 possible outcomes.
