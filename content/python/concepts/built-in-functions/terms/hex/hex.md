---
Title: 'hex()'
Description: 'Converts an integer number to a lowercase hexadecimal string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`hex()`** function converts an integer number to a hexadecimal string with the prefix `0x`.

## Syntax

```pseudo
hex(integer)
```

The value `integer` is the value the `hex()` function will convert to a hexidecimal string.

## Codebyte Example

In the code below the `hex()` function is used to convert a list `arr` of integers to hexadecimal.

```codebyte/python
arr = [1, 100, -200, 5834]

for n in arr:
    print(hex(n))
```
