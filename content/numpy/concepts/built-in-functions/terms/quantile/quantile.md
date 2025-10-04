---
Title: '.quantile()'
Description: 'Computes the qth quantile of the input array along the specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.quantile()`** function in NumPy returns the qth quantile of an array along a specified axis. Quantiles are the division points that separate a data set into equal probabilities. For example, the 25th quantile is the point which 25% of the data set falls below.

## Syntax

```pseudo
numpy.quantile(a, q, axis=None, out=None, overwrite_input=False, method='linear', keepdims=False, weights=None)
```

**Parameters:**

- `a`: The input array containing the data to compute the quantiles from.
- `q`: The quantile(s) to compute. This can be a float or array-like of floats between `0` and `1`, where `0.5` represents the median.
- `axis` (Optional): The axis or axes on which to calculate the quantile. `axis=0` computes along columns, and `axis=1` computes along rows. If set to `None` (default), the input is flattened before computation.
- `out` (Optional): Specifies a different array in which to place the result. It must have the same shape as the expected result.
- `overwrite_input` (Optional): If `True`, the input array `a` may be modified to save memory. Default is `False`.
- `method` (Optional): The method used to calculate the quantile. The default is `'linear'`. Valid options include: `'inverted_cdf'`, `'averaged_inverted_cdf'`, `'closest_observation'`, `'interpolated_inverted_cdf'`, `'hazen'`, `'weibull'`, `'median_unbiased'`, and `'normal_unbiased'`.
  `keepdims` (Optional): If `True`, the reduced axes are retained with size one, maintaining the number of dimensions in the output.
  `weights` (Optional): An array of weights corresponding to values in `a`, used to influence the quantile calculation. This parameter is only supported by the `'inverted_cdf'` method. The shape of `weights` must either match `a`, or be 1-dimensional with a length equal to `a` when flattened.

**Return value:**

The `.quantile()` function returns the qth quantile(s) of an array as a NumPy array ([`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray)) or a scalar (`float64`) if the result is a single value.

## Example: Computing multiple quantiles from data

The following example creates an array and then uses `.quantile()` to calculate various quantiles from the data:

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

This code produces the following output:

```shell
1.25
[1.5 2.5 3.5]
[1. 4.]
[[1.5]
 [4.5]]
```

## Codebyte Example

The following codebyte example computes various quantiles for an input array, `a`:

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
