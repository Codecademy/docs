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

In programming, data type is an important concept.

Variables can store data of different types, and different types can do different things.

Python has the following data types built-in by default, in these categories:

- Text Type: `str`
- Numeric Types: `int`, `float`, `complex`
- Boolean Type: `bool`
- Sequence Types: `list`, `tuple`, `range`
- Mapping Type: `dict`
- Set Types: `set`, `frozenset`
- Binary Types: `bytes`, `bytearray`, `memoryview`

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
