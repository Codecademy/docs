---
Title: '.quantile()'
Description: 'Returns the qth quantile of an array along a specified axis.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Functions'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.quantile()`** function returns the qth quantile of an array along a specified axis. Quantiles are the division points that separate a data set into equal probabilities. For example, the 25th quantile is the point which 25% of the data set falls below.

## Syntax

```pseudo
numpy.quantile(a, q, axis=None, out=None, overwrite_input=False, method='linear', keepdims=False, weights=None)
```

Required Parameters:

`a`: The array from which to calculate the qth quantile.
`q`: The percentage of data (float) in `a` that falls below the qth quantile. For example, a value of .5 represents the median of that data.

Optional Parameters:

- `axis`: The axis or axes on which to calculate the quantile. `axis=0` works along the column and `axis=1` works along the row. If left as default, the quantile is calculated along a flattened version of `a`.
- `out`: Specifies a different array in which to place the result. It must have the same shape as the expected result.
- `overwrite_input`: Allows the function to modify the input array, `a`, during computation to reduce memory usage.
- `method`: The method used to estimate the quantile. The default is 'linear'. Other allowed values are 'inverted_cdf', 'averaged_inverted_cdf', 'closest_observation', 'interpolated_inverted_cdf', 'hazen', 'weibull', 'median_unbiased', and 'normal_unbiased'.
`keepdims`: When `True`, the output retains the original number of dimensions from the input, with the reduced dimensions having a size of one.
`weights`: An array of weights that correspond to the values in `a`. These weights determine the amount each of the values in `a` influences the quantile calculation. If used, this array must either correspond to the length of `a` (1-dimensional) or be the exact same dimensions as `a`. This parameter is only supported by the inverted_cdf method.

## Example

The following example creates and array and then uses the `.quantile()` to calculate various quantiles from the data:

```py
import numpy as np

a = np.array([[0,1,2],[3,4,5]])

print(np.quantile(a, .25))
# Computes the 25th quantile along a flattened axis

print(np.quantile(a, .5, axis=0))
# Computes the 50th quantile along the vertical axis

print(np.quantile(a, .5, axis=1))
# Computes the 50th quantile along the horizontal axis

print(np.quantile(a, .75, axis=1, keepdims=True))
# Computes the 75th quantile along the horizontal axis, while retaining the original dimensions of the input array
```

This produces the following output:

```shell
1.25
[1.5 2.5 3.5]
[1. 4.]
[[1.5] 
 [4.5]]
```

## Codebyte Example

The following example computes different quantiles for an input array, `a`:

```codebyte/python
import numpy as np

a = np.array([[0,2,4],[6,8,10],[12,14,16]])

print("Array:")
print(a)

print("\nThe 30th quantile of the array:")
print(np.quantile(a, .3))

print("\nThe 50th quantile along the horizontal axis (axis=1):")
print(np.quantile(a, .5, axis=1))

print("\nThe 50th quantile along the vertical axis (axis=0):")
print(np.quantile(a, .5, axis=0))

print("\nThe 90th quantile along the horizontal axis with keepdims=True:")
print(np.quantile(a, .9, axis=1, keepdims=True))
```