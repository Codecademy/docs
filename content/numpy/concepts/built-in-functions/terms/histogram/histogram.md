---
Title: '.histogram()'
Description: 'Compoutes the histogram of datasets.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Linear Algebra'
  - 'Arrays'
  - 'NumPy'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The numpy `.histogram()` allows the efficient generation of histogram from data sets. This function calculates the frequency of sample observations in a certain set of bins, which is vital for data analysis and understanding the distribution of data points.
## Syntax

```pseudo
numpy.histogram(a, bins=10, range=None, density=None, weights=None)
```

- `a` : array_like input data. The histogram is computed over the flattened array.
- `bins` : int or sequence of scalars or str and it is optional. If bins is an int, it defines the number of equal-width bins in the given range (10, by default). If bins is a sequence, it defines a monotonically increasing array of bin edges, including the rightmost edge, allowing for non-uniform bin widths.If bins is a string, it defines the method used to calculate the optimal bin width, as defined by *histogram_bin_edges*.
- `range` : The lower and upper range of the bins. If it is not provided, range is simply __(a.min(), a.max())__. The first elements should be less or equal to the second element. It affects the bins automatic bins computations.
- `density` : If *False*, the result is derives from the number of smaple in each bin. If *True*, the result is the value of the probability density function at the bin, normalized such that the integral over the range is 1.
- `weight` : An array of weights, of the same shape as `a`. Each value in `a` only contributes its associated weight towards the bin count (instead of 1).If `density` is True, the weights are normalized, so that the integral of the `density` over the range remains 1. 

## Example

The code below shows `.histogram()` used to show a histogram of a data set.

```py
```