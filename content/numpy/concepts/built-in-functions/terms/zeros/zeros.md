---
Title: '.zeros()'
Description: 'creates a new array filled with zeros'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
  - 'AI'
Tags: 
  - 'Data Structures'
  - 'Linear Algebra'
  - 'NumPy'
  - 'Python'
  - 'AI'
CatalogContent:
  - 'Learn-Statistics-with-NumPy'
  - 'Paths/Analyze-Data-with-Python
---



**.zeros()** is a NumPy function used to create a new array of a specified shape, filled entirely with zeros. It's often used for initializing arrays before populating them with actual data.

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
