---
Title: 'Tuple'
Description: 'A tuple in computer science is a data structure consisting of an ordered collection of an arbitrary number of elements.'
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

A tuple in computer science is a data structure consisting of an ordered collection of an arbitrary number of elements. A tuple of N elements is generally referred to as an N-tuple. Many computer languages implement a tuple as its own structure or object type. Such tuples are generally ordered collections of elements that are themselves different object types.

A tuple implementation in any programming language typically has the following characteristics:

- It can contain any data or object type in any combination.
- It allows duplicate entries.
- It has a specified order.
- It is immutable and cannot have its elements change once it is defined.
- Its elements are iterable.
- Instances are not equal unless they consist of the same members in the same order. (i.e. (1,2,3) <> (3,2,1))
- 
Some languages, such as [Python](https://www.codecademy.com/resources/docs/python), have built-in support for tuples, while other languages, such as [Java](https://www.codecademy.com/resources/docs/java), don't have built-in support for tuples and need to define a class, or import a special library to implement them.

## Examples

The following defines three different tuples in Python.

```python
a = (1, 2, 3)
b = ('x', 23, [0,6,15])
c = (a, b)
```
