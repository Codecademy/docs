---
Title: '.randn()'
Description: 'Generates a NumPy array with samples from the standard normal distribution (mean 0, variance 1).'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Random'
  - 'Arrays'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.randn()`** function generates an array of random numbers sampled from the standard normal distribution (Gaussian distribution with mean `0` and variance `1`). It is commonly used in statistics and data analysis for creating synthetic data.

## Syntax

```pseudo
numpy.random.randn(d0, d1, ..., dn)
```

- `d0, d1, ..., dn`: Dimensions of the output array. If no arguments are provided, a single random float is returned.

## Example

In this example, the `.randn()` generates a 2x3 NumPy array filled with random numbers from the standard normal distribution:

```py
import numpy as np

# Generate a 2x3 array of random samples
samples = np.random.randn(2, 3)
print(samples)
```

We will get the following result:

```shell
[[-1.87894354 -0.05884307  1.0121173 ]
 [ 0.77652245  0.20369627 -0.97778735]]
```

## Codebyte Example

In the following codebyte example, a 1-dimensional array with 5 elements and a 3-dimensional array with shape 2x2x2 are generated using numpy.random.randn():

```codebyte/python
import numpy as np

# Generate a 1D array with 5 elements
arr_1d = np.random.randn(5)
print("1D array:\n", arr_1d)

# Generate a 3D array with shape 2x2x2
arr_3d = np.random.randn(2, 2, 2)
print("\n3D array:\n", arr_3d)
```
