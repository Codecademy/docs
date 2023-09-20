---
Title: '.isnumeric()' 
Description: 'Verifies all the characters within the string variable are numeric. '
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

**`.isnumeric()`** is used to verify the string variable consists of numerical characters only. Which means no space, comma, dash, or any other characters. This function returns boolean values, **True** or **False**.

## Syntax

There are two ways of using this function:

First
```pseudo
str.isnumeric(str_variable)
```
Second
```pseudo
str_variable.isnumeric()
```

## Example 1

This example shows how `.isnumeric()` function is used and returns **True** value.

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

## Example 2

This example shows how `.isnumeric()` function is used and returns **False** value.

```python
print(str.isnumeric("september"))
print(str.isnumeric("sep2023"))
print(str.isnumeric("sep 2023"))
```

or

```python
# Define the string variables
month = "september"
monthyear = "sep20203"
month_year = "sep 2023"

# Show the results
print(month.isnumeric())
print(monthyear.isnumeric())
print(month_year.isnumeric())
```

## Codebyte Example

This example shows that `.isnumeric()` function returns **False** value whenever there is character other than numeric within the string variable.

```codebyte/python
# Using space on string variable
print(str.isnumeric("20 21"))

# Using comma on string variable
print(str.isnumeric("20,21"))

# Using dash on string variable
print(str.isnumeric("-21"))

```
