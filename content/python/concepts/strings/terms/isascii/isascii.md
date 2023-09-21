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
  - 'paths/data-science'
---

The `.isascii()` string method checks whether all characters in a string are ASCII characters. It returns `True` if all characters in the string are within the ASCII character set, and `False` otherwise.

## Syntax

```pseudo
string.isascii()
```

The `.isascii()` method in Python does not take any arguments. It is a string method that is applied directly to a string, and it checks whether all characters in that string are ASCII characters.

## Example

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
In the above example, for `check_str_A` , the output is `True` because the `.isascii()` function checks if all the characters in the string are ASCII characters. In the case of `check_str_B`, the characters `こんにちは` are non-ASCII characters, so it returns `False`.                                                                                   

## Codebyte Example

Use `.isascii()` to check if if all the characters in a string `my_string` are ASCII characters:

```codebyte/python
my_string = "Learn to code from Codecademy!\n"
print(my_string.isascii())
```