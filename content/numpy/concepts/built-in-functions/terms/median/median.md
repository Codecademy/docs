---
Title: '.median()'
Description: 'Returns the median of the elements in a given array.'

Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.median()`** function calculates the median value of elements in an array along the specified axis.

## Syntax

```pseudo
numpy.median(a, axis, out, keepdims)
```

The `a` parameter is required and represents the array of elements to calculate the median from. All other parameters are optional.

Parameters of the `.median()` function:

- `a`: (Input) The array of elements to calculate the median from.
- `axis`: (Default = None) An int or tuple of ints specifying the axis/axes along which to calculate the median. By default it considers the array to be flattened (Works on all axes). Axis = 0 works along the column and axis = 0 works along the row.
- `out`: (Default = None) A different array to place the result. It must have the same shape as the expected result.
- `keepdims`: (Default = False) A boolean; if `True` will keep reduced axes in the result as dimensions with size one.

## Example

The following example creates an array then applies a few `.median()` operations, and returns each result to the console.

```py
import numpy as np

a = np.array([[0,1,2],[3,4,5]])

print(np.median(a))
print(np.median(a, axis=0))
print(np.median(a, axis=1))
```

This produces the following output:

```shell  
2.5
[1.5 2.5 3.5]
[1. 4.]
```

## Codebyte Example

The following example creates a 2-dimensional array composed of random integers (between 1 and 20). Then uses `.median()` to calculate the median, with various values of the `axis` parameter.

```codebyte/python
import numpy as np

randarr = np.random.randint(1,20, size=(2,4))
print("Your randomised array is:")
print(randarr)

print("The median value of the flattened array is:")
print(np.median(randarr))

print("The median of the first axis (axis=0) is:")
print(np.median(randarr, axis=0))

print("The median of the second axis (axis=1) is:")
print(np.median(randarr, axis=1))

print("The median of the second axis (axis=1) with keepdims=True is:")
print(np.median(randarr, axis=1, keepdims=True))
```
