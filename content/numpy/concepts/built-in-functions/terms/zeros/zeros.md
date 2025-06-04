---
Title: '.zeros()'
Description: 'creates a new array filled with zeros'
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags: 
  - 'AI'
  - 'Data Structures'
  - 'Linear Algebra'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---
 


**`.zeros()`**  is a NumPy function used to create a new array of a specified shape, filled entirely with zeros. It is commonly used to initialize arrays before assigning them meaningful data.

## Syntax 
```python
numpy.zeros(shape, dtype=float, order='C') 


## Example
import numpy as np

array1 = np.zeros(5)
print(array1)  
Output: [0. 0. 0. 0. 0.]

array2 = np.zeros((3, 2), dtype=int)
print(array2)
Output:
[[0 0]
[0 0]
[0 0]]



