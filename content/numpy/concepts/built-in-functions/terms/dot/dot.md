---
Title: '.dot()'

Description: 'Dot product of two arrays.Simply put, np.dot is an operation that takes tow equal-length sequences of numbers and returns a single number. However its operation and output is dependant upon the inputs (structure) of the arrays in the equations.' 

Subjects: 
  - 'Data Science'
  - 'Computer Science'

Tags: 
  - 'Data Structures'
  - 'Arrays'
  - 'Linear Algebra'
  - 'Functions'
  - 'NumPy'

CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

The **np.dot()** function is used to produce a dot product which will vary depending upon the input.
from numpy.org 'out: ndarray, otional 
Returns the dot product of a and b. If a and b are both scalars or both 1-D arrays then a scalar is returned; otherwise an array is returned. If out is given, then it is returned.' [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray)

Generally the function/operation accepts 3 types of inputs: 
1. 1D arrays [3,6,8,...]
2. 2D arrays [4,5,6]
             [7,8,9]
             [1,2,3]
3. scalar = a real number, usually but not always positive (simply put it is an int or a float).

Math Examples:
scalar * scalar: np.dot(2,3.25) = 6.5
scalar * 1D array: np.dot(4, [2,4,6]) = array([8,16,24])
1D array (or Python List) * 1D array: np.dot([1,2,3],[4,5,6]) = (1x4)+(2x5)+(3x6)= 32
2D array * 2D array uses matrix multiplication. Here is a simple example:
Matrix Multiplication: A = [3,4,5] B = [10,11]
                           [6,7,8]     [12,13]
                                       [14,15]
A gives us 2 rows, B gives us 2 columns final out put will be a 2X2 matrix:[a,b]
                                                                           [c,d]
a = (3x10)+(4x12)+(5x14)=148, b = (3x11)+(4x13)+(5x15)=160
c = (6x10)+(7x12)+(8x14)=256, b = (6x11)+(7x13)+(8x15)=277
output = [148,160]
         [256,277]

## Syntax

```pseudo
numpy.dot(a, b, *(optional)out=None*)
```

## Example

```py
import numpy as np

# defining 2 arrays
array_a = [3,4,5]
array_b = [1,2,3]

# computing and printing the product
print(np.dot(array_a, array_b))
```
output: 26

## Example 2 Matrix Multiplication

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
output:
Matrix m :
[[3, 5], [1, 4], [5, 4]]
Matrix n :
[[7, 3, 1], [2, 7, 2]]
The matrix multiplication is :
[[31 44 13]
 [15 31  9]
 [43 43 13]]