---
Title: "Data Types"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Data Types"
  - "Integers"
  - "Booleans"
  - "Strings"
CatalogContent:
  - "learn-python-3"
  - "paths/computer-science"
---

Python is a strong, dynamically type language. 

Strong typing means that the type of a value doesn't change in unexpected ways. A string containing only digits doesn't magically become a number, as may happen in Perl. Every change of type requires an explicit conversion.
Dynamic typing means that runtime objects (values) have a type, as opposed to static typing where variables have a type.

```py
bob = 1
bob = "bob"
```

Even though, it has the following data types built-in by default:

- String type: `str`
- Boolean type: `bool`
- Binary types: `bytes`, `bytearray`, `memoryview`
- Numeric types: `int`, `float`, `complex`
- Sequence Types: `list`, `tuple`, `range`
- Mapping type: `dict`
- Set types: `set`, `frozenset`

## Type() Function

To find the data type of any object, the `type()` function can be used:

```py
message = "Hello, world!"

print(type(message))
```

This will output:

```shell
<class 'str'>
```
