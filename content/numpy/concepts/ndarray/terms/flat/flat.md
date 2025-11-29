---
Title: '.flat' 
Description: is a property on NumPy arrays that gives you a 1D iterator over every element in the array. It doesn’t copy the data — it’s just a view you can iterate through.
Subjects:
  - 'Data Science'
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Data Structures'
  - 'NumPy'
CatalogContent: 
  - '[numpy.ndarray.flat](https://numpy.org/doc/2.2/reference/generated/numpy.ndarray.flat.html#numpy.ndarray.flat)'
  - '[geeksForGeeks/numpy-ndarray-flat](https://www.geeksforgeeks.org/python/numpy-ndarray-flat-python/)'
---
**.flat** is a property on NumPy arrays that gives you a 1D iterator over every element in the array. It doesn’t copy the data — it’s just a view you can iterate through.

## Syntax

```psedu
ndarray.flat
```

## Example

### Iterate Over All Elements

```
import numpy as np
a = np.array([[1, 2, 3],[4, 5, 6]])

for value in a.flat:
  print(value)
```

Output:
```
1
2
3
4
5
6
```

### Indexing Through flat
```
a = np.array([[10, 20],
              [30, 40]])

print(a.flat[2])  # Third value in row-major order
```

Output:
```
30
```

### Assigning Through flat
```
a = np.array([[1, 2],
              [3, 4]])

a.flat[1] = 99

print(a)
```

Output:
```
[[ 1 99]
 [ 3  4]]
```

### Filling an Array Using .flat
```
a = np.zeros((2, 3))

for i in range(a.size):
    a.flat[i] = i + 1

print(a)
```

Output:
```
[[1. 2. 3.]
 [4. 5. 6.]]
```
## Codebyte Example (if applicable)

```codebyte/python
import numpy as np
array = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(array)
print(array.flat)
print(array.flat[5])
for num in array.flat:
  print(num, end=", ")
```