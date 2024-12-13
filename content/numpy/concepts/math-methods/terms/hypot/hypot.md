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

In [Numpy](https://www.codecademy.com/resources/docs/numpy), the **`.hypot()`** function returns the hypotenuse of a right triangle, given the legs.

## Syntax

```pseudo
numpy.hypot(x1, x2, out=None, where=True)
```

- `x1`, `x2`: These are the legs of the triangle(s). If the shapes of `x1` and `x2` are not identical, they must be broadcastable to a common shape.
- `out` (Optional): This parameter specifies an array where the result will be stored. The shape of `out` must match the shape of the output. If not provided, a new array will be allocated for the result.
- `where` (Optional): An optional condition that can be applied element-wise on the input arrays. The result will only be computed where the condition is `True`. If the condition is `False` for an element, that element’s result will be ignored.

## Example 1

The below example calculates the hypotenuse of a right triangle:

```py
import numpy as np

print("If the first leg is 3 and the second is 4, the hypotenuse is ", np.hypot(3, 4))
```

The code above generates the following output:

```shell
If the first leg is 3 and the second is 4, the hypotenuse is  5.0
```

## Example 2

The following example calculates the hypotenuses of three right triangles:

```py
import numpy as np

# Creating the sides of three triangles
triangle_leg1 = [3,5,6]  # First leg of each triangle
triangle_leg2 = [4,12,8]  # Second leg of each triangle

# Computing the hypotenuses
hypotenuses = np.hypot(array1, array2)

print("Calculated hypotenuses:", hypotenuses)
print("\nThe hypotenuses are {}, {} and {}, respectively.".format(hypotenuses[0], hypotenuses[1], hypotenuses[2]))
```

The code above generates the following output:

```shell
Calculated hypotenuses: [ 5. 13. 10.]

The hypotenuses are 5.0, 13.0 and 10.0, respectively.
```

## Codebyte Example

In this codebyte, `.hypot()` computes the hypotenuses for two triangles. The first triangle has legs of _2_ and _3_, and the second triangle has legs of _8_ and _15_.

```codebyte/python
import numpy as np

first_leg = [2, 8]  # First leg of each triangle
second_leg = [3, 15]  # Second leg of each triangle

# Calculate the hypotenuses for each triangle
hypotenuses = np.hypot(first_leg, second_leg)

print("The calculated hypotenuses are:", hypotenuses)
```
