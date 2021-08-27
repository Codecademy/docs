---
Title: 'bytearray()'
Description: 'Returns an array of the given bytes of an object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Encoding'
  - 'Arrays'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Returns an array of the given bytes of an object.

## Syntax

```py
bytearray(source, encoding, error)
```

## Parameters

- `source` (optional): specifies the source to initialize the bytearray.
- `encoding`(optional): specifies the encoding method of the object.
- `errors` (optional): specifies the action to take in case of error.

## Example 1

Use `bytearray()` to encode the string `"Welcome to Codecademy!"` to unicode `utf-8` and `utf-32`, and print the length of each bytearray. Note that a `source` and `encoding` parameter must be provided for encoding `string` data:

```python
array_1 = bytearray("Welcome to Codecademy!", "utf-8")
array_2 = bytearray("Welcome to Codecademy!", "utf-32")

print(array_1)
print(len(array_1))

print(array_2)
print(len(array_2))
```

The output would be:

```
bytearray(b'Welcome to Codecademy!')
22

bytearray(b'\xff\xfe\x00\x00W\x00\x00\x00e\x00\x00\x00l\x00\x00\x00c\x00\x00\x00o\x00\x00\x00m\x00\x00\x00e\x00\x00\x00 \x00\x00\x00t\x00\x00\x00o\x00\x00\x00 \x00\x00\x00C\x00\x00\x00o\x00\x00\x00d\x00\x00\x00e\x00\x00\x00c\x00\x00\x00a\x00\x00\x00d\x00\x00\x00e\x00\x00\x00m\x00\x00\x00y\x00\x00\x00!\x00\x00\x00')
92
```

## Example 2

Use `bytearray()` to encode the integer `5`, and print the length of the bytearray:

```codebyte/python
print(bytearray(5))
print(len(bytearray(5)))
```

## Example 3

Use `bytearray()` to encode the list of integers `[5, 6, 7]`, and print the length of the bytearray:

```codebyte/python
grocery_list = [5, 6, 7]

print(bytearray(grocery_list))
print(len(bytearray(grocery_list)))
```
