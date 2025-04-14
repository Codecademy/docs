---
Title: '.tile()'
Description: 'Constructs a new array by repeating the input array’s elements a specified number of times.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Linear Algebra'
  - 'Machine Learning'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.tile()`** function constructs a new [array](https://www.codecademy.com/resources/docs/numpy/ndarray) by repeating the input array `A` according to the specified number of repetitions `reps`.

- If `A.ndim < len(reps)`, dimensions of `A` are promoted by prepending ones to match the length of `reps`. For example, an array with shape `(3,)` will be treated as `(1, 3)`.
- If `A.ndim > len(reps)`, the `reps` tuple is extended by prepending ones. For example, `reps=2` is treated as `(1, 2)`.

## Syntax

```pseudo
numpy.tile(A, reps)
```

**Parameters:**

- `A`: The input array.
- `reps`: The number of times the values need to be repeated.

**Return value:**

Returns a new array containing the input array's elements repeated a specific number of times.

## Example: Repeating Elements in 1D, 2D, and 3D Arrays

The following example shows how 1D, 2D, and 3D arrays interact with `.tile()`:

```py
import numpy as np

# Create a 1D array
a = np.array([3,2,1])
print("Shape of a:",np.shape(a))
print("a:",a)

# Use .tile() to repeat the values twice horizontally
b = np.tile(a,2)
print("b:",b)

# Use .tile() to create a 2D array
c = np.tile(a,(1,2))
d = np.tile(a,(2,1))
print("c:",c)
print("d:",d)

# Use .tile() to create a 3D array
e = np.tile(a,(2,1,2))
print("e:",e)

print("\n\n")

# Create a 2D array
m = np.array([[5,7,8],[8,2,0]])
print("Shape of m:",np.shape(m))
print("m:",m)

# Use .tile() to repeat the values twice horizontally
n = np.tile(m,2)
print("n:",n)

# To repeat the values horizontally only
o = np.tile(m,(1,2))
print("o:",o)

# To repeat the values horizontally and vertically
p = np.tile(m,(2,2))
print("p:",p)

# To create a 3D array
q = np.tile(m,(2,1,2))
print("q:",q)
```

This produces the following output:

```shell
Shape of a: (3,)
a: [3 2 1]
b: [3 2 1 3 2 1]
c: [[3 2 1 3 2 1]]
d: [[3 2 1]
 [3 2 1]]
e: [[[3 2 1 3 2 1]]

 [[3 2 1 3 2 1]]]



Shape of m: (2, 3)
m: [[5 7 8]
 [8 2 0]]
n: [[5 7 8 5 7 8]
 [8 2 0 8 2 0]]
o: [[5 7 8 5 7 8]
 [8 2 0 8 2 0]]
p: [[5 7 8 5 7 8]
 [8 2 0 8 2 0]
 [5 7 8 5 7 8]
 [8 2 0 8 2 0]]
q: [[[5 7 8 5 7 8]
  [8 2 0 8 2 0]]

 [[5 7 8 5 7 8]
  [8 2 0 8 2 0]]]
```

## Codebyte Example: Practical Usage of `.tile()`

The following codebyte example shows the usage of the `.tile()` function:

```codebyte/python
import numpy as np

# Create a 1D and 2D array
a = np.array([3,7,6])
b = np.array([[5,-2,8],[8,2,0]])

print("Shape of a:",np.shape(a))
print("a:",a)
print("Shape of b:",np.shape(b))
print("b:",b)

c = np.tile(a,(2,2))
d = np.tile(a,(4,1))
e = np.tile(b,1)
f = np.tile(b,(3,1))

print("\n")
print("c:",c,"\t\n","d:",d,"\t\n")
print("e:",e,"\t\n","f:",f,"\t\n")
```
