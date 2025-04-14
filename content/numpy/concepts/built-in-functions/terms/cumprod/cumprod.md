---
Title: '.cumprod()'
Description: 'Computes the cumulative product of elements in an array along a specified axis.'
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

In NumPy, the **`.cumprod()`** function computes the cumulative product of elements in an array along a specified axis.

## Syntax

```pseudo
numpy.cumprod(a, axis=None, dtype=None, out=None)
```

**Parameters:**

- `a`: The array of elements to calculate the cumulative product of.
- `axis` (Optional): Axis along which the cumulative product is computed. Default is `None`, meaning the product is computed over the flattened array.
- `dtype` (Optional): The datatype of the returned array. If `None`, it defaults to the input array's `dtype`.
- `out` (Optional): Alternative output array in which to place the result.

**Return value:**

Returns a new Numpy array containing the cumulative product of elements along the specified axis.

## Example

The following example demonstrates how to compute the cumulative product of elements using `.cumprod()`:

```py
import numpy as np

# Create an array
array = np.array([1, 2, 3, 4, 5])

# Compute the cumulative product of the array
cumulative_product = np.cumprod(array)

# Print out the original array
print("Original Array:", array)

# Print out the returned array
print("Cumulative Product:", cumulative_product)
```

```shell
Original Array: [1 2 3 4 5]
Cumulative Product: [ 1 2 6 24 120]
```

## Codebyte Example

Run the following codebyte example to better understand the `.cumprod()` function:

```codebyte/python
import numpy as np

# Create a sample array
data = np.array([2, 5, 3, 4])

# Calculate cumulative product
print("Original array:", data)
print("Cumulative product:", np.cumprod(data))

# Example with 2D Array
matrix = np.array([[2, 3], [4, 5]])
print("\n2D array:")
print(matrix)
print("\nCumulative product along columns (axis=0):")
print(np.cumprod(matrix, axis=0))
print("\Cumulative product along rows (axis=1):")
print(np.cumprod(matrix, axis=1))
```
