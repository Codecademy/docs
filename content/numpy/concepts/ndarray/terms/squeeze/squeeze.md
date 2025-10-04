---
Title: '.squeeze()'
Description: 'Removes dimensions of size 1 from an ndarray.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Math'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Numpy's **`.squeeze()`** is used to remove dimensions of size 1 from an array, returning a reshaped array without those singleton dimensions.

## Syntax

```pseudo
ndarray.squeeze(axis=None)
```

**Parameters:**

- `axis`: Specifies which axis or axes to squeeze. If set to `None` (default), all dimensions of size 1 are removed. If any specified axis is not of size 1, it raises a `ValueError`.

**Return value:**

Returns a view of the input array with the specified singleton dimensions removed.

## Example 1: Removing All Singleton Dimensions Using `.squeeze()`

In this example, `.squeeze()` is used without the `axis` parameter to remove all dimensions of size 1 from a 3D array:

```py
import numpy as np

np_array = np.array([[[1, 2, 3], [1, 2, 3]]])
print(np_array.shape)  # (1, 2, 3)

squeezed_array = np.squeeze(np_array)
print(squeezed_array.shape)
```

The output of this code is:

```shell
(2, 3)
```

## Example 2: Removing a Specific Dimension Using `.squeeze()`

In this example, `.squeeze(axis=0)` removes the first dimension explicitly from an array with shape `(1, 2, 3)`:

```py
import numpy as np

np_array = np.array([[[1, 2, 3], [1, 2, 3]]])
squeezed_array = np.squeeze(np_array, axis=0)

# Output shape after squeezing
print(squeezed_array.shape)
print(squeezed_array)
```

The output of this code is:

```shell
(2, 3)
[[1 2 3]
 [1 2 3]]
```

Only axis 0 is removed since it has size 1, resulting in a 2D array.

## Codebyte Example: Removing Multiple Dimensions With a Tuple Using `.squeeze()`

In this example, `.squeeze(axis=(0, 2))` removes both the first and third dimensions from a shape `(1, 3, 1)`:

```codebyte/python
import numpy as np

array_of_zeros = np.zeros((1, 3, 1))
print(array_of_zeros.shape)

squeezed = np.squeeze(array_of_zeros, axis=(0, 2))
print(squeezed.shape)
print(squeezed)
```

Axes 0 and 2, both of size 1, will be removed, leaving a flat array of shape `(3,)`.
