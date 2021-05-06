---
Title: "Data Types in Python"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Conditionals"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
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

```
<class 'str'>
```
