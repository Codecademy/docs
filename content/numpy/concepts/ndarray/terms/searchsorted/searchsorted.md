---
Title: '.searchsorted()'
Description: 'Returns the index where a value should be inserted to maintain order.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Binary Search'
  - 'NumPy'
  - 'Search'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.searchsorted()`** function returns the index where a value should be inserted to maintain order.

## Syntax

```pseudo
ndarray.searchsorted(value, side='left', sorter=None)
```

**Parameters:**

- `value` (array_like): Values to insert into the array.
- `side` (default=`'left'`, optional): Determines whether to return the first suitable location (`'left'`) or last (`'right'`).
- `sorter` (1-D array_like, optional): Specifies a pre-sorted index array for the search (used if the array isn’t sorted).

**Return value:**

The index (or indices) where `values` should be inserted to maintain order.

## Example

In this example, `.searchsorted()` finds the index where the value `3` should be inserted to keep the array sorted:

```py
import numpy as np

arr = np.array([11, 22, 33, 44, 55])
index = arr.searchsorted(33)
print(index)
```

The result is `2`, which is the position of the first `33` in the sorted array:

```shell
2
```

## Codebyte Example

In this codebyte example, `.searchsorted()` finds where a new test score should be inserted in a sorted list of scores:

```codebyte/python
import numpy as np

scores = np.array([55, 60, 65, 70, 75])
new_score = 68
position = scores.searchsorted(new_score)
print(position)
```
