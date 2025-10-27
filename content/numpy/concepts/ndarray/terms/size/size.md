---
Title: 'size'
Description: 'Returns the number of elements in a NumPy array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Attributes'
  - 'NumPy'
  - 'Properties'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

NumPy’s **`size`** attribute is used to find the total number of elements in an array.

## Syntax

```pseudo
ndarray.size
```

**Parameters:**

`size` doesn’t take any parameters because it’s an attribute, not a method.

**Return value:**

Returns an integer representing the total number of elements in the array.

## Example 1: Getting the Size of an Array Using `size`

In this example, the code prints the total number of elements in the array:

```py
import numpy as np

np_array = np.array([[1, 2, 3], [4, 5, 6]])
print(np_array.size)
```

The output of this code is:

```shell
6
```

The array has 2 rows × 3 columns = 6 elements in total.

## Example 2: Comparing `.shape` and `.size`

In this example, `shape` displays the array’s dimensions, while `size` shows the total number of elements in the array:

```py
import numpy as np

arr = np.array([[10, 20, 30], [40, 50, 60]])
print("Shape:", arr.shape)
print("Size:", arr.size)
```

The output of this code is:

```shell
Shape: (2, 3)
Size: 6
```

`shape` returns the dimensions of the array, while `size` gives the total number of elements.

## Codebyte Example: Using `.size` in a NumPy Operation

In this example, `size` returns the total number of elements (12) in a reshaped 3×4 NumPy array:

```codebyte/python
import numpy as np

array = np.arange(12).reshape(3, 4)
print("Array:")
print(array)

print("Total elements:", array.size)
```
