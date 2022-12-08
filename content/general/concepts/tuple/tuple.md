---
Title: 'Tuple'
Description: 'A tuple is a data structure consisting of an ordered collection with an arbitrary number of elements.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Tuples'
  - 'Data Structures'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In computer science, a **tuple** is a data structure consisting of an ordered collection with an arbitrary number of elements. A tuple of "N" elements, where "N" is a positive integer, is generally referred to as an N-tuple. Many computer languages implement a tuple as its own structure or object type.

Typically, a tuple implementation in any programming language has the following characteristics:

- It can contain an [object](https://www.codecademy.com/resources/docs/general/object) or any other [data type](https://www.codecademy.com/resources/docs/general/data-types) in any combination.
- It allows duplicate entries.
- It has a specified order, determined by the order of elements during creation.
- It is immutable and cannot have its elements changed once it is defined.
- Its elements are iterable.
- Instances are not equal unless they consist of the same members in the same order. (i.e. (1,2,3) <> (3,2,1))

Some languages, such as [Python](https://www.codecademy.com/resources/docs/python), have built-in support for tuples, while other languages, such as [Java](https://www.codecademy.com/resources/docs/java), don't have built-in support for tuples and need to define a class, or import a special library to implement them.

Languages with built-in support for tuples include:

- [Python](https://www.codecademy.com/resources/docs/python/tuples)
- [Swift](https://www.codecademy.com/resources/docs/swift/tuples)
- [TypeScript](https://www.codecademy.com/resources/docs/typescript/tuples)

## Example

The following defines three different tuples in Python:

```py
a = (1, 2, 3)
b = ('x', 23, [0,6,15])
c = (a, b)
```
