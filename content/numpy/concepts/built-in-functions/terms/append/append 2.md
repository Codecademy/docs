---
Title: '.append()'
Description: 'Appends values to the end of an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `.append()` function adds values to the end of an array and returns a [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) with the values appended.

## Syntax

```pseudo
numpy.append(array, values, axis)
```

Where `array` is the array being appended to. The `values` parameter is another array specifying the values to add to `array`. If `axis` is specified, `values` must be the same shape as `array` without that axis. If `axis` is not specified, `values` can be any shape, and both `array` and `values` will be flattened before the values are appended. The `axis` value specifies the axis along which values are appended.

## Example

The example below creates two `ndarrays` and appends one to the other.

```py
import numpy as np

nd1 = np.array([[1,2,3],[4,5,6]])
nd2 = np.array([[7,8,9]])

print(nd1)
print(nd2)
print(np.append(nd1,nd2,0))
```

This produces the following output:

```shell
[[1 2 3]
 [4 5 6]]

[[7 8 9]]

[[1 2 3]
 [4 5 6]
 [7 8 9]]
```

## Codebyte Example

The following example creates two arrays and demonstrates appending them using `.append()`, both without specifying an axis (resulting in a 1D array) and along specified axes (rows and columns):

```codebyte/python
import numpy as np

nd1 = np.array([[0,0,0,0], [1,1,1,1]])
print("First array: \n", nd1)

nd2 = np.arange(8).reshape(2, 4)
print("Second array: \n", nd2)

nd3 = np.append(nd1, nd2)
print("Appended array with no axis specified:\n", nd3);

nd4 = np.append(nd1, nd2, axis = 0)
print("Appended array on axis 0:\n", nd4);

nd5 = np.append(nd1, nd2, axis = 1)
print("Appended array on axis 1:\n", nd5);
```
