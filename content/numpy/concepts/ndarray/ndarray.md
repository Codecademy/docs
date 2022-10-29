---
Title: 'ndarray'
Description: 'An ndarray is a multi-dimensional array of items of the same type and size.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Arrays'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

An **`ndarray`** is a multi-dimensional array of items of the same type and size. The number of dimensions and items contained in the array is defined with a [`tuple`](https://www.codecademy.com/resources/docs/python/tuples) of N non-negative integers that specify each dimension's size. An `ndarray` has an associated data-type object which specifies the `dtype` stored in the `ndarray`.

Like other container objects in Python, `ndarray` items can be accessed by indexing and slicing the array. There are also a large number of methods and attributes of the `ndarray` that can be used to access and manipulate its contents.

Separate instances of an `ndarray` can share contents so that changes in one `ndarray` can be reflected in another. This happens when an `ndarray` is created as a "view" of another `ndarray` known as the "base".

## Creating a `ndarray`

There are several routines for creating `ndarray` objects. These are preferred to using the `ndarray` constructor, which operates at a very low level. Here are a few examples:

|     Method      | Syntax                               | Description                                                                                                                                                                      |
| :-------------: | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `.empty()`    | `numpy.empty(shape,dtype)`           | Creates a `ndarray` of the given `shape` tuple, and the optional `dtype` (default is `numpy.float64`) with uninitialized values.                                                 |
| `.empty_like()` | `numpy.empty_like(model,dtype)`      | Creates a `ndarray` based on the `shape` of the `model`, with the optional `dtype` (default is data type of `model`) with uninitialized values.                                  |
|    `.ones()`    | `numpy.ones(shape,dtype)`            | Operates the same as `.empty()`, but initializes all the array elements with a value of one.                                                                                     |
| `.ones_like()`  | `numpy.ones_like(model,dtype)`       | Operates the same as `.empty_like()`, but initializes all the array elements with a value of one.                                                                                |
|   `.zeros()`    | `numpy.zeros(shape,dtype)`           | Operates the same as `.empty()`, but initializes all the array elements with a value of zero.                                                                                    |
| `.zeros_like()` | `numpy.zeros_like(model,dtype)`      | Operates the same as `.empty_like()`, but initializes all the array elements with a value of zero.                                                                               |
|    `.full()`    | `numpy.full(shape,value,dtype)`      | Operates the same as `.empty()`, but initializes all the array elements with the specified `value`.                                                                              |
| `.full_like()`  | `numpy.full_like(model,value,dtype)` | Operates the same as `.empty_like()`, but initializes all the array elements with the specified `value`.                                                                         |
|   `.array()`    | `numpy.array(object,dtype)`          | Creates an `ndarray` based on the given `object` (such as a list of lists) with the optional `dtype`. If not specified, the data type will be based on the contents of `object`. |

### Example

The following shows various methods of creating an `ndarray`.

```py
import numpy as np

nd1 = np.array([[1,2,3],[4,5,6],[7,8,9]])
nd2 = np.ones_like(nd1)
nd3 = np.full((2,2),5)

print(nd1)
print(nd2)
print(nd3)
```

This produces the following output:

```shell
[[1 2 3]
 [4 5 6]
 [7 8 9]]

[[1 1 1]
 [1 1 1]
 [1 1 1]]

[[5 5]
 [5 5]]
```

## Operations on an `ndarray`

The standard mathematical [operations](https://www.codecademy.com/resources/docs/python/operators), when applied to `ndarrays` are evaluated internally as equivalent universal functions ("ufuncs") which are functions that operate on `ndarrays` on an element-by-element basis. There are over 60 of these universal functions and there are ufuncs for each mathematical operation. Some of the most popular operations are summarized below:

| Operator | Ufunc                     | Description                                                                         |
| :------: | ------------------------- | ----------------------------------------------------------------------------------- |
|   `+`    | `numpy.add(X,Y)`          | Adds arguments, element-wise.                                                       |
|   `-`    | `numpy.subtract(X,Y)`     | Subtracts arguments, element-wise.                                                  |
|   `*`    | `numpy.multiply(X,Y)`     | Multiplies arguments, element-wise.                                                 |
|   `/`    | `numpy.divide(X,Y)`       | Division of arguments, element-wise.                                                |
|   `**`   | `numpy.power(X,Y)`        | First array raised to powers of second array, element-wise.                         |
|   `%`    | `numpy.mod(X,Y)`          | Integer remainder of division, element-wise.                                        |
|   `//`   | `numpy.floor_divide(X,Y)` | Integer result of division, rounded down, element-wise.                             |
|   `@`    | `numpy.matmul(X,Y)`       | Matrix multiplication of arguments. (The `@` operator was introduced in Python 3.5) |

### Example

The following example creates an `ndarray` and performs several operations on it.

```py
import numpy as np

nd1 = np.array([[1,2,3],[4,5,6],[7,8,9]])

print(nd1)
print(nd1 + 5)
print(nd1 % 2)
print(np.matmul(nd1, nd1 % 2))
```

This produces the following output:

```shell
[[1 2 3]
 [4 5 6]
 [7 8 9]]

[[ 6  7  8]
 [ 9 10 11]
 [12 13 14]]

[[1 0 1]
 [0 1 0]
 [1 0 1]]

[[ 4  2  4]
 [10  5 10]
 [16  8 16]]
```
