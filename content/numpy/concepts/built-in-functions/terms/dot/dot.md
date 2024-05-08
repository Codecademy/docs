---
Title: '.dot()'
Description: 'Computes the dot product of two arrays.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'Linear Algebra'
  - 'NumPy'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'  
---

The **`np.dot()`** function computes the dot product of two arrays `a` and `b`, with the result varying based on the input. The function returns an [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray), and if both `a` and `b` are either scalars or 1-D arrays, a scalar is returned. Otherwise, an array is returned.

## Syntax

```pseudo
numpy.dot(a, b, out=None)
```

- `a`: The first array (or scalar) to be multiplied.
- `b`: The second array (or scalar) to be multiplied.
- `out`: Optional parameter that specifies the output array where the result is stored. If not provided, a new array is created.

Returns:
- output:ndarray 

## Example

```py
import numpy as np

# defining 2 arrays
array_a = [3,4,5]
array_b = [1,2,3]

# computing and printing the product
print(np.dot(array_a, array_b))
```
```shell
26
```

## Codebyte Example
```py
import numpy as np

# creating two matrices 
m = [[3, 5], [1, 4], [5, 4]] 
n = [[7, 3, 1], [2, 7, 2]] 
print("Matrix m :") 
print(m) 
print("Matrix n :") 
print(n) 
  
# computing product 
result = np.dot(m, n) 
  
# printing the result 
print("The matrix multiplication is :") 
print(result) 
```

```shell
Matrix m :
[[3, 5], [1, 4], [5, 4]]
Matrix n :
[[7, 3, 1], [2, 7, 2]]
The matrix multiplication is :
[[31 44 13]
 [15 31  9]
 [43 43 13]]
 ```