---
Title: '.chisquare()'
Description: 'Generates a random selection of elements from a chi-squared distribution.'
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

In the random module of NumPy, the **`.chisquare()`** method generates a random sample from a chi-square distribution. It is commonly used in hypothesis testing and determining if observed data differs from expected results significantly.

## Syntax

```pseudo
numpy.random.chisquare(df, size=None)
```

**Parameters:**

- `df`: float or arrray-like of floats. Number of degrees of freedom of the chi-square distribution, must be > 0.
- `size` (Optional): The number of samples to draw. If `None`, a single sample is returned.

**Return value:**

In NumPy, the `.chisquare()` function returns a randomly drawn sample or an array of randomly drawn samples from the chi-square distribution with `df` degrees of freedom.

- If `size` is `None`, it returns a single randomly drawn value.
- If `size` is specified, it returns an array of random values, where the length of the array is equal to `size`.

## Example

The example below shows how to generate random values from a chi-square distribution with 2 degrees of freedom:

```py
import numpy as np

result = np.random.chisquare(2, size = 3)

print(result)
```

A possible output of this code can be:

```shell
[6.00571639 0.49778027 1.38101813]
```

The code above randomly draws 3 values from a chi-square distribution with 2 degrees of freedom.

## Codebyte Example

In this codebyte example, we sample 3 values from a chi-square distribution:

```codebyte/python
import numpy as np

degrees_freedom = 1

values = np.random.chisquare(degrees_freedom, size=3)

print(values)
```

> **Note:** The output may differ every time you run it, as the selection is random.