---
Title: '.histogram()'
Description: 'Computes the histogram of an array, summarizing the distribution of its values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Linear Algebra'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.histogram()`** function in NumPy is used to compute the frequency distribution of data by dividing values into bins and counting how many fall into each bin. It’s commonly used in data analysis, statistical modeling, and visualization to understand the distribution of numerical data.

## Syntax

```pseudo
numpy.histogram(a, bins=10, range=None, density=None, weights=None)
```

**Parameters:**

- `a` (array_like): Input data. The histogram is computed over the flattened array.
- `bins` (int, sequence of scalars, or str, optional):
  - If an `int`, it defines the number of equal-width bins (default is `10`).
  - If a `sequence`, it specifies the bin edges.
  - If a `str`, it defines the method used to calculate the optimal bin width.
- `range` (tuple, optional): Lower and upper range of the bins. Defaults to `(a.min(), a.max())`.
- `density` (bool, optional):
  - If `False`, returns the count of samples in each bin.
  - If `True`, returns the probability density function.
- `weights` (array_like, optional): Weights for each value in `a`. If `density=True`, weights are normalized.

**Return value:**

The `.histogram()` function in NumPy returns a tuple of two arrays:

```psuedo
(hist, bin_edges)
```

- `hist`: A NumPy array of counts or probability densities (depending on the `density` parameter). It tells you how many elements from the input fell into each bin.
- `bin_edges`: A NumPy array of bin edge values. It has one more element than `hist`, representing the edges of the bins, including the rightmost edge.

## Example

The code below demonstrates the use of `.histogram()` in NumPy:

```py
import numpy as np
#Creating a numpy histogram from array and set bins
a = np.histogram([1, 2, 1, 3, 2, 4, 3, 0, 0, 5], bins=[0, 1, 2, 3, 4, 5, 6])

# Print the above histogram
print(str(1)  + ':' + str(a))

# Creating a numpy histogram with numpy.arange and setting density as True
b = np.histogram(np.arange(4), bins=np.arange(5), density=True)

# Print the histogram
print(str(2) + ':' + str(b))
```

This producea the following output:

```shell
1:(array([2, 2, 2, 2, 1, 1]), array([0, 1, 2, 3, 4, 5, 6]))

2:(array([0.25, 0.25, 0.25, 0.25]), array([0, 1, 2, 3, 4]))
```
