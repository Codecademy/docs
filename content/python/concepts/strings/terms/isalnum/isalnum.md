---
Title: '.isalnum()'
Description: 'Returns True if all the characters in a given string are alphanumeric.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.isalnum()`** string method takes in a string and returns `True` if all the characters are alphanumeric (`A-Z`, `a-z`, `0-9`). Otherwise, it returns `False` if the string contains any non-alphanumeric characters (e.g. `@ # $ % - *`).

## Syntax

```pseudo
my_string.isalnum()
```

This method does not have any parameters.

## Example

The examples below use `.isalnum()` to check if all the characters are alphanumeric:

```py
my_string = "AlphaNumeric001"
print(my_string.isalnum())
```

The code above will result in the following output:

```shell
True
```

## Codebyte Example

The code below is runnable and uses the `.isalnum()` method:

```codebyte/python
my_string_1 = "string2023"
print(my_string_1.isalnum())

my_string_2 = "@lpha"
print(my_string_2.isalnum())
```
