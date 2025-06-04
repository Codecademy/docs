---
Title: '.zeros()'
Description: 'creates a new array filled with zeros'
Subjects:
  - 'AI'
  - 'Data Structures'
  - 'Linear Algebra'
  - 'NumPy'
  - 'Python'
Tags: 
  - 'Data Structures'
  - 'Linear Algebra'
  - 'NumPy'
  - 'Python'
  - 'AI'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---
 


**`.zeros()`**  is a NumPy function used to create a new array of a specified shape, filled entirely with zeros. It is commonly used to initialize arrays before assigning them meaningful data.

## Syntax 
```pseudo
numpy.zeros(shape, dtype=float, order='C') 
shape: Defines the dimensions of the new array.
dtype: The desired data type for the array elements


## Example
This example creates a 1D array of five zeros and a 2D array of zeros with shape (3, 2) and integer data type using NumPy's zeros() function.
```pyhton
import numpy as np

array1 = np.zeros(5)
print(array1)  
Output: [0. 0. 0. 0. 0.]

array2 = np.zeros((3, 2), dtype=int)
print(array2)
```shell
Output:
[[0 0]
[0 0]
[0 0]]
```
```


