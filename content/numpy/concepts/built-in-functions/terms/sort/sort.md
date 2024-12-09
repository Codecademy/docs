---
Title: '.sort()'
Description: 'Sorts an array or matrix along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.sort()`** function sorts the elements of an array or matrix along a specified axis. It modifies the original array and does not return a new one.

## Syntax

```pseudo
numpy.sort(a, axis, kind, order)
```

`.sort()` provides the following arguments:

- `a`: The array of elements to be sorted

- `axis`: This specifies the axis along which to sort the array. int or None, optional, default=-1
axis=-1: Sorts along the last axis (default for multi-dimensional arrays).
axis=0: Sorts along the first axis (columns).
axis=1: Sorts along the second axis (rows).
- `None`: Flattens the array and sorts it globally, ignoring the shape of the array.
- `kind`: {‘quicksort’, ‘mergesort’, ‘heapsort’, ‘stable’}, optional, default=’quicksort’
'quicksort': Fast, divide-and-conquer algorithm.
'mergesort': Stable sorting algorithm that uses merge sort.
'heapsort': Less efficient but guaranteed to be in-place.
'stable': A stable version of quicksort.
- `order`: This parameter is used when a is a structured array (i.e., an array with fields). It specifies the field or fields to sort by. If a is not a structured array, this parameter is ignored. str or list of str, optional

## Example 

The following examples demonstrate the use of `.sort()` with different parameters.

```py
import numpy as np

arr = np.array([[3, 1, 2], [6, 4, 5]])

print(np.sort(arr))
print(np.sort(arr, axis=0))
print(np.sort(arr, axis=None))
```

This produces the following output:

```shell
[[1 2 3]
 [4 5 6]]

[[3 1 2]
 [6 4 5]]

[1 2 3 4 5 6]
```

## Codebyte Example

Run the below codebyte to better understand the `.sort()` function:

```codebyte/python
import numpy as np

arr = np.array([[23, 54, 19], [45, 34, 12]])

print("Original array: ")
print(arr)

# Sort along axis 0 (sort by columns)
print("\nSorted array along axis 0 (columns):")
print(np.sort(arr, axis=0))

# Sort along axis 1 (sort by rows)
print("\nSorted array along axis 1 (rows):")
print(np.sort(arr, axis=1))

print("\nSorted array (flattened):")
print(np.sort(arr, axis=None))

```