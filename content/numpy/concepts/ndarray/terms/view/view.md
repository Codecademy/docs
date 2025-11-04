---
Title: '.view()'
Description: "Creates a new view of an array's data without copying the underlying memory."
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Array'
  - 'Data View'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.view()`** method in NumPy creates a new array object that **views the data of the original array**. This means that both the new view and the original array share the exact same underlying memory block.

Because the data is shared, any modification made to the data in the view will directly affect the data in the original array, and vice-versa. The only thing that changes is the array's metadata (e.g., its data type or shape).

This is crucial for efficiency, as creating a view is much faster than creating a full copy of a large array.

## Syntax

The method is called directly on a NumPy array object.

```pseudo
array.view(dtype=None, type=None)
```

## Parameters

* `dtype` (data-type): The desired data type for the new array view. Changing the `dtype` does not change the underlying data bytes, only how they are interpreted.
* `type` (type): The desired type for the resulting object (e.g., `np.matrix`).

## Return Value

Returns a new `ndarray` object that shares the data of the original array.

## Example

This example demonstrates how modifying the data in the new array view (`view_array`) directly changes the data in the original array (`original_array`), because they share memory.

```python
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

**Output:**

```shell
Original Array before modification: [1 2 3 4 5]
View Array before modification: [1 2 3 4 5]

Original Array after modifying the view: [99  2  3  4  5]
```

## Codebyte

Use the Codebyte below to confirm that if you change a value in the original array, the view also changes.

```python
import numpy as np

original = np.array([10, 20, 30])
data_view = original.view()

# Modify the original array's second element
original[1] = 50 

print(f"Original array: {original}")
print(f"View array: {data_view}")
```