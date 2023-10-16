---
Title: '.maketrans()'
Description: 'Used to construct the transition table.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.maketrans()`** method is used for creating a translation table that can be used to perform character replacements or translations in strings. This method is particularly useful when you want to replace specific characters or substrings with other characters, or when you want to remove certain characters from a string.

## Syntax

```pseudo
string.maketrans(x,y,z)
```

- `x`: A string containing characters to be replaced.
- `y`: A string containing characters with which `x` needs to be replaced.
- `z`: A string containing characters to be deleted.

The `.maketrans()` method returns a translation table, which can then be used with the `.translate()` method to perform the actual translations or replacements in a string.

## Examples

This example shows the use of `.maketrans()` mathod to replace characters in a string.

```python
trans_table = str.maketrans('aeiou', '12345')

str = "hello world"
newstr = str.translate(trans_table)
print(newstr)
```

This code will result in the following output:

```shell
h2ll4 w4rld
```

## Codebyte Example

The following code is runnable and uses the `.maketrans()` method.

```codebyte/python
trans_table = str.maketrans('aeiou', '12345', 'l')

str = "hello world"
newstr = str.translate(trans_table)
print(newstr)
```
