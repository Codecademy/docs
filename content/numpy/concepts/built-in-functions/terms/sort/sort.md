---
Title: '.sort()'
Description: 'Sorts an array in ascending order along the specified axis and returns a sorted copy of the input array.'
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

In NumPy, the **`.sort()`** function sorts the elements of an array or matrix along a specified axis. It returns a new array with elements sorted in ascending order, leaving the original array unchanged. Sorting can be performed along different axes (such as rows or columns in a 2D array), with the default being along the last axis (`axis=-1`).

## Syntax

```pseudo
numpy.sort(a, axis=-1, kind=None, order=None)
```

- `a`: The array of elements to be sorted.
- `axis`: The axis along which to sort. If set to `None`, the array is flattened before sorting. The default is `-1`, which sorts along the last axis.
- `kind`: The sorting algorithm to use. The options are:
  - [`'quicksort'`](https://www.codecademy.com/resources/docs/general/algorithm/quick-sort): Default algorithm, a fast, comparison-based algorithm.
  - [`'mergesort'`](https://www.codecademy.com/resources/docs/general/algorithm/merge-sort): Stable sort using a divide-and-conquer algorithm.
  - [`'heapsort'`](https://www.codecademy.com/resources/docs/general/algorithm/heap-sort): A comparison-based sort using a heap.
  - `'stable'`: A stable sorting algorithm, typically mergesort.
- `order`: If `a` is a structured array, this specifies the field(s) to sort by. If not provided, sorting will be done based on the order of the fields in `a`.

## Example

The following example demonstrates how to use the `.sort()` function with various parameters:

```py
import numpy as np

arr = np.array([[3, 1, 2], [6, 4, 5]])

print(np.sort(arr))
print(np.sort(arr, axis=0))
print(np.sort(arr, axis=None))
```

This example results in the following output:

```shell
[[1 2 3]
 [4 5 6]]
[[3 1 2]
 [6 4 5]]
[1 2 3 4 5 6]
```

## Codebyte Example

Run the following codebyte example to better understand the `.sort()` function:

```codebyte/python
import numpy as np

arr = np.array([[23, 54, 19], [45, 34, 12]])

print("Original array:")
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
