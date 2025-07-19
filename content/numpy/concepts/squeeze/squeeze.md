---
Title: 'Squeeze'
Description: 'It refers to the process of discard similar dimensions from a Numpy array'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Math'
  - 'Methods'
  - 'Arrays'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In [Numpy](https://www.codecademy.com/resources/docs/numpy), **.squeeze()** is used to remove redundant dimensions, this will return an array with the elements, but removing those arrays that have only one element.

## Syntax
_numpy.squeeze(a, axis=None)_

Parameters:
- a: numpy array
- axis: None or int or [tuple](https://www.codecademy.com/resources/docs/python/tuples) of ints (optional)

## Example

The following example shows the use of `.squeeze()`

```py
import numpy as np

# Create a numpy array
np_array = np.array([[[1, 2, 3], [1, 2, 3]]])

# Print the array shape to understand how it's structured
"""
The shape result means:
  - The first dimension has 1 element       => len(np_array)
  - The second dimension has 2 elements     => len(np_array[0])
  - The third dimension has 3 elements      => len(np_array[0][0])
"""
print(np_array.shape)  # (1, 2, 3)

# Apply squeeze
squeezed_array = np.squeeze(np_array)
"""
The result means:
  - The first dimension has 2 elements      => len(squeezed_array)
  - The second dimension has 3 elements     => len(squeezed_array[0])
"""
print(squeezed_array.shape)  # (2, 3)
```

In the above example, `.squeeze()` removes all dimensions that have only one element. This allows removing unnecessary nested arrays. When printing `squeezed_array`, it looks like this:
```py
# Original array => np_array
[[[1, 2, 3],
 [1, 2, 3]]]

# Squeeze array => squeeze_array
[[1, 2, 3],
 [1, 2, 3]]
```

If you want to remove a specific dimension from the array, you can use the `axis` parameter. For example:
```py
import numpy as np

# Create a numpy array
np_array = np.array([[[1, 2, 3], [1, 2, 3]]])  # shape: (1, 2, 3)

# Remove the first dimension (axis 0)
squeezed_array = np.squeeze(np_array, axis=0)

print(squeezed_array.shape)  # (2, 3)
print(squeezed_array)
# [[1, 2, 3],
#  [1, 2, 3]]
```

Sometimes, you may want to remove more than one dimension at once. You can do this by passing a `tuple` to the `axis` parameter:
```py
import numpy as np

# Create an array filled with zeros
array_of_zeros = np.zeros((1, 3, 1))
print(array_of_zeros.shape)  # (1, 3, 1)

"""
This is how the array looks like:
[[[0.],
  [0.],
  [0.]]]
"""
```

As you can see, the first and third dimensions have size 1. You can remove only those:
```py
squeezed = np.squeeze(array_of_zeros, axis=(0, 2))
print(squeezed.shape)  # (3,)

# Result:
# [0. 0. 0.]
```

**NOTE:** If you try to `squeeze` a dimension that is not size 1, NumPy will raise an error:
```py
import numpy as np

arr = np.zeros((2, 3, 1))  # shape: (2, 3, 1)

# Trying to remove axis 0 (which has size 2) will fail
squeezed = np.squeeze(arr, axis=0)  # ❌ Raises ValueError

# Error
# ValueError: cannot select an axis to squeeze out which has size not equal to one
```

## Codebyte Example

```codebyte/python
import numpy as np

# Create a numpy array
np_array = np.array([[[1, 2, 3], [1, 2, 3]]])

# Print the array shape to understand how it's structured
print(np_array.shape)  # (1, 2, 3)

# Apply squeeze
squeezed_array = np.squeeze(np_array)

print(squeezed_array.shape)  # (2, 3)



np_array = np.array([[[1, 2, 3], [1, 2, 3]]])  # shape: (1, 2, 3)

# Remove the first dimension (axis 0)
squeezed_array = np.squeeze(np_array, axis=0)

print(squeezed_array.shape)  # (2, 3)
print(squeezed_array)


squeezed = np.squeeze(array_of_zeros, axis=(0, 2))
print(squeezed.shape)  # (3,)
```