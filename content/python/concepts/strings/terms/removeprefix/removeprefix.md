---
Title: '.removeprefix()'
Description: 'Returns a copy of a string with the specified prefix removed, if present.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.removeprefix()`** method is a built-in [string](https://www.codecademy.com/resources/docs/python/strings) method that returns a new string with the specified prefix removed, if present. If the string does not start with the given prefix, the original string is returned unchanged. This method is case-sensitive and does not modify the original string.

## Syntax

```pseudo
string.removeprefix(prefix)
```

**Parameters:**

`prefix`: The substring to remove from the beginning of the string.

**Return value:**

A new string with the prefix removed if it exists, otherwise, the original string.

## Example 1: Basic Prefix Removal

In this example, a matching prefix is removed from a string, or the string is left unchanged if no match is found:

```py
original_string = "Python3.9"
result = original_string.removeprefix("Python")
result2 = original_string.removeprefix("JavaScript")

print(original_string)
print(result)
print(result2)
```

The code will produce this output:

```shell
Python3.9
3.9
Python3.9
```

## Example 2: Cleaning file paths

In this example, a base directory path is stripped from a full file path to get a relative path:

```py
base_path = "/home/user/"
absolute_file = "/home/user/project/data/file.txt"
relative_file = absolute_file.removeprefix(base_path)

print(relative_file)
```

The code will produce this output:

```shell
project/data/file.txt
```

## Example 3: Manual vs built-in removal

In this example, a prefix is removed manually with [`.startswith()`](https://www.codecademy.com/resources/docs/python/strings/startswith) and then using `.removeprefix()` for comparison:

```codebyte/python
phrase = "Python is Awesome"
prefix = "Python"

# Approach 1: Manual removal
if phrase.startswith(prefix):
  result = phrase[len(prefix):]
  print(result.strip())
else:
  print(phrase)

# Approach 2: Using removeprefix()
result2 = phrase.removeprefix(prefix)
print(result2.strip())
```
