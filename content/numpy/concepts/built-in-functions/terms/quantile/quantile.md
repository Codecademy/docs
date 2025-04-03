---
Title: '.quantile()'
Description: 'Calculates the Qth quantile of the given data.'
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

The **`.quantile()`** function returns the qth quantile of the given data along a specified axis. Quantiles are used in statistics to divide the dataset into equal parts. The qth quantile is the value below which q percent of the data falls. For example, the 0.5 quantile is the value greater than exactly 50 percent of the data. The 0.5 quantile is the same as the 50th percentile and equivalent to the median.

## Syntax

```pseudo
numpy.quantile(a, q, axis=None, out=None, overwrite_input=False, method='Linear', keepdims=False, weights=None)
```

Required Parameters:

- `a`: The input data from which the quantile is to be calculated.
- `q`: The list of probabilities representing the quantiles to be calculated. The list must be between 0 and 1 inclusive.

Optional Parameters:

- `axis`: The axis along which the quantile is to be calculated. If not specified, the quantile is calculated along a flattened version of `a`.
- `out`: The output array that has the same shape as the output of the function.
- `overwrite_input`: If `True`, this allows calculations to be performed on the input array, `a`.
- `method`: Defines the method used to calculate the percentile. Other than 'Linear', it can be set to 'inverted_cdf', 'averaged_inverted_cdf', 'closest_observation', 'interpolated_inverted_cdf', 'hazen', 'weibull', 'median_unbiased' and 'normal_unbiased'.
- `keepdims`: If `True`, the axes that are reduced when calculating the quantiles are kept in the result with dimensions of size one.
- `weights`: An array of weights associated with thr values in `a`. Each value in `a` contributes to the quantile according to its associated weight.

Returns:

- If `q` is a single probability and `axis=None`, the function returns a single value representing the qth quantile of all the values in `a`.
- If `q` is an array, the function returns an array where each element contains a quantile corresponding to the values specified in `q`.
- If `axis` is given, the function calculates the quantiles of the values along the specified axes.

## Example

The following example creates an array and then uses `.quantile()` to calculate various quantiles from the data:

```py
import numpy as np

a = np.array([[1,2,3],[4,5,6]])

print(np.quantile(a,0.5))
print(np.quantile(a,0.5,axis=0))
print(np.quantile(a,[0.5,0.75]))
print(np.quantile(a,[0.50,0.75],axis=1))
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

The following example calculates different quantile values for the given array, `a`:

```codebyte/python
import numpy as np

a = np.array([[1,2,3],[4,5,6]])

quantile_50 = np.quantile(a,0.5)
quantile_75_row = np.quantile(a,0.75,axis=1)
quantile_75_column = np.quantile(a,0.75,axis=0)
quantile_multiple = np.quantile(a,[0.50,0.75,0.90])

print("The 0.5 quantile of all the data is:", quantile_50)
print("The 0.75 quantile along each row is:", quantile_75_row)
print("The 0.75 quantile along each column is:", quantile_75_column)
print("The 0.5, 0.75 and 0.95 quantiles are:", quantile_multiple)
```
