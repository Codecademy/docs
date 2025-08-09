---
Title: '.removeprefix()'
Description: 'Returns a new string with the prefix removed. If the string does not start with the specified prefix, the original string is returned unchanged.'
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

The **`.removeprefix()`** method is a built-in [`string`](https://www.codecademy.com/resources/docs/python/strings) method introduced in Python 3.9. It removes a specified prefix from the beginning of a string, but only if the string starts with that prefix.

## Syntax

```pseudo
string.removeprefix(prefix)
```

**Parameters:**

`prefix` (required): The substring to remove from the beginning of the string.

**Return value:**

Returns a new string with the prefix removed. If the string does not start with the specified prefix, the original string is returned unchanged.

## Example 1: Basic Prefix Removal

This example prints the `original_text` variable and the results of using `.removeprefix()` with a matching prefix (`result`), and a non-matching one (`result2`).

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

## Example 2: Clean File Paths

In this example, the `.removeprefix()` method is applied to the `absolute_file` variable, using `base_path` as the prefix, and the resulting string is assigned to the `relative_file` variable. Since the `absolute_file` starts with the given prefix, the method removes it successfully. Then, it prints the relative path of the file.

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

## Codebyte Example

In this code example, two approaches to removing a prefix from a string are demonstrated.

The first approach doesn't use the `.removeprefix()` method, instead relying on the [`.startswith()`](https://www.codecademy.com/resources/docs/python/strings/startswith) method in an [`if...else`](https://www.codecademy.com/resources/docs/python/conditionals) statement. If the `phrase` variable starts with the specified prefix, the `result` variable will contain the string without the prefix, which is then printed to the console using the [`.strip()`](https://www.codecademy.com/resources/docs/python/strings/strip) method to remove trailing whitespace. If the condition is false, the original string is printed unchanged. The second approach uses the `.removeprefix()` method:

```codebyte/python
phrase = "Python is Awesome"
prefix = "Python"

# Approach 1

if phrase.startswith(prefix):
    result = phrase[len(prefix):]
    print(result.strip())
else:
    print(phrase)

# Approach 2

result = phrase.removeprefix(prefix)
print(result.strip())
```

The `.removeprefix()` method is a more concise way to remove the prefix, eliminating the need for manual slicing.
