---
Title: '.repeat()'
Description: 'Returns the repeated elements of an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In ndarray, **`.repeat()`** method repeats the elements of an array. The elements repeat after themselves. This method belongs to the ndarray class.

## Syntax

```pseudo
ndarray.repeat(repeats, axis=none)
```

**parameters**
- `repeats`: The number of times an element is repeated.
- `axis`: (optional) To repeat all the elements along the axis mentioned if the array is multidimensional.

**returns**
An output array with the same shape and repeated elements.

## Example

The following example creates an `ndarray` then uses `.repeat()` to repeat the elements.

```py
import numpy as np

a = np.array([1])
print("a repeated:", a.repeat(3))

b = np.array([[1,2],[5,6]])
print("b repeated:", b.repeat(2))

c = np.array([[1,2],[0,-1]])
print("c repeated:", c.repeat(2,axis=0))
```

The above code generates the following output:
```shell
a repeated: [1 1 1]
b repeated: [1 1 2 2 5 5 6 6]
c repeated: [[ 1  2]
 [ 1  2]
 [ 0 -1]
 [ 0 -1]]
```

## Codebyte Example

Run the following codebyte example to understand the usage of the `.repeat()` method:

```codebyte/python
import numpy as np

a = np.array([-8])
print(a.repeat(3))

b = np.array([[1,2,-9],[5,6,0]])
print(b.repeat(2))

c = np.array([[7,8],[9,-3]])
print(c.repeat(2, axis=1))

d = np.array([[-1,2],[0,-1]])
print(d.repeat(4, axis= None))
```