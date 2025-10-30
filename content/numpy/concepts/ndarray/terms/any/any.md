---
Title: 'any()'
Description: 'Tests whether any array element along a given axis evaluates to True.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Arrays'
  - 'Methods'
  - 'Boolean'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`any()`** method of a NumPy ndarray returns `True` if any element in the array evaluates to `True`. It performs a logical OR operation across specified array elements. In a boolean context, all non-zero numbers evaluate to `True`, while zero evaluates to `False`.

## Syntax

```pseudo
array.any(axis=None, out=None, keepdims=False, where=True)
```

- `axis`: Optional integer or tuple of integers specifying the axis or axes along which the logical OR operation is performed. The default `None` evaluates all elements in the array.
- `out`: Optional output array in which to place the result. It must have the same shape as the expected output.
- `keepdims`: Optional boolean that, when set to `True`, retains reduced axes as dimensions with size one in the result.
- `where`: Optional array of booleans specifying which elements to include in the check.

The method returns either a single boolean value or an ndarray of boolean values, depending on the `axis` parameter.

## Example

The following example demonstrates basic usage of the `any()` method with different array configurations:

```py
import numpy as np

# 1D array with non-zero values
arr1 = np.array([0, 1, 2, 3])
print(arr1.any())

# 1D array with all zeros
arr2 = np.array([0, 0, 0])
print(arr2.any())

# 2D array with axis parameter
arr3 = np.array([[1, 0, 0], [0, 0, 1], [0, 0, 0]])
print("Along axis 0:", arr3.any(axis=0))
print("Along axis 1:", arr3.any(axis=1))

# Boolean array
arr4 = np.array([[True, False], [False, False]])
print(arr4.any())
```

The output for the above code will be:

```
True
False
Along axis 0: [ True False  True]
Along axis 1: [ True  True False]
True
```

## Codebyte Example

The following codebyte example shows practical applications of the `any()` method with different scenarios:

```codebyte/python
import numpy as np

# Check if any element meets a condition
data = np.array([[5, 2, 8], [1, 0, 3]])
print("Any element > 7:", (data > 7).any())
print("Any element < 0:", (data < 0).any())

# Using axis parameter
print("\nAny positive in each column:")
print(data.any(axis=0))

print("\nAny positive in each row:")
print(data.any(axis=1))

# Special values
special_values = np.array([0, np.nan, np.inf])
print("\nWith NaN and inf:", special_values.any())

# Using keepdims parameter
result = data.any(axis=1, keepdims=True)
print("\nWith keepdims=True shape:", result.shape)
print(result)
```
