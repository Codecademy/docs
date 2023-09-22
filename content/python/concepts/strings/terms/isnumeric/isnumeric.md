---
Title: '.isnumeric()'
Description: 'Verifies that all the characters within the string variable are numeric.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`.isnumeric()`** is used to verify that the string variable consists of numerical characters only. Which means the string cannot contain a space, comma, dash, or any other characters that are not numerical.

## Syntax

There are two ways of using this function:

```pseudo
str.isnumeric(str_variable)

str_variable.isnumeric()
```

## Example

The following examples implement `.isnumeric()` and will return `True`:

```python
print(str.isnumeric("2"))
print(str.isnumeric("½"))
print(str.isnumeric("2023"))
```

or

```python
# Define the string variables
num = "2"
one_half = "½"
year = "2023"

# Show the results
print(num.isnumeric())
print(one_half.isnumeric())
print(year.isnumeric())
```

## Codebyte Example

This example is runnable and demonstrates instances where non-numeric values are passed into the `.isnumeric()` function:

```codebyte/python
# A string that includes a space
print(str.isnumeric("20 21"))

# A string that includes a comma
print(str.isnumeric("20,21"))

# A string that includes a dash
print(str.isnumeric("-21"))
```
