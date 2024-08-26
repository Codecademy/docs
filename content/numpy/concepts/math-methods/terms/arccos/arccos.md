---
Title: '.arccos()'
Description: 'Calculates the inverse cosine or arccosine of each element in an array or a single value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.arccos()`** function calculates the inverse cosine or arccosine, of each element in an array. The elements in the array should be cosine values, which must lie within the range [-1, 1]. The function returns the corresponding angle in radians for each cosine value.

## Syntax

```pseudo
numpy.arccos(array, out = None, where=True)
```

- `array`: An array-like or scalar containing cosine values. The function computes the inverse cosine of each element.
- `out`: An optional parameter specifying an array where the result will be stored. If not provided, a new array is created.
- `where`: A condition or boolean array that determines which elements of `array` are used to compute the inverse cosine. The inverse cosine is computed only for elements where the condition is `True`; other elements remain unchanged.

## Example

In the example below, the `.arccos()` function calculates the inverse cosine of each element in a NumPy array and prints the resulting angles in radians:

```py
import numpy as np

# Array of cosine values within the range [-1, 1]
cos_values = np.array([1, 0, -1])

# Compute the arccosine of each element
angles_in_radians = np.arccos(cos_values)

# Returned values are in radians
print("Arccosine:", angles_in_radians)
```

The output would be:

```shell
Arccosine:  [0.         1.57079633 3.14159265]
```

> **Note:** The function returns `NaN` for values outside the range [-1, 1], since the arccosine is not defined for those values.

## Codebyte Example

Run the following code to understand how the `.arccos()` function works:

```codebyte/python
import numpy as np

# Cosine values within the range [-1, 1]
cos_values = np.array([1, 0.5, 0, -0.5, -1])

# Calculate the arccosine and let NumPy handle the output array
out = np.arccos(cos_values)

np.arccos(cos_values, out=out)
print("Arccosine:", out)
```
