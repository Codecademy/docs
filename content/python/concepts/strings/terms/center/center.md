---
Title: '.center()'
Description: 'Returns a new string with the specified padding.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.center()`** string method returns a new string that has been amended with padding. The padding is allocated evenly to both sides of the string, depending on the overall length specified. The default padding is whitespace, but any character may be used, including numbers or symbols.

## Syntax

```pseudo
string.center(length, 'character')
```

The `length` parameter is required and must be an integer. This will be the length of new string.
The `.center()` method accepts an optional `'character'` parameter. If no `character` is specified the default is whitespace.

## Example

In the following example the `.center()` method is used to create a string that has a length of 10 characters. The padding character is a '+':

```python
str = "Hello"
new_str = str.center(11, '+')
print(new_str)
```

The above example will show the following output:

```shell
+++Hello+++
```

## Codebyte Example

The below example shows what happens when the `length` parameter specified in the `.center()` method isn't long enough to create a new padded string. The new string is unchanged, as the length of the original string is less than that of the specified one in the `length` parameter.

```codebyte/python
str1 = "Programming is fun!"

new_str = str1.center(8)

print(new_str)
```
