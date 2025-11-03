---
Title: 'max()'
Description: 'Returns the maximum value of elements along a specified axis or the largest element in the entire NumPy array.'
Subjects:
  - 'Python'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`max()`** function in NumPy returns the maximum value of elements along a specified axis in an array. If no axis is provided, it returns a single scalar value representing the most significant element in the entire array. NumPy arrays support efficient element-wise operations, and max() quickly identifies the maximum value across dimensions or within specific rows and columns.

When `axis=0`, the function returns a **one-dimensional array containing the maximum values from each column**.  
When `axis=1`, it returns a **one-dimensional array containing the maximum values from each row**.

## Syntax

```pseudo
numpy.ndarray.max(axis=None, out=None, keepdims=False, initial=<no value>, where=True)
```

**Parameters**

- `axis` *(int or None)* — Axis or axes along which to operate.  
    - `0` — Operates **vertically**, returning the maximum values from each **column**.  
    - `1` — Operates **horizontally**, returning the maximum values from each **row**.  
    - `None` — Returns a **single scalar value** representing the largest element in the entire array.
