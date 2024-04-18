---
Title: '.percentile()'
Description: 'Calculates the Xth percentile of the given data.'
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

The **`.percentile()`** function returns the Xth percentile of the given data along a specified axis. Percentiles are used in statistics to measure the distribution of data. The Xth percentile is the value below which X percent of the data falls. For example, the 95th percentile is the value greater than exactly 95 percent of the data.

## Syntax

```pseudo
numpy.percentile(a, X, axis=None, out=None, overwrite_input=False, method='Linear', keepdims=False)
```

Required Parameters:

- `a`: The input data from which the percentile is to be calculated.
- `X`: The list of numbers representing the percentiles to be calculated.

Optional Parameters:

- `axis`: The axis along which the percentile is to be calculated. If not specified, the percentile is calculated along a flattened version of `a`.
- `out`: The output array that has the same shape as the output of the function.
- `overwrite_input`: If `True`, this allows calculations to be performed on the input array, `a`.
- `method`: Defines the method used to calculate the percentile. Other than 'Linear', it can be set to 'inverted_cdf', 'averaged_inverted_cdf', 'closest_observation', 'interpolated_inverted_cdf', 'hazen', 'weibull', 'median_unbiased' and 'normal_unbiased'.
- `keepdims`: If `True`, the axes that are reduced when calculating the percentile are kept in the result with dimensions of size one.

Returns:

- If `X` is a single value and `axis=None`, the function returns a single value representing the Xth percentile of all the values in `a`.
- If `X` is an array, the function returns an array where each element contains a percentile corresponding to the values specified in `X`.
- If `axis` is given, the function calculates the percentiles of the values along the specified axes.

## Example

The following example creates an array and then uses `.percentile()` to calculate various percentiles from the data:

```py
import numpy as np

a = np.array([[1,2,3],[4,5,6]])

print(np.percentile(a,50))
print(np.percentile(a,50,axis=0))
print(np.percentile(a,[50,75]))
print(np.percentile(a,[50,75],axis=1))
```

This prints the following output:

```shell
3.5
[2.5 3.5 4.5]
[3.5  4.75]
[[2.  5. ]
 [2.5 5.5]]
```

## Codebyte Example

The following example calculates different percentile values for the given array, `a`:

```codebyte/python
import numpy as np

a = np.array([[1,2,3],[4,5,6]])

percentile_50 = np.percentile(a,50)
percentile_75_row = np.percentile(a,75,axis=1)
percentile_75_column = np.percentile(a,75,axis=0)
percentile_multiple = np.percentile(a,[50,75,90])

print("The 50th percentile of all the data is:", percentile_50)
print("The 75th percentile along each row is:", percentile_75_row)
print("The 75th percentile along each column is:", percentile_75_column)
print("The 50th, 75th and 90th percentiles are:", percentile_multiple)
```
