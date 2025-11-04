---
Title: '.repeat()'
Description: 'Returns the repeated elements of an array.'
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

The **`.repeat()`** method of a NumPy `ndarray` returns a new array where each element is repeated a specified number of times. It can repeat all elements in a flattened array or along a particular axis in multidimensional arrays.

## Syntax

```pseudo
ndarray.repeat(repeats, axis=None)
```

**Parameters:**

- `repeats`: Integer or array of integers. Specifies how many times each element should be repeated. If an array, it must match the length of the axis being repeated.
- `axis` (Optional): The axis along which the values are to be repeated. If `None`, the array is flattened before repetition.

**Return value:**

A new array with repeated elements. The resulting shape depends on the `repeats` value and whether an axis is specified.

## Example

The following example creates an `ndarray`, then uses `.repeat()` to repeat the elements:

```py
import numpy as np

a = np.array([1])
print("a repeated:", a.repeat(3))

b = np.array([[1,2],[5,6]])
print("b repeated:", b.repeat(2))

c = np.array([[1,2],[0,-1]])
print("c repeated:", c.repeat(2,axis=0))
```

The above code generates the following output:

```shell
a repeated: [1 1 1]
b repeated: [1 1 2 2 5 5 6 6]
c repeated: [[ 1  2]
 [ 1  2]
 [ 0 -1]
 [ 0 -1]]
```

## Codebyte Example

Run the following codebyte example to understand the usage of the `.repeat()` method:

```codebyte/python
import numpy as np

a = np.array([-8])
print("a repeated 3 times:", a.repeat(3))

b = np.array([[1, 2, -9], [5, 6, 0]])
print("\nb repeated (flattened):", b.repeat(2))

c = np.array([[7, 8], [9, -3]])
print("\nc repeated along axis 1:\n", c.repeat(2, axis=1))

d = np.array([[-1, 2], [0, -1]])
print("\nd repeated 4 times (no axis):", d.repeat(4, axis=None))
```
