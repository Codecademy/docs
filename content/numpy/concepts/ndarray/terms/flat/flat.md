---
Title: '.flat' 
Description: is a property on NumPy arrays that gives you a 1D iterator over every element in the array. It does not copy the data — it’s just a view you can iterate through.
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
  - 'learn-python-3'
  - 'paths/computer-science'
---
**.flat** is a property on NumPy arrays that gives you a 1D iterator over every element in the array. It doesn’t copy the data — it’s just a view you can iterate through.

## Syntax

```pseudo
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

### Indexing with  `flat`
```
a = np.array([[10, 20],
              [30, 40]])

print(a.flat[2])  # Third value in row-major order
```

Output:
```shell
30
```

### Assigning with `.flat`
```
a = np.array([[1, 2],
              [3, 4]])

a.flat[1] = 99

print(a)
```

Output:
```shell
[[ 1 99]
 [ 3  4]]
```

### Filling an Array Using `.flat`
```
a = np.zeros((2, 3))

for i in range(a.size):
    a.flat[i] = i + 1

print(a)
```

Output:
```shell
[[1. 2. 3.]
 [4. 5. 6.]]
```
## Codebyte Example

```codebyte/py
import numpy as np
array = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(array)
print(array.flat)
print(array.flat[5])
for num in array.flat:
  print(num, end=", ")
```