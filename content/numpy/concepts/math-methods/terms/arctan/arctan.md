Title: 'numpy.arctan()'
Description: 'Calculates the inverse of tan'

---

In NumPy, the **.arctan()** method computes the element-wise inverse tangent (arc tangent) of the input array. It returns an array of angles in radians, with values ranging from -π/2 to π/2. This function is useful for transforming tangent values back to their corresponding angles. If the input is a scalar, the function returns a scalar; If the input is a scalar, the function returns a scalar; if the input is an array, it returns an array of the same shape with the arc tangent of each element.

---

## Syntax

```pseudo
numpy.arctan(x, /, out=None, *, where=True, casting='same_kind', order='K', dtype=None, subok=True[, signature, extobj])
```

Parameters:
+ 'x': Input array or scalar. The tangent values whose arc tangents are to be computed.
+ 'out': A location where the result is stored (optional).
+ 'where': This condition is broadcast over the input. At locations where the condition is True, the out array will be set to the ufunc result. Elsewhere, the out array will retain its original value (optional).
+ 'casting', 'order', 'dtype', 'subok', 'signature', 'extobj': Various parameters that affect casting, memory layout, output data type, and additional options for advanced users.

Returns:
+ An array with the arc tangent of each element of 'x'. If 'x' is a scalar, a scalar is returned.

---

## Example
Below is an example of '.arctan()' in use:

```
import numpy as np

# Example 1: Basic usage with a scalar
result1 = np.arctan(1)
print(result1)  # Output: 0.7853981633974483, which is π/4 radians (45 degrees)

# Example 2: Arc tangent of an array
array = np.array([0, 1, -1, 1000, -1000])
result2 = np.arctan(array)
print(result2)  
# Output: [ 0.          0.78539816 -0.78539816  1.56979633 -1.56979633]

# Example 3: Arc tangent and converting result to degrees
result3 = np.degrees(np.arctan(array))
print(result3)  
# Output: [  0.  45. -45.  89.94270424 -89.94270424]

# Example 4: Using the out parameter
out_array = np.empty_like(array, dtype=float)
np.arctan(array, out=out_array)
print(out_array)
# Output: [ 0.          0.78539816 -0.78539816  1.56979633 -1.56979633]
```

## Codebyte Example

```
import numpy as np

# Single value
print(np.arctan(1))  # Output: 0.7853981633974483 (π/4 radians)

# Array of values
print(np.arctan([0, 1, -1]))  # Output: [ 0.          0.78539816 -0.78539816]
```
