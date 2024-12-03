---
Title: '.square()'
Description: 'Calculates the square of each element in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Discrete Math'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---


In NumPy, the **`.square()`** method computes the square of a number or the square of the elements in an array. It is commonly used in mathematical calculations in machine learning, data analysis, engineering, and graphics.

## Syntax
```python
numpy.square(array, out = None, where = True, dtype = None)
```
- `array`: Input array. Can be a number, an array, or a multidimensional array. Required.
- `out`: An optional array where the result will be stored. Optional.
- `where`: Used for conditional replacements of the elements in the output array. Must be a numpy
  array. Optional.
- `dtype`: The datatype of the output array. Optional.

## Modifying the output array

The output array cannot simply be a Python array since Python arrays are [lists](https://www.codecademy.com/resources/docs/python/built-in-functions/list) of pointers to
objects. Numpy makes use of arrays composed of contiguous blocks of memory (like in C)
for the purposes of optimization. Therefore, arrays supplied for this argument must be initialized
with the `numpy.array` function like so...

```python
output_array = numpy.array([0, 0, 0, 0, 0])
```
You can now call your array as the `out` parameter in your .square() function.
```python
array = [1, 2, 3, 4, 5]
numpy.square(array, out = output_array)
print(output_array)
# Outputs [1, 4, 9, 16, 25]
```

## Operating conditionally
With the use of the "where" parameter, the function will execute conditionally. For instance:

```python
import numpy as np
array = [1, 2, 3, 4, 5]
conditions = np.array([False, True, True, False, True])
np.square(array, where=conditions)
# Outputs 'array([1, 4, 9, 4, 25])'
```

The "where" parameter takes a boolean value (True, False, 1, 0, etc.) or a matrix of boolean values,
and squares values at matrix indexes that correspond with true values and vice versa. If the "where"
parameter is set equal to a single boolean value, the entire input array is either squared (if it is
'1' or 'True') or not suqared (if it is '0' or 'False).

## Changing types
Sometimes, it is important to increase or decrease the size of the datatype of the output array. This can be done by setting the 'dtype' parameter to an np datatype, like:

```python
import numpy as np
array = [1, 2, 3, 4, 5]
np.square(array, dtype=np.float32)
# Outputs array([ 1.,  4.,  9., 16., 25.], dtype=float32)
```
