---
Title: 'bool()'
Description: 'Converts a value to a Boolean True or False value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Converts a value to a Boolean `True` or `False` value.

## Syntax

```py
bool(object)
```

Standard truth testing procedures are applied to values to determine their Boolean value. Statements are `True` if they do not meet one or more of these criteria:

- If a `False` boolean value is passed.
- If `None` is passed.
- If a quantitative zero is passed, such as `0` or `0.0`.
- If an empty sequence or mapping is passed, such as `()`, `[]`, or `{}`.
- If Objects of Classes having `bool()` or `len()` method, returning `0` or `False` are passed.

## Example 1

Use `bool()` function to return the boolean expression of the string `'True'`:

```python
print(bool('True'))

# Output: True
```

## Example 2

Use `bool()` function to return the boolean expression of the string `'False'`:

```python
print(bool('False'))

# Output: False
```

## Example 3

Use `bool()` to return the boolean expression of the integer `0`:

```codebyte/python
print(bool(0))
```
