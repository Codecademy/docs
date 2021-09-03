---
Title: '.read()'
Description: 'Allows the user to read the contents of an open file.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Files'
  - 'Methods'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.read()` file method allows the user to read the contents of an open file.

## Syntax

```py
file.read()
```

It also returns the number of bytes from the file.

```py
file.read(size)
```

The `size` argument is optional and specifies the number of characters to read. The default `size` is -1, which means the whole file.

## Example 1

Use `.read()` to read the full contents of the **gullivers_travels.txt** file:

```python
f = open("gullivers_travels.txt", "r", encoding='utf8')

f.read()
```

## Example 2

Use `.read()` to read the first 100 characters of the **gullivers_travels.txt** file:

```python
f = open("gullivers_travels.txt", "r", encoding='utf8')

f.read(100)
```
