---
Title: 'str()'
Description: 'Takes in a value that can be converted into a string, and returns a copy of the value in the string datatype.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Takes in a value that can be converted into a string, and returns a copy of the value in the `string` datatype. If nothing is passed into `str()`, then an empty string is returned.

## Syntax

```py
str(object)
```

## Example 1

The `str()` function can change the datatype of a `float` value, `314.0`, into a string:

```python
print(str(314.0))
```

## Example 2

The `str()` function can also wrap around other type conversions.

```codebyte/python
print(str(int(3.14)))
```
