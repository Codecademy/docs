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
  - 'learn-example-course'
  - 'paths/example-path'
---

**`.rindex()`** is used to locate the highest index of the substring within a string variable. ValueError will raise when the substring cannot be found.

## Syntax

The syntax of this function can be shown below :

```pseudo
str_variable.rindex('substring')

str_variable.rindex('substring', index_start, index_end)
```

## Example

The following examples implement `.rindex()` and will return the index location of substring :

```python
# Define the string variable
str_cow = "moo moo"

# Show the results
print(str_cow.rindex('m'))  # return 4

print(str_cow.rindex('o'))  # return 6
```

The index of substring m is found on indices 0 and 4. Therefore, index 4 will be returned.

## Codebyte Example

This example is runnable and demonstrate instance where `.rindex()` will locate the substring between the certain indices :

```codebyte/python
# Define the string variable
str_cow = "moo moo"

# Show the result
print(str_cow.rindex('o', 0, 3))

# Raise the ValueError substring m not found
print(str_cow.rindex('m', 1, 3))
```
