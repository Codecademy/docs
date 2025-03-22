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
---

In NumPy, the **`.arcsin()`** method is used to calculate the inverse sine of the elements in an array. It is commonly employed when solving trigonometry problems where an angle of a right triangle is unknown, but two of the sides are known. The result is always in the range of _-pi/2_ to _pi/2_ radians. It returns the inverse sine in radians.

## Syntax

```pseudo
numpy.arcsin(x, out=None, where=True)
```

- `x`: This is the input array. Its elements must be in the range [-1, 1] for valid results. The method returns `NaN` if values are outside this range.
- `out`: This is an optional parameter. It specifies an array to store the result. If not provided or set to `None`, a new array is created for the result.
- `where`: The condition (array of boolean values) that specifies where the method is to be applied.
  - If the condition is `True` for an element, the `.arcsin()` method is applied to that element in the input array.
  - If the condition is `False` for an element, the corresponding element in the output array remains unchanged.
  - If not provided, the `.arcsin()` method is applied to all elements in the input array.

## Example

The below example shows the `.arcsin()` method in use:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Defining an input array
a_input = np.array([1, 0.5, 0, -0.5, -1])

# Computing the inverse sine of all elements in the array
result_all = a_input.copy()
np.arcsin(a_input, out=result_all)
print("result_all:", result_all)

# Computing the inverse sine of specific elements in the array
result_spec = a_input.copy()
np.arcsin(a_input, out=result_spec, where=np.array([True, True, False, True, False]), dtype=float)
print("result_spec:", result_spec)

# Computing the inverse sine of all elements in the array that are greater than 0
result_gt0 = a_input.copy()
np.arcsin(a_input, out=result_gt0, where=list(map(lambda x: x>0, a_input)), dtype=float)
print("result_gt0:", result_gt0)
```

The output of the above code is shown below:

```shell
result_all: [ 1.57079633  0.52359878  0.         -0.52359878 -1.57079633]
result_spec: [ 1.57079633  0.52359878  0.         -0.52359878 -1.        ]
result_gt0: [ 1.57079633  0.52359878  0.         -0.5        -1.        ]
```

Codebyte Example:

The below codebyte example demonstrates the usage of the `.arcsin()` method:

```codebyte/python
import numpy as np

result = np.arcsin(0.4)

print(result)
```
