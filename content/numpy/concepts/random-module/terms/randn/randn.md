---
Title: '.randn()'
Description: 'Generates an array containing random numbers from the standard normal distribution.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'NumPy'
  - 'Random'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.randn()`** function generates an array of random numbers sampled from the [standard normal distribution](https://www.codecademy.com/article/standard-normal-distribution-explained-with-real-world-examples) (a Gaussian distribution where mean = 0 and standard deviation = 1). It is commonly used in statistics, machine learning, and data analysis for creating synthetic data and testing algorithms.

## Syntax

```pseudo
numpy.random.randn(d0, d1, ..., dn)
```

**Parameters:**

- `d0, d1, ..., dn`: Dimensions of the output array. If no arguments are provided, the `.randn()` function returns a single random float sampled from the standard normal distribution.

**Return value:**

- The `.randn()` function returns an [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) of shape (`d0, d1, ..., dn`) filled with random samples from the standard normal distribution.

## Example

In this example, the `.randn()` generates a 2x3 NumPy array filled with random numbers from the standard normal distribution:

```py
import numpy as np

# Generate a 2x3 array of random samples
samples = np.random.randn(2, 3)

# Print the result
print(samples)
```

A possible output of this code can be:

```shell
[[-1.87894354 -0.05884307  1.0121173 ]
 [ 0.77652245  0.20369627 -0.97778735]]
```

> **Note:** The output may change each time the code is run because the values are generated randomly from a standard normal distribution.

## Codebyte Example

This codebyte generates a 1-dimensional array with 5 elements and a 3-dimensional array with shape (2, 2, 2) using `numpy.random.randn()`:

```codebyte/python
import numpy as np

# Generate a 1D array with 5 elements
arr_1d = np.random.randn(5)
print("1D array:\n", arr_1d)

# Generate a 3D array with shape 2x2x2
arr_3d = np.random.randn(2, 2, 2)
print("\n3D array:\n", arr_3d)
```
