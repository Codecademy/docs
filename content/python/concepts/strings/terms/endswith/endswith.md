---
Title: '.endswith()'
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

TThe `.endswith()` method returns `True` if a particular value is attached to the end of a given string. Otherwise, it returns `False`.

## Syntax

Given a  `string`, the `.endswith()` method can be used in the following way:

The `value` is required argument that is checked for whether it exists at the beginning of the `string`.  It is also case-sensitive.

Conversely, the `value` can be tested whether it is the end of a particular substring of `string` by using the optional `start` and `end` index arguments.

## Examples

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

## Codebyte example

```codebyte/py

example_A = "This is a string"
check_A = example_A.endswith("ring")
print(check_A)

// .endswith() is case-sensitive

example_B = "This is a string"
check_B = example_B.endswith("G")
print(check_B)
```
