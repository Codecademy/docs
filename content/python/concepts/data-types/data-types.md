---
Title: 'Data Types'
Description: 'Python is a strongly typed language. At runtime, it prevents typing errors and engages in little implicit type conversion.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Python is a strongly typed language, in the sense that at runtime it prevents typing errors and it engages in little implicit type conversion or [casting](https://www.codecademy.com/resources/docs/python/casting), i.e. converting one type to another without a specific call to a conversion function.

```py
codecademy = 575
codecademy = "575 broadway"
```

After line 1, `codecademy` is an `int`. After line 2, `codecademy` is a `str`.

Python includes the following categories of built-in data types:

- String type: `str`
- Boolean type: `bool`
- Binary types: `bytes`, `bytearray`, `memoryview`
- Number types: `int`, `float`, `complex`
- Sequence Types: `list`, `range`, `tuple`
- Set types: `set`, `frozenset`
- Dictionary type: `dict`

## type()

The `type()` function can be used to retrieve the data type of an object:

```py
message = "Hello, world!"

print(type(message))
# Output: <class 'str'>
```

## isinstance()

The `isinstance()` function can be used to test if an object is an instance of a specified type. This will print a boolean value for each function call, indicating if the object is an instance of the given type:

```py
word = "purple"
languages = ("Python", "JavaScript", "Go")

print(isinstance(word, str)) # Output: True
print(isinstance(languages, list)) # Output: False
print(isinstance(languages, tuple)) # Output: True
```
