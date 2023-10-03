---
Title: '.rindex()'
Description: 'Locates the highest index of the substring within a string variable.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`.rindex()`** is used to locate the highest index of the substring within a string variable. `ValueError` will be raised when the substring cannot be found.

## Syntax

The syntax of the function takes the followig formats:

```pseudo
str_variable.rindex('substring')

str_variable.rindex('substring', index_start, index_end)
```

Where substring is a substring value that its highest index wants to be located. index_start and index_end are optional values when we have a specific index range.

## Example

The following examples implement `.rindex()` and will return the index location of substring:

```python
# Define the string variable
str_cow = "moo moo"

# Show the results
print(str_cow.rindex('m'))

print(str_cow.rindex('o'))
```

This will result in the following output:

```shell
4
6
```

## Codebyte Example

This example is runnable and demonstrate an instance where `.rindex()` will locate the substring between the given indices:

```codebyte/python
# Define the string variable
str_cow = "moo moo"

# Show the result
print(str_cow.rindex('o', 0, 3))

# Raise the ValueError substring m not found
print(str_cow.rindex('m', 1, 3))
```
