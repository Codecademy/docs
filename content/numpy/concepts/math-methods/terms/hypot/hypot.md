---
Title: '.hypot()'
Description: 'Returns the hypotenuse of a right triangle, given the legs.'

Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In [Numpy](https://www.codecademy.com/resources/docs/numpy), given the "legs" of a right triangle, the **`.hypot()`** function returns the hypotenuse.

## Syntax

```pseudo
numpy.hypot(x1, x2, out=None, where=True)
```

- `x1`, `x2`: These are the "legs" of the triangle(s). If the shapes of `x1` and `x2` are not identical, they must be broadcastable to a common shape.
- `out` (Optional): This parameter specifies an array where the result will be stored. The shape of `out` must match the shape of the output. If not provided, a new array will be allocated for the result.
- `where` (Optional): An optional condition that can be applied element-wise on the input arrays. The result will only be computed where the condition is `True`. If the condition is `False` for an element, that element’s result will be ignored.

 ## Example 1

The below example calculates the hypotenuse of one right triangle:

```py
# Importing the numpy library
import numpy as np

print("If the first leg is 3 and the second is 4, the hypotenuse is ",np.hypot(3, 4))
```

The code above generates the following output:


```shell
If the first leg is 3 and the second is 4, the hypotenuse is  5.0
```

## Example 2

The following example calculates the hypotenuses of three right triangles:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating the sides of three triangles
array1 = [3,5,6]
array2 = [4,12,8]

# Computing the hypotenuses
hypotenuses = np.hypot(array1, array2)

print("Output array:", hypotenuses)
print("\nThe hypotenuses are {}, {} and {}, respectively.".format(hypotenuses[0], hypotenuses[1], hypotenuses[2]))
```

The code above generates the following output:

```shell
Output array: [ 5. 13. 10.]

The hypotenuses are 5.0, 13.0 and 10.0, respectively.
```

## Codebyte Example

In this codebyte, `.hypot()` computes the hypotenuses for two triangles. The first triangle has legs of *2* and *3*, and the second triangle has legs of *8* and *15*.

```codebyte/python
import numpy as np

# Input Array
array1 = [2, 8]
array2 = [3, 15]

result = np.hypot(array1, array2)

print(result)
```
