---
Title: '.nonzero()'
Description: 'Returns the indices of the non-zero values in a given array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.nonzero()`** function identifies and returns the indices of the non-zero elements in a NumPy array. This function is commonly used in data preprocessing and analysis to filter out or extract meaningful, non-zero elements from datasets. It is also valuable in sparse matrix operations and machine learning workflows, where zero values often represent missing, default, or irrelevant data that needs to be handled separately.

## Syntax

```psuedo
numpy.nonzero(a)
```

**Parameters:**

- `a`: The input array.

**Return value:**

The `.nonzero()` function returns a tuple of multiple arrays, where each array represents a particular dimension of the input array.

## Example 1: Using `.nonzero()` on a 1D Array

This example demonstrates how to find the non-zero indices of a one-dimensional NumPy array and print the array of the non-zero values:

```py
import numpy as np

# Create a 1D array
array1 = np.array([0, 1, 0, 2, 3, 0, 0, 4, 0, 5])

# Compute the indices of the non-zero values and then the array of the non-zero values
nonzero_indices = np.nonzero(array1)
no_zero_array1 = array1[nonzero_indices]

print("Array:", array1)
print("Non-zero Indices:", nonzero_indices)
print("Non-zero Values:", no_zero_array1)
```

The output for this example will be:

```shell
Array: [0 1 0 2 3 0 0 4 0 5]
Non-zero Indices: (array([1, 3, 4, 7, 9]),)
Non-zero Values: [1 2 3 4 5]
```

## Example 2: Using `.nonzero()` on a 2D Array

This example demonstrates how to find the non-zero indices of a two-dimensional NumPy array and print the array of the nonzero values:

```py
import numpy as np

# Create a 2D array
array2 = np.array([[1, 2], [0, 3]])

# Compute the indices of the non-zero values and then the array without the zeros
nonzero_indices = np.nonzero(array2)
no_zero_array2 = array2[nonzero_indices]

print("Array:", array2)
print("Non-zero Indices:", nonzero_indices)
print("Non-zero Values:", no_zero_array2)
```

The outut for this example will be:

```shell
Array: [[1 2]
 [0 3]]
Non-zero Indices: (array([0, 0, 1]), array([0, 1, 1]))
Non-zero Values: [1 2 3]
```
