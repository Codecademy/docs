---
Title: '.isdigit()'
Description: 'Checks if all the elements in the string are digits and returns a boolean flag.'
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
The **`.isdigit()`** method under the string class checks if all the elements in the string are digits, applicable elements also include special cases like compatibility superscript digits. The method returns `True` in the above cases and also requires at least one character in the string. Returns `False` otherwise.

## Syntax

```pseudo
string.isdigit()
```

## Example
Use `.isdigit()` to check if a string contains only digits:
```py
my_string1 = "123"
my_string2 = "123AA"

print(my_string1.isdigit())
print(my_string2.isdigit())
```
## Output
```shell 
True
False
```

## Codebyte Example

The code below is runnable and uses `.isdigit()` to check `my_string`:

```codebyte/python
my_string = "!--1234--\n"
print(my_string.isdigit())
```