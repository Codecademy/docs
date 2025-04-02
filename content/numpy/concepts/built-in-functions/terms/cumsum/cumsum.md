---
Title: '.cumsum()'
Description: 'Computes the cumulative sum of elements in an array along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In NumPy, the **`.cumsum()`** function computes the cumulative sum of elements in an array along a specified axis.

## Syntax

```pseudo
numpy.cumsum(a, axis=None, dtype=None, out=None)
```

**Parameters:**

- `a`: The array of elements to calculate the cumulative sum of.
- `axis` (Optional): Axis along which the cumulative sum is computed. Default is `None`, meaning the sum is computed over the flattened array.
- `dtype` (Optional): The datatype of the returned array. If `None`, it defaults to the input array’s `dtype`.
- `out` (Optional): Alternative output array in which to place the result.

**Return value:**

Returns a new NumPy array containing the cumulative sum of elements along the specified axis.

## Example

This example demonstrates how to compute the cumulative sum of a NumPy array using `.cumsum()`:

```py
import numpy as np

# Create an array
array = np.array([1, 2, 3, 4, 5])

# Compute the cumulative sum of the array
cumulative_sum = np.cumsum(array)

# Print out the original array
print("Original Array:", array)

# Print out the returned array
print("Cumulative Sum:", cumulative_sum)
```

This produces the following output:

```shell  
Original Array: [1 2 3 4 5]
Cumulative Sum: [ 1  3  6 10 15]
```

## Codebyte Example

Run the following codebyte example to better understand the `.cumsum()` function:

```codebyte/python
import numpy as np

array = np.array([[1, 2, 3], [5, 10, 15]])
print("Original array:")
print(array)

# Cumulative sum along axis 0 (cumulative sum by columns)
print("\nCumulative sum array along axis 0 (columns):")
print(np.cumsum(array, axis=0))

# Cumulative sum along axis 1 (cumulative sum by rows)
print("\nCumulative sum array along axis 1 (rows):")
print(np.cumsum(array, axis=1))
```
