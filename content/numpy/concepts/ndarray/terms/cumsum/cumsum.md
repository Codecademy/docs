---
Title: '.cumsum()'
Description: 'Returns the cumulative sum of the elements along the given axis.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Numpy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.cumsum()`** method in NumPy returns the cumulative sum of the elements along a specified axis of an array. If no axis is specified, the method computes the cumulative sum of the flattened array.

## Syntax

```pseudo
ndarray.cumsum(axis=None, dtype=None, out=None)
```

**Parameters:**

- `axis` (Optional): Specifies the axis along which the cumulative sum is computed. If the axis is not specified, the cumsum is computed over the flattened array.
- `dtype` (Optional): Specifies the data type of the returned array. If not provided, it defaults to the data type of the input array. However, if the array has an integer type with a precision lower than that of the default platform integer, the default platform integer is used instead.
- `out` (Optional): An optional output array in which to store the resulting cumulative sum. The shape and buffer length must match that of the expected output but the type will be cast if necessary.

**Return value:**

Returns an array containing the result if `out` is not specified. If `out` is specified, a reference to `out` is returned.

## Example 1: No Axis Specified

In this example, the cumulative sum is calculated without specifying an axis, resulting in a flattened array:

```py
import numpy as np

array = np.array([[1, 2, 3], [4, 5, 6]])
cumsum_result = array.cumsum()
print(cumsum_result)
```

The output of this code will be:

```shell
[ 1  3  6 10 15 21]
```

## Example 2: Specified Axis

In this next example, an axis to compute the cumulative sum is specified:

```py
import numpy as np

array = np.array([[1, 2, 3], [4, 5, 6]])
cumsum_result_0 = array.cumsum(axis=0)
cumsum_result_1 = array.cumsum(axis=1)
print(cumsum_result_0)
print(cumsum_result_1)
```

The output will be:

```shell
[[1 2 3]
 [5 7 9]]

[[ 1  3  6]
 [ 4  9 15]]
```

## Example 3: Specified Data Type

In this one, the data type for the cumulative sum result is specified:

```py
import numpy as np

array = np.array([1, 2, 3])
cumsum_result = array.cumsum(dtype=float)
print(cumsum_result)
```

The output array will be:

```shell
[1. 3. 6.]
```

As it can be seen, the cumulative sum values are represented as floating-point numbers this time.

## Example 4: Output Array Provided

In the following example, an empty output array is provided to store the cumulative sum result:

```py
import numpy as np

array = np.array([1, 2, 3])
output_array = np.empty_like(array)
array.cumsum(out=output_array)
print(output_array)
```

The output will be:

```shell
[1 3 6]
```

## Codebyte Example

In this codebyte example, an array is created and the cumulative sum is calculated along both axes while also specifying the type of the output:

```codebyte/python
import numpy as np

array = np.array([[1, 2], [3, 4]])
cumsum_result_0 = array.cumsum(axis=0, dtype=int)
cumsum_result_1 = array.cumsum(axis=1, dtype=float)
print(cumsum_result_0)
print(cumsum_result_1)
```
