---
Title: '.view()'
Description: "Returns a new view of the array's data without copying the underlying memory."
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Array'
  - 'Data'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.view()`** method in NumPy returns a new array object that views the same data as the original array. Both arrays share the same underlying memory block, meaning that any modification to the data in one will directly affect the other. Only the array’s metadata (such as data type or shape) may differ.

Creating a view is much faster and more memory-efficient than creating a copy, especially when working with large arrays.

## Syntax

```pseudo
ndarray.view([dtype][, type])
```

**Parameters:**

- `dtype` (data-type): The desired data type for the new array view. Changing the `dtype` changes how the data bytes are interpreted, not the data itself.
- `type` (type): The desired type for the resulting object (e.g., `np.matrix`).

**Return value:**

Returns a new `ndarray` object that shares the data of the original array.

## Example

In this example, modifying the data in the view (`view_array`) also changes the original array (`original_array`) because both share the same memory:

```py
import numpy as np

# Create the original array
original_array = np.array([1, 2, 3, 4, 5])

# Create a view of the original array
view_array = original_array.view()

print(f"Original Array before modification: {original_array}")
print(f"View Array before modification: {view_array}")

# Modify a single element in the view
view_array[0] = 99

print(f"\nOriginal Array after modifying the view: {original_array}")
```

The output of this code is:

```shell
Original Array before modification: [1 2 3 4 5]
View Array before modification: [1 2 3 4 5]

Original Array after modifying the view: [99  2  3  4  5]
```

## Codebyte Example

In this example, changing the original array also updates its view, since both reference the same data in memory:

```codebyte/python
import numpy as np
original = np.array([10, 20, 30])
data_view = original.view()
# Modify the original array's second element
original[1] = 50
print(f"Original array: {original}")
print(f"View array: {data_view}")
```
