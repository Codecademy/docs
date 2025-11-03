---
Title: 'max()'
Description: 'Returns the maximum value of elements along a specified axis or the largest element in the entire NumPy array.'
Subjects:
  - 'Python'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`max()`** function in NumPy returns the maximum value of elements along a specified axis in an array. If no axis is provided, it returns a single scalar value representing the most significant element in the entire array. NumPy arrays support efficient element-wise operations, and max() quickly identifies the maximum value across dimensions or within specific rows and columns.

When `axis=0`, the function returns a **one-dimensional array containing the maximum values from each column**.  
When `axis=1`, it returns a **one-dimensional array containing the maximum values from each row**.

## Syntax

```pseudo
numpy.ndarray.max(axis=None, out=None, keepdims=False, initial=<no value>, where=True)
```

**Parameters:**

- `axis` *(int or None)* — Axis or axes along which to operate.  
  - `0` **:** Operates vertically, comparing elements column by column. The result is a one-dimensional array containing the maximum values from each column.  
  - `1` **:** Operates horizontally, comparing elements row by row. The result is a one-dimensional array containing the maximum values from each row.  
  - `None` **:** Computes the maximum value over the entire array, regardless of dimensions, and returns a single scalar value representing the largest element.  

- `out` *(ndarray or None, optional)* — Output array where results will be stored.  
  - If an array (`ndarray`) is provided, the result of the `max()` operation is written directly into that array instead of creating and returning a new one.  
  - The provided array must have a shape and data type compatible with the result of the operation.  
  - If the shapes do not match or the array is not writable, NumPy raises a `ValueError`.  
  - Using `out` is memory-efficient, as it prevents allocating new arrays when performing large computations.  
  - If `None` (default), NumPy creates and returns a new array containing the result.  

- `keepdims` *(bool, optional)* — Determines whether the reduced dimensions are retained as dimensions of size one in the result.  
  - `True` **:** Keeps the reduced dimensions as size one, preserving the original array’s dimensionality. This is useful for maintaining compatibility during broadcasting or further operations.  
  - `False` *(default)* **:** Removes the reduced dimensions from the result, producing a smaller array.  

- `initial` *(scalar, optional)* **:** The minimum value used to start comparisons when computing the maximum.  
  - Acts as a baseline comparison value for the reduction operation.  
  - Ensures that even if all array elements are smaller than the `initial` value, the result will still be at least equal to `initial`.  
  - If `initial` is smaller than the largest element in the array, the actual maximum value is returned.  

- `where` *(array_like of bool, optional)* **:** Condition that selects which elements to include in the comparison.  
  - Only elements corresponding to `True` values in the `where` mask are considered when computing the maximum.  
  - Elements where the condition is `False` are ignored in the comparison.  
  - If `where` is not provided, all elements are included by default.  

**Returns:**

- *(ndarray or scalar)*, The return type depends on the input array and the value of the `axis` parameter.  
  - If an `axis` is specified (`0` or `1`), the method returns a **NumPy array (`ndarray`)** containing the maximum values computed along the specified axis.  
    - For `axis=0`, the result is a one-dimensional array of maximum values from each column.  
    - For `axis=1`, the result is a one-dimensional array of maximum values from each row.  
    - When `keepdims=True`, the reduced dimension is retained with size one, so the output maintains the same number of dimensions as the original array.  
  - If `axis=None`, the method flattens the array and returns a **single scalar value** representing the largest element in the entire array.  
  - If an `out` array is provided, the result is also stored directly in that array, and a reference to it is returned.  

> **Note:** When no axis is specified, the `max()` method returns a scalar value representing the overall maximum element in the array.  
> **Note:** The `max()` functionality can also be accessed using the top-level NumPy function `np.max(array, axis=None)`. Both approaches produce the same result, but `ndarray.max()` is the object-oriented method version, while `np.max()` is the functional interface that can operate on array-like objects.


## Example

Below are focused examples that demonstrate how each parameter of `ndarray.max()` works, followed by combinations and common pitfalls.

### Single-Parameter Examples

#### A) `axis`
```py
import numpy as np

arr = np.array([[2, 8, 5],
                [4, 1, 9]])

# Overall maximum (no axis).
# Computes the maximum value over the entire array,
# regardless of dimensions, and returns a single scalar value 
# representing the largest element.
print(arr.max())

# or

print(arr.max(axis=None))

# Both produces same results and are equivalent.
# Output
9

# Column-wise maxima (axis=0).
# Operates vertically, comparing elements column by column.
# The result is a one-dimensional array containing the maximum values
# from each column.
print(arr.max(axis=0))

# Output
[ 4 8 9 ]

# Row-wise maxima (axis=1).
# Computes the maximum value over the entire array, 
# regardless of dimensions, and returns a 
# single scalar value representing the largest element.
print(arr.max(axis=1))

# Output
[ 8 9 ]
```






