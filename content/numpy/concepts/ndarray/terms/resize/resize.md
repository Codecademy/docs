---
Title: '.resize()'
Description: 'Changes the shape of a NumPy array in-place.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.resize()`** method in NumPy changes the shape of an array in-place and may alter its data if the new shape is larger, filling extra elements as needed. It’s useful when reshaping arrays for further processing or analysis.

## Syntax

```pseudo
ndarray.resize(new_shape, refcheck=True)
```

## Parameters

- `new_shape`: The desired shape of the array. If it's larger than the original, data is repeated to fill space.
- `refcheck`: If `True`, checks whether the array is referenced elsewhere before resizing. Set to `False` to skip this safety check and force a resize (may lead to issues if other views exist).

## Returns

The `.resize()` method modifies the array in-place and returns nothing. If the shape is increased, values are repeated to fill the new array.

## Example: Resizing a 1D Array to a Larger Shape

In this example, we resize a 1D array of length 3 to a shape of (2, 4). Since the new shape has more elements, the original values are repeated to fill the space:

```py
import numpy as np

arr = np.array([1, 2, 3])
arr.resize((2, 4))
print(arr)
```

The code above generates the following output:

```shell
[[1 2 3 0]
 [0 0 0 0]]
```

## Codebyte Example: Shrinking a 2D Array to a Smaller Shape

In this example, a 2D array is resized from shape (3, 3) to (2, 2), discarding excess elements:

```codebyte/python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
arr.resize((2, 2))
print(arr)
```
