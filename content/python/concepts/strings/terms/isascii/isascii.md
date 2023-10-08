---
Title: '.isascii()'
Description: 'Returns True if all characters in a string are ASCII characters; otherwise, it returns False.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.isascii()`** string method checks whether all characters in a string are ASCII characters. It returns `True` if all characters in the string are within the ASCII character set, and `False` otherwise.

## Syntax

```pseudo
string.isascii()
```

The `.isascii()` method in Python does not take any arguments.

## Example

The **`.isascii()`** method is called on each of these strings to determine whether they consist solely of ASCII characters. This method returns `True` if all characters in the string are ASCII characters and `False` if there are any non-ASCII characters present.

```py
check_str_A = "This is an ASCII string"
check_str_B = "This contains non ASCII characters こんにちは"

print("A: ", check_str_A.isascii())
print("B: ", check_str_B.isascii())
```

The output will look like this:

```shell
A: True
B: False
```
