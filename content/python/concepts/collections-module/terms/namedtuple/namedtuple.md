---
Title: 'namedtuple'
Description: 'A tuple subclass with named fields'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Tuples'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **namedtuple** is a data type in the `collections` module. It is a [`tuple`](https://www.codecademy.com/resources/docs/python/tuples) subclass that allows you to create immutable objects with named fields. This improves code readability by providing meaningful names for each element and making the code more explicit.

## Syntax

```pseudo
namedtuple(typename, field_names)
```

The field names are made by a list of strings such as ['a', 'b', 'c'].

Field names can alternatively be a string of several elements separated by a comma or a space.

## Additional Methods

There are 3 specific `namedtuple` methods in addition to the standard methods inherited from tuples. All methods begin with an underscore to avoid conflicts with field names.

-`._make(iterable)`: (Class method) Creates a new instance based on an existing sequence or iterable.

-`._asdict()`: Returns a [`dict`](https://www.codecademy.com/resources/docs/python/dictionaries) with matching field names and values.

-`._replace(kwarg)`: Returns a new instance with fields replaced by the value provided as a keyword argument.

There are 2 specific attributes `._fields` and `_field_defaults` that will allow you respectively to list field names and to return a [`dict`](https://www.codecademy.com/resources/docs/python/dictionaries) with field names related to their default values.

## Example

This define a `namedtuple` codecademyStudent with two fields (username and courses) to create two student instances. Two sentences will then be displayed about each student and their attributes.

```py
from collections import namedtuple

codecademyStudent = namedtuple('codecademyStudent', ['username', 'courses'])

student1 = codecademyStudent(username='Foo', courses=['Python', 'Computer Science'])
student2 = codecademyStudent(username='Bar', courses=['Javascript', 'Web Development'])

print("Student 1:", "Username:", student1.username, "| Courses involvement:", student1.courses)
print("Student 2:", "Username:", student2.username, "| Courses involvement:", student2.courses)
```

This example results in the following output:

```shell
Student 1: Username: Foo | Courses involvement: ['Python', 'Computer Science']
Student 2: Username: Bar | Courses involvement: ['Javascript', 'Web Development']
```

## Codebyte Example

The following example creates a `namedtuple` instance from an iterable, then changes one of its assigned values, and returns a [`dict`](https://www.codecademy.com/resources/docs/python/dictionaries) with the default preset values.

```codebyte/python
from collections import namedtuple

numbers = [0, 1, 2]
myNamedTuple = namedtuple('myNamedTuple', ['a', 'b', 'c'], defaults=[0, 2, 4])
myNamedTuple_numbers = myNamedTuple._make(numbers)

print(myNamedTuple_numbers._fields)
print("---")
print(myNamedTuple_numbers)
print(myNamedTuple_numbers.c)
print(myNamedTuple_numbers._asdict())
print("---")
print(myNamedTuple_numbers._replace(c=3))
print("---")
print(myNamedTuple._field_defaults)
```
