---
Title: 'Descriptive Stats'
Description: 'Summarizes and describes the essential features of a dataset.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Functions'
  - 'Math'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In SciPy, **descriptive statistics** refers to summarizing and analyzing a dataset's key characteristics. It helps summarize essential properties such as central tendency, variability, and distribution shape.

The **`.describe()`** function in the `scipy.stats` module is used to calculate common descriptive statistics of a given array, such as:

- Number of observations (`nobs`)
- Minimum and maximum values (`minmax`)
- Mean (`mean`)
- Variance (`variance`)
- Skewness (`skewness`)
- Kurtosis (`kurtosis`)

## Syntax

```pseudo
stats.describe(a, axis=0, ddof=1, bias=True, nan_policy='propagate')
```

- `a`: The input data to describe.
- `axis` (Optional): The axis along which to compute the descriptive statistics (default is `0`). If set to `None`, the statistics are calculated for the whole array.
- `ddof` (Optional): Delta Degrees of Freedom for calculating variance (default is `1`).
- `bias` (Optional): If set to `False`, it corrects the skewness and kurtosis calculations for statistical bias.
- `nan_policy` (Optional): Defines the handling method to use when the input contains NaN. The options include:
  - `propagate` (Default): Returns NaN.
  - `raise`: Raises an error.
  - `omit`: Ignores NaN values and performs the calculations.

## Example

The following example demonstrates the usage of the `.describe()` function to calculate the descriptive statistics of a given array:

```py
import numpy as np
from scipy import stats

# Define an array
arr = np.array([12, 23, 34, 45, 56])

# Calculate the descriptive statistics of the array
res = stats.describe(arr)

# Print the result
print(res)
```

The above code produces the following output:

```shell
DescribeResult(nobs=5, minmax=(12, 56), mean=34.0, variance=302.5, skewness=0.0, kurtosis=-1.3)
```

## Codebyte Example

The following codebyte example demonstrates the usage of the `.describe()` function to calculate the descriptive statistics of a given array:

```codebyte/python
import numpy as np
from scipy import stats

# Define an array
arr = np.array([5, 10, 20, 40, 80])

# Calculate the descriptive statistics of the array
res = stats.describe(arr)

# Print the result
print(res)
```
