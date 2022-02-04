---
Title: 'endswith()'
Description: 'Checks whether or not a string ends with the given character or string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `endswith()` function in Python, takes in a string or character and checks whether or not the given string variable ends with it and the result is returned as a boolean value.

## Syntax

```py
stringvariable.endswith("string")
```

## Example 1

```py
example= "This is a string"
check = example.endswith("g")
print(check)

# Output: True
```

## Example 2

```py
example= "This is a string"
check = example.endswith("s")
print(check)

# Output: False
```

## Example 3

```py
example= "This is a string"
check = example.endswith("ring")
print(check)

# Output: True
```

## Example 4

```py
example= "This is a string"
check = example.endswith("st")
print(check)

# Output: False
```

**Note:** The `endswith()` function is case-sensitive and is demonstrated by the example given below.

## Example 5

```py
example= "This is a string"
check = example.endswith("G")
print(check)

# Output: False
```
