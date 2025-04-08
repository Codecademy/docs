---
Title: '.repeat()'
Description: 'Duplicates elements in an array along a given axis.'
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

The **`.repeat()`** function in NumPy is used to duplicate items in an array. It provides the option to specify the number of times each element appears, and whether that repetition happens across a specific axis or not. If no axis is mentioned, the array is flattened before repeating.

## Syntax

```pseudo
numpy.repeat(a, repeats, axis=None)
```

**Parameters:**

- `a`: The array to work with. This is where the elements come from.
- `repeats`: An `int` or array of `ints`. If an `int`, each element of `a` is repeated that many times. If an array, it must match the length of `a` (if `axis=None`) or the length of `a` along the specified axis.
- `axis` (Optional): Sets the direction for repeating.

**Return value:**

Returns a NumPy array with repeated elements. The shape of the result depends on the shape of `a`, the `repeats` value, and whether an `axis` is specified.

## Example 1: Repeating Elements Without Specifying the `axis` Parameter

Here's a simple example where each value in a one-dimensional array gets repeated twice:

```py
import numpy as np

# Create an array
arr = np.array([1, 2, 3])

# Repeat each element in the array 2 times
print(np.repeat(arr, 2))
```

The above code produces the following output:

```shell
[1 1 2 2 3 3]
```

## Example 2: Directional Repetition Using the `axis` Parameter

For multi-dimensional arrays, using the `axis` parameter controls which direction the repetition flows:

```py
import numpy as np

arr2d = np.array([[1, 2], [3, 4]])

# Repeat each element in the array 2 times along axis 0
print(np.repeat(arr2d, 2, axis=0))

# Repeat each element in the array 2 times along axis 1
print(np.repeat(arr2d, 2, axis=1))
```

The above code produces the following output:

```shell
[[1 2]
 [1 2]
 [3 4]
 [3 4]]
[[1 1 2 2]
 [3 3 4 4]]
```

## Codebyte Example: Repeating Each Element Three Times

This codebyte example repeats every item in an array three times in a row:

```codebyte/python
import numpy as np

# Create an array
arr = np.array([4, 5, 6])

# Repeat each element in the array 3 times
output = np.repeat(arr, 3)

print(output)
```
