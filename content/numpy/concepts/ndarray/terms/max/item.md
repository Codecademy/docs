# Python NumPy - ndarray.item()

The `item()` method in NumPy returns a standard Python scalar from an array with a single element.  
If the array has more than one element, you can specify an index.

## Syntax
```python
numpy.ndarray.item(*args)
```
## Example
```commandline
import numpy as np
arr = np.array([10])
print(arr.item())  # Output: 10

```
