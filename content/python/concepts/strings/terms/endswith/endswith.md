---
Title: '.endswith()'
Description: 'Checks whether or not a string ends with a given value.'
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

The `.endswith()` method checks a value against a given string and returns `True` if the string ends with that value. Otherwise, it returns `False`.

## Syntax

```pseudo
string.endswith(value, start, end)
```

Given a `string`, the `.endswith()` method can be used in the following way:

The `value` is a required argument that is checked if it exists at the end of the `string`.  It is also case-sensitive.

Optionally, the `value` can be tested for whether it is at the end of a particular substring within the `string`. This is done within the `start` and `end` index arguments.

## Example

The following checks for the value `g` at the end of the `example` string:

```py
example = "This is a string"
check = example.endswith("g")
print(check)

# Output: True
```

This example returns `False` after checking for the value `s`:

```py
example = "This is a string"
check = example.endswith("s")
print(check)

# Output: False
```

The following checks for `st` and has a starting index of `5` and an ending index of `12`:

```py
example = "This is a string"
check = example.endswith("st", 5, 12)
print(check)

# Output: True
```

## Codebyte Example

```codebyte/python

example_A = "This is a string"
check_A = example_A.endswith("ring")
print(check_A)

example_B = "This is a string"
check_B = example_B.endswith("G")
print(check_B)
```
