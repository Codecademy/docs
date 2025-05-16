---
Title: '.chisquare()'
Description: 'Generates random values based on a chi-square distribution with a given number of degrees of freedom.'
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

In the `random` module of NumPy, the **`.chisquare()`** method generates random samples from a chi-square distribution. It is frequently applied in hypothesis testing to assess whether observed data differ significantly from expected outcomes.

## Syntax

```pseudo
numpy.random.chisquare(df, size=None)
```

**Parameters:**

- `df` (float or array-like of floats): Degrees of freedom (must be positive). This parameter determines the shape of the chi-square distribution.
- `size` (Optional): The shape of the output array. If not specified, a single value is returned.

**Return value:**

In NumPy, the `.chisquare()` function returns a randomly drawn sample or an array of samples from the chi-square distribution with `df` degrees of freedom.

- If `size` is `None`, a single random value is returned.
- If `size` is specified, an array of random values is returned, with the shape of the array determined by `size`.

## Example: Generating Random Values from a Chi-Square Distribution in NumPy

The example below shows how to generate random values from a chi-square distribution with 2 degrees of freedom:

```py
import numpy as np

# Generate 3 random values from a chi-square distribution with 2 degrees of freedom
result = np.random.chisquare(2, size = 3)

print(result)
```

A possible output of this code can be:

```shell
[6.00571639 0.49778027 1.38101813]
```

This code randomly draws 3 values from a chi-square distribution with 2 degrees of freedom.

## Codebyte Example

In this Codebyte example, we sample 3 values from a chi-square distribution with 1 degree of freedom:

```codebyte/python
import numpy as np

# Set degrees of freedom
degrees_freedom = 1

# Generate 3 random values from the chi-square distribution
values = np.random.chisquare(degrees_freedom, size=3)

print(values)
```

> **Note:** The output may differ at each execution, as the selection is random.
