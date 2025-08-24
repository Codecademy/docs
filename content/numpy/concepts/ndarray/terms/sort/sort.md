---
Title: '.sort()'
Description: 'Sorts the array in-place along the specified axis'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.sort()`** method sorts a NumPy array in-place in ascending order along a specified axis. By default, it sorts in ascending order.

## Syntax

```pseudo
ndarray.sort(axis=-1, kind=None, order=None)
```

**Parameters:**

- `axis`: Axis along which to sort. Default is `-1` (last axis). Use `None` to sort the flattened array.
- `kind`: Sorting algorithm: `'quicksort'` (default), `'mergesort'`, `'heapsort'`, or `'stable'`.
- `order`: Only for structured arrays. Specifies the field(s) to sort by.

## Example

In this example, the `.sort()` method is used to sort a NumPy array in descending order:

```py
# Import NumPy
import numpy as np

# Create a NumPy array
nf = np.array(['aaa', 'xxx', 'ddd', 'sss'])

# Sort in descending order
nf.sort()     # Sorts in ascending order
nf = nf[::-1] # Reverses to get descending order

print(nf)
```

We will get the following result:

```shell
['xxx' 'sss' 'ddd' 'aaa']
```

## Codebyte Example

In the following codebyte example, a NumPy array `nf` is created with strings of varying lengths, and then sorted in descending order based on string length:

```codebyte/python
import numpy as np

nf = np.array([5, 1, 9, 3, 2, 8])

# Sort the array in-place using NumPy's sort method
nf.sort()
print("Ascending:", nf)

# Reverse for descending order
nf = nf[::-1] 
print("Descending:", nf)
```
