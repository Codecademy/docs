---
Title: '.percentile()'
Description: 'Calculates the X-th percentile of the data'
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
  - 'paths/computer-science'
---

The **`.percentile()`** function returns the Xth percentile of data along a specified axis. 

## Syntax

```pseudo
numpy.percentile(a, X, axis, out, overwrite_input, method, keepdims)
```

Required Parameters:

- `a`: the input data from which the percentile is calculated
- `X`: a single number of list of numbers representing the percentiles to be calculated

Optional Parameters include:
- `axis`: The axis along which the percentile is calculated. If not specified, the percentile is calculated along a flattened version of `a`. Deafault: None
- `out`: Optional output array that has the same shape as the output of the function. Default: None
- `overwrite_input`: If True, this allows calculations to be performed on the input array, a. Default: False
- `method`: defines the method used to calculate the percentile. Default: 'Linear'. Other options: 'inverted_cdf', 'averaged_inverted_cdf',
           'closest_observation', 'interpolated_inverted_cdf', 'hazen', 'weibull', 'median_unbiased', 'normal_unbiased'
- `keepdims`: If True, the axes that are reduced when calculating the percentile are kept in the result with dimensions of size one. Default: False

Returns:
- If `X` is a single value and `axis`=None, the function returns a single value representing the Xth percentile of all the values in `a`.
- If `X` is an array, the function returns an array where each element contains a percentile corresponding to the values specfied in `X`.
- If `axis` is given, the function calculates the percentiles of the values along the specified axes.

## Example

The following example creates a numpy array and then uses `.percentile()` to calculate various percentiles from the data.

```py
import numpy as np

a = np.array([[1,2,3],[4,5,6]])

print(np.percentile(a,50))
print(np.percentile(b,50,axis=0))
print(np.percentile(b,[50,75]))
print(np.percentile(b,[50,75],axis=1))
```

This prints the following output:

```shell
3.5
[2.5, 3.5, 4.5]
[3.5 , 4.75]
[[2. , 5. ],[2.5, 5.5]]
```
