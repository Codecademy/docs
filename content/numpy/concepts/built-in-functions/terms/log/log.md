---
Title: '.log()'
Description: 'Returns an element-wise natural logarithm for an array.'
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

The `.log()` function returns an element-wise natural logarithm of an array.

## Syntax

```pseudo
numpy.log(array)
```

`.log()` returns an [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) with each element as the natural logarithm of the corresponding element in `array`.

## Example

The following example creates a `ndarray` and applies `.log()` to it:

```py
import numpy as np

nd = np.array([[1,2.71828],[2.71828,1]])

print(nd)
print(np.log(nd))
```

This produces the following output:

```shell
[[1.      2.71828]
 [2.71828 1.     ]]

 [[0.         0.99999933]
 [0.99999933 0.        ]]
```

## Codebyte Example

The following examples cretes different arrays and demonstrates the results of executing `.log()` to each array.

```codebyte/python
import numpy as np

# Single element array
single_element_array = np.array([10])
print("Single element array:")
print(single_element_array)
print("Log of single element array:")
print(np.log(single_element_array))

# Multiple elements array
multiple_elements_array = np.array([1, 10, 100])
print("\nMultiple elements array:")
print(multiple_elements_array)
print("Log of multiple elements array:")
print(np.log(multiple_elements_array))

# Higher-dimensional array
higher_dimensional_array = np.array([[1, 2], [3, 4]])
print("\nHigher-dimensional array:")
print(higher_dimensional_array)
print("Log of higher-dimensional array:")
print(np.log(higher_dimensional_array))
```

This produces the following output:

```shell
Single element array:
[10]
Log of single element array:
[2.30258509]

Multiple elements array:
[  1  10 100]
Log of multiple elements array:
[0.         2.30258509 4.60517019]

Higher-dimensional array:
[[1 2]
 [3 4]]
Log of higher-dimensional array:
[[0.         0.69314718]
 [1.09861229 1.38629436]]
```
