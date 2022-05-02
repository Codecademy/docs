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
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

An `ndarray` is a multi-dimensional array of items of the same type and size. The number of dimensions and items contained in the array is defined with a [`tuple`](https://www.codecademy.com/resources/docs/python/tuples) of N non-negative integers that specify each dimension's size. An `ndarray` is has an associated data-type object which specifies the `dtype` stored in the `ndarray`.

Like other container objects in Python, `ndarray` items can be accessed by indexing and slicing the array. There are also a large number of methods and attributes of the `ndarray` that can be used to access and manipulate its contents.

Separate instances of an `ndarray` can share contents so that changes in one `ndarray` can be reflected in another. This happens when an `ndarray` is created as a "view" of another `ndarray` known as the "base".

## Creating a `ndarray`

There are several routines for creating `ndarray` objects. These are preferred to using the `ndarray` constructor, which operates at a very low level. Here are a few examples.

Method|Syntax|Description
------|------|-----------
`empty()`|`numpy.empty(shape,dtype)`|Creates a `ndarray` of the given `shape` tuple, and the optional `dtype` (default is `numpy.float64`) with uninitalized values.
`empty_like()`|`numpy.empty_like(model,dtype)`|Creates a `ndarray` based on the `shape` of the `model`, with the optional `dtype` (default is data type of `model`) with uninitalized values.
`ones()`|`ones(shape,dtype)|Operates the same as `empty()`, but initalizes all the array elements with a value of one.
`ones_like()`|`numpy.ones_like(model,dtype)`|Operates the same as `empty_like()`, but initalizes all the array elements with a value of one.
`zeros()`|`zeros(shape,dtype)|Operates the same as `empty()`, but initalizes all the array elements with a value of zero.
`zeros_like()`|`numpy.zeros_like(model,dtype)`|Operates the same as `empty_like()`, but initalizes all the array elements with a value of zero.
`full()`|`full(shape,value,dtype)|Operates the same as `empty()`, but initalizes all the array elements with the specified `value`.
`full_like()`|`numpy.full_like(model,value,dtype)`|Operates the same as `empty_like()`, but initalizes all the array elements with the specified `value`.
`array()`|`numpy.array(object,dtype)`|Creates an `ndarray` based on the given `object` (such as a list of lists) with the optional `dtype` if not specified, the data type will be based on the contents of `object`.


