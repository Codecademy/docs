---
Title: '.arcsin()'
Description: 'Calculates the inverse sine of each element in an array.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
  - 'Trigonometry'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.arcsin()`** method is used to calculate the inverse sine of the elements in an array. It is commonly employed when solving trigonometry problems where an angle of a right triangle is unknown, but two of the sides are known. The result is always in the range of -π/2 to π/2 radians.

## Syntax

```pseudo
numpy.arcsin(x, out=None, where=True)
```

Parameters:

- `x`: This is the input array. Elements must be in the range [-1, 1] for valid results. Returns NaN if values are outside this range.
- `out`: This is an optional parameter. It specifies an array to store the result. If not provided or set to None, a new array is created for the result.
- `where`: Condition (array of boolean values) that specifies where the method is applied.
  - If the condition is `True` for an element, the arcsin operation is applied to that element in the input array.
  - If the condition is `False` for an element, the corresponding element in the output array remains unchanged.
  - If not provided, arcsin is calculated for all elements in the input array.

## Example

The below example shows the `.arcsin()` method in use:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Defined input array
a_input = np.array([1, 0.5, 0, -0.5, -1])

# Computing the arcsin of all elements in an array
result_all = a_input.copy()
np.arcsin(a_input, out=result_all)
print("result_all:", result_all)

# Computing the arcsin of specific elements in the array
result_spec = a_input.copy()
np.arcsin(a_input, out=result_spec, where=np.array([True, True, False, True, False]), dtype=float)
print("result_spec:", result_spec)

# Computing the arcsin of all elements greater than 0
result_gt0 = a_input.copy()
np.arcsin(a_input, out=result_gt0, where=list(map(lambda x: x>0, a_input)), dtype=float)
print("result_gt0:", result_gt0)

```

The output of the above code is shown below:

```shell
result_all:  [ 1.57079633  0.52359878  0.         -0.52359878 -1.57079633]
result_spec: [ 1.57079633  0.52359878  0.         -0.52359878 -1.        ]
result_gt0: [ 1.57079633  0.52359878  0.         -0.5        -1.        ]
```

Codebyte Example:

```codebyte/python
import numpy as np
result = np.arcsin(0.4)
print(result)
```

