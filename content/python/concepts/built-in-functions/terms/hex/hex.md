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

```py
hex(integer)
```

## Example 1
Use `hex()` function to convert the integer `31` to hexidecimal
```python
n = hex(31)
print(n)

#output: '0x1f'
```
## Example 2
Print the hexidecimal converted values of the array `[1, 100, -200, 5834]` 
```codebyte/python
arr = [1, 100, -200, 5834]

for n in arr:
    print(hex(n))
```
