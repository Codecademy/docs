---
Title: 'NumPy ndarray - copy()'
Description: 'Creates a new, independent copy of a NumPy ndarray.'
Subjects: # Note: Verify/Update these based on Codecademy/docs/documentation/subjects.md
  - 'NumPy'
  - 'Python'
  - 'Data Science' 
Tags: # Note: Verify/Update these based on Codecademy/docs/documentation/tags.md
  - 'Arrays'
  - 'Methods'
  - 'Copying'
CatalogContent: # Optional: Add relevant Codecademy course/path slugs if known
# - 'learn-numpy' 
# - 'paths/data-science'
---

Creates a new, independent copy of a NumPy array (`ndarray`). Unlike simple assignment (which creates a *view* sharing the same underlying data), the **`copy()`** method ensures that modifications to the new array do not affect the original array, and vice versa. This is essential when you need to manipulate an array while preserving the original data.

## Syntax

```py
new_array = original_array.copy(order='C')
```
**Parameters**
- `order` : {'C', 'F', 'A', 'K'}, optional Controls the memory layout of the copy.

    - `'C'` (default): C-style (row-major) order.

    - `'F'`: Fortran-style (column-major) order.

    - `'A'`: Any order (Fortran if original_array is Fortran contiguous, C otherwise).

    - `'K'`: Keep the memory layout of original_array.

**Return Value**
- Returns a new `ndarray` object which is a copy of the original array.

## Example
The following example demonstrates the difference between assigning an array (creating a view) and using copy() to create an independent copy.

```py
import numpy as np

# Original array
original = np.array([10, 20, 30])
print(f"Original array: {original}")

# Assignment creates a view (deep copy, shares data)
view = original
view[0] = 111 # Modify the view
print(f"Original after modifying view: {original}") 
# Output shows original is changed!
# Reset original for clarity
original = np.array([10, 20, 30])

# copy() creates an independent copy
copied_array = original.copy()
copied_array[0] = 999 
# Modify the copy
print(f"Original after modifying copy: {original}") 
# Output shows original is unchanged!
print(f"Copied array: {copied_array}")
```
Output of the above example:

```shell
Original array: [10 20 30]
Original after modifying view: [111 20 30]
Original after modifying copy: [10 20 30]
Copied array: [999 20 30]
```

## Codebyte Example: Copying a 2D array using copy()
This example shows copy() in action with a 2D array. It modifies the copy and leaves the original untouched, as a Deep Copy. 

```codebyte/python
import numpy as np

# Create the original 2D array
original_arr = np.arange(4).reshape((2, 2))
print(f"Original array:\n{original_arr}")

# Create an independent copy
copied_arr = original_arr.copy()

# Modify an element in the copy
copied_arr[0, 1] = 50
print(f"\nCopied array after modification:\n{copied_arr}")

# Verify the original array is unaffected
print(f"\nOriginal array (still unchanged):\n{original_arr}")
```