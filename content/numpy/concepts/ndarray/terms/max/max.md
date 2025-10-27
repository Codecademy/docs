# max()

The `max()` method in NumPy returns the maximum value along a given axis of an `ndarray`.  
If no axis is specified, it returns the maximum value of the entire array.

## Syntax

```python
ndarray.max(axis=None, out=None, keepdims=False, initial=<no value>, where=True)
```
##Example
import numpy as np

arr = np.array([[1, 5, 3],
                [7, 2, 9]])

# Maximum of the entire array
print(arr.max())        # Output: 9

# Maximum along each column (axis 0)
print(arr.max(axis=0))  # Output: [7 5 9]

# Maximum along each row (axis 1)
print(arr.max(axis=1))  # Output: [5 9]
##CodeByte

import numpy as np

arr = np.array([[2, 4, 8],
                [1, 6, 3]])

print(arr.max())        # Output: 8
print(arr.max(axis=1))  # Output: [8 6]

