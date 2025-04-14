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

This produces the following output:

```shell
1:(array([2, 2, 2, 2, 1, 1]), array([0, 1, 2, 3, 4, 5, 6]))

2:(array([0.25, 0.25, 0.25, 0.25]), array([0, 1, 2, 3, 4]))
```

## Codebyte Example

The following codes show the use of numpy `.histogram()` to display an array in a histogram display

```codebyte/python
import numpy as np

# create an array of data
data = np.array([12, 14, 18, 19, 25])

# create bin to set  the interval
bin = [0, 10, 20, 30]

#create histogram
graph_1 = np.histogram(data, bin)

print(graph_1)

# create a random integer between 1 and 10
p = random.randint(1, 10)

# create a histogram with the number with default bin
graph_2 = np.histogram(p)

print(graph_2)


# create a sample 10 elements between 1 and 20
data = np.random.random_integers(1, 20, 1000)

#create bins with linspace with in 2 intervals
bins = np.linspace(0, 20, 2, dtype = int)

#create histogram with density set as True
graph_3 = np.histogram(data, bins, density = True)

print(graph_3)
```