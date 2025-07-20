---
Title: 'searchsorted'
Description: 'Finds indices where elements should be inserted to maintain order in a NumPy array.'

Subjects:
  - 'Data Science'
  - 'Computer Science'
  - 'Machine Learning'

Tags:
  - 'NumPy'
  - 'Arrays'
  - 'Search'
  - 'Binary Search'
  - 'Sorting Algorithms'

CatalogContent:
  - 'learn-data-analysis-with-python'
  - 'paths/data-science'
---

**searchsorted()** is a method of NumPy's ndarray that returns the indices at which elements should be inserted to maintain order.

## Syntax

```python
ndarray.searchsorted(value, side='left', sorter=None)
```

- **value**: array_like  
  Values to insert into the array.

- **side**: {'left', 'right'}, optional, default='left'  
  If 'left', return the first suitable insertion index. If 'right', return the last suitable insertion index.

- **sorter**: 1-D array_like, optional  
  Optional array of indices that sort the array. If provided, `searchsorted` assumes the array is sorted according to `sorter`.

## Example

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
index = arr.searchsorted(3)
print(index)  # Output: 2
```

For this example, the method .searchsorted(3) returns the index 2, that is where the value 3 will be inseted to keep the array sorted.





