---
Title: '.repeat()'
Description: 'Duplicates elements in an array along a given axis.'
Subjects:
  - 'NumPy'
  - 'Python'
  - 'Arrays'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
  - 'Repeat'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `.repeat()` function in NumPy is used to duplicate items in an array. You can choose how many times each element appears, and whether that repetition happens across a specific axis or not. If no axis is mentioned, the array is flattened first before repeating.

## Syntax

```python
numpy.repeat(a, repeats, axis=None)
```

Required Parameters:

- `a`: The array you want to work with—this is where the elements come from.
- `repeats`: Can be a single number or a list of numbers. If it's just one number, every element repeats that many times. If it's a list, it should match the number of elements along the specified axis or total items if the axis isn't used.

Optional Parameter:

- `axis`: *(optional)* Sets the direction for repeating. Without it, the array is treated as flat.

It returns a new array with repeated elements, and the final shape depends on the use of the `axis` parameter.

## Example

Here's a simple example where each value in a one-dimensional array gets repeated twice:

```python
import numpy as np

arr = np.array([1, 2, 3])
print(np.repeat(arr, 2))
```

**Output:**
```shell
[1 1 2 2 3 3]
```

## With Axis

For multi-dimensional arrays, using the `axis` argument controls which direction the repetition flows:

```python
arr2d = np.array([[1, 2], [3, 4]])

print(np.repeat(arr2d, 2, axis=0))
print(np.repeat(arr2d, 2, axis=1))
```

**Output:**
```shell
[[1 2]
 [1 2]
 [3 4]
 [3 4]]

[[1 1 2 2]
 [3 3 4 4]]
```

## Codebyte Example

This snippet repeats every item in a simple array three times in a row:

```python
import numpy as np

arr = np.array([4, 5, 6])
output = np.repeat(arr, 3)

print(output)
```

**Output:**
```shell
[4 4 4 5 5 5 6 6 6]
```