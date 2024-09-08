---
Title: '.trace()'
Description: 'Calculates sum of the elements along the main diagonal of an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Matrices'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.trace()`** function returns sum of the elements along the main diagonal of an array. The array must have atleast two dimentions. If the array used has more then two dimenions then axes need to be specified to determine 2D sub array whose traces are returned.

## Syntax

```pseudo
numpy.trace(a, offset=0, axis1=0, axis2=1, out=None)
```

- `a`: An array for which the sum of element along main diagonal is calculated.
- `offset`: An optional parameter can be both negative and positive. It is offset of diagonalform the main diagonal. Default is 0.
- `axis1`: An optional parameter used as the first axis of the 2D sub-arrays from which the diagonals should be taken. Default is 0.
- `axis2`: An optional parameter used as the second axis of the 2D sub-arrays from which the diagonals should be taken. Default is 1.
- `out`: An optional parameter specifying an array where the result will be stored. If not provided, a new array is created.

## Example

The below example shows how `.trace()` works on a 2D array:

```py
import numpy as np

# Creating a 2D array
arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]])

# Computing the trace of the main diagonal
sum1 = np.trace(arr,0)

# Computing the trace of the diagonal above the main diagonal.
sum2 = np.trace(arr,1)

# Computing the trace of the diagonal below the main diagonal.
sum3 = np.trace(arr,-1)

print("The sum when offset is 0:", sum1)
print("The sum when offset is 1:", sum2)
print("The sum when offset is -1:", sum3)
```

The output would be:

```shell
The sum when offset is 0: 34
The sum when offset is 1: 21
The sum when offset is -1: 30
```

## Codebyte Example

Run the following code to understand how the `.trace()` function works:

```codebyte/python
import numpy as np

# Creating a 2D array
arr = np.array([[1, 2, 3],[4, 5, 6],[7, 8, 9]])

# Computing the trace
result = np.trace(arr)
print(result)
```
