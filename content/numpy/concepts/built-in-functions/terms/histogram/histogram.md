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
- `bins` : int or sequence of scalars or str and it is optional. 