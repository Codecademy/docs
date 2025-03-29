---
Title: '.cumsum()'
Description: 'Calculate the cumulative sum of elements in an array over a given axis.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'NumPy'
  - 'Functions'
  - 'Arrays'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.cumsum()`** function calculates the cumulative sum of elements in an array over a given axis.

## Syntax

```pseudo
numpy.cumsum(a, axis, dtype, out)
```
`a` = The array of elements to calculate the cumulative sum of.
`axis` = Axis along which the cumulative sum is computed.
`dtype` = Type of the returned array.If not specified defaults to the dtype of `a`.
`out`: A different array to place the result. It must have the same shape as the expected result.

**Note:** The `a` parameter is the only required parameter for this function. All other parameters are optional.

## Example

```py
import numpy as np

array = np.array([1, 2, 3, 4, 5])
cumulative_sum = np.cumsum(array)

print("Original Array:", array)
#Prints out the original array 

print("Cumulative Sum:", cumulative_sum)
#Computes the cumulative sum of the original array
```

This produces the following output:

```shell  
Original Array: [1 2 3 4 5]
Cumulative Sum : [1 3 6 10 15]
```

## Codebyte Example

Run the following codebyte example the better understand the `.cumsum()` function:

```codebyte/py
import numpy as np

array = np.array([[1, 2, 3], [5, 10, 15]])

print("Original array:")
print(array)

# Cumulative sum along axis 0 (cumulative sum by columns)
print("\nCumulative sum array along axis 0 (columns):")
print(np.cumsum(array, axis=0))

# Cumulative sum along axis 1 (cumulative sum by rows)
print("\nCumulative sum array along axis 1 (rows):")
print(np.cumsum(array, axis=1))
```
