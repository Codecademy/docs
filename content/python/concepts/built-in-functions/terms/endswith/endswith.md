---
Title: 'endswith()'
Description: 'Checks whether or not a string ends with the given value.'
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

The `endswith()` string method checks to see if a particular value is attached to the end of the string it is called on and returns a boolean value.

## Syntax

```pseudo
string.endswith(value, start, end)
```
## Parameters

- `value` (required):  value to be checked at the end of the string
- `start` (optional): specifies the starting index
- `end` (optional): specifies the ending index

## Example 1

Checking for the value `g` at the end of the string, `example`:

```py
example = "This is a string"
check = example.endswith("g")
print(check)

# Output: True
```

## Example 2

Checking for the value `s`:

```py
example = "This is a string"
check = example.endswith("s")
print(check)

# Output: False
```

## Example 3

Checking for the value `ring`:

```py
example = "This is a string"
check = example.endswith("ring")
print(check)

# Output: True
```

## Example 4

The following checks for `st` and has a starting index of `5` and an ending index of `12`:

```py
example = "This is a string"
check = example.endswith("st", 5, 12)
print(check)

# Output: True
```

**Note:** The `endswith()` function is case-sensitive and is demonstrated by the example given below.

## Example 5

```py
example = "This is a string"
check = example.endswith("G")
print(check)

# Output: False
```
