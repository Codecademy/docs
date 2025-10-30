---
Title: '.cumsum()'
Description: 'Computes the cumulative sum of array elements along a specified axis.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.cumsum()`** method in NumPy computes the cumulative sum of elements along a specified axis. If no axis is provided, it returns the cumulative sum of the flattened array.

## Syntax

```pseudo
ndarray.cumsum(axis=None, dtype=None, out=None)
```

**Parameters:**

- `axis` (Optional): Specifies the axis along which the cumulative sum is computed. If the axis is not specified, the cumsum is computed over the flattened array.
- `dtype` (Optional): Specifies the data type of the returned array. If not provided, it defaults to the data type of the input array. However, if the array has an integer type with a precision lower than that of the default platform integer, the default platform integer is used instead.
- `out` (Optional): An optional output array in which to store the resulting cumulative sum. The shape and buffer length must match that of the expected output but the type will be cast if necessary.

**Return value:**

Returns an array containing the cumulative sum of elements, or a reference to `out` if specified.

## Example 1: Computing Cumulative Sum with and without Axis

This example calculates the cumulative sum of a 2D array:

```py
import numpy as np

array = np.array([[1, 2, 3], [4, 5, 6]])

# Cumulative sum of flattened array
cumsum_flat = array.cumsum()

# Cumulative sum along rows (axis=1)
cumsum_axis1 = array.cumsum(axis=1)

# Cumulative sum along columns (axis=0)
cumsum_axis0 = array.cumsum(axis=0)

print("Flattened cumulative sum:\n", cumsum_flat)
print("\nCumulative sum along rows:\n", cumsum_axis1)
print("\nCumulative sum along columns:\n", cumsum_axis0)
```

The output of this code is:

```shell
Flattened cumulative sum:
[ 1  3  6 10 15 21]

Cumulative sum along rows:
[[ 1  3  6]
 [ 4  9 15]]

Cumulative sum along columns:
[[1 2 3]
 [5 7 9]]
```

Here:

- When no axis is specified, NumPy flattens the array before computing the cumulative sum.
- When an axis is specified, it computes the sum along the given dimension.

## Example 2: Using dtype and Output Array

In this example, a custom data type (`float`) is specified for the cumulative sum, and the result is stored in a preallocated output array:

```py
import numpy as np

array = np.array([1, 2, 3])

# Create an empty array for output
output_array = np.empty_like(array, dtype=float)

# Compute cumulative sum with custom dtype and output
array.cumsum(dtype=float, out=output_array)

print("Cumulative sum with float dtype:")
print(output_array)
```

The output of this code is:

```shell
Cumulative sum with float dtype:
[1. 3. 6.]
```

## Codebyte Example

In this example, the cumulative sum of a 2D array is computed along both axes using different data types for each:

```codebyte/python
import numpy as np

array = np.array([[1, 2], [3, 4]])

# Cumulative sum along rows (axis=1) with float dtype
cumsum_row = array.cumsum(axis=1, dtype=float)

# Cumulative sum along columns (axis=0) with int dtype
cumsum_col = array.cumsum(axis=0, dtype=int)

print("Cumulative sum along rows (float):")
print(cumsum_row)

print("\nCumulative sum along columns (int):")
print(cumsum_col)
```
