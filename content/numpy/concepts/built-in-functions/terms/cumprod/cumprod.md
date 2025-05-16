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

In NumPy, the **`.cumprod()`** function computes the cumulative product of elements in an array along a specified axis. Each element in the result is the product of all preceding elements (including the current one) along the chosen axis.

## Syntax

```pseudo
numpy.cumprod(a, axis=None, dtype=None, out=None)
```

**Parameters:**

- `a`: Input array for which the cumulative product is to be calculated.
- `axis` (Optional): Axis along which the cumulative product is computed. Default is `None`, the input is flattened.
- `dtype` (Optional): The data type of the output array. Defaults to the type of the input array.
- `out` (Optional): Alternative output array to place the result. If provided, it must have the same shape as the expected output.

**Return value:**

Returns a NumPy array containing the cumulative product of elements along the specified axis.

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

The code produces the following output:

```shell
Original Array: [1 2 3 4 5]
Cumulative Product: [ 1 2 6 24 120]
```

## Codebyte Example

Run this interactive code example to see how `.cumprod()` works for both 1D and 2D arrays with axis variation:

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
print("\nCumulative product along rows (axis=1):")
print(np.cumprod(matrix, axis=1))
```
