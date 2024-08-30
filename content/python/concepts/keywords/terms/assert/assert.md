---
Title: 'assert'
Description: 'Confirms the truthiness of a given statement.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Assert'
  - 'Debugging'
  - 'Development'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`assert`** keyword confirms the truthiness of a given statement and is often used to facilitate development, document code, and debug.

## Syntax

```pseudo
assert some_condition, assert_message
```

The `assert` keyword is followed by `some_condition` to be tested, such as validating a data type or membership within a given container. An optional `assert_message` can be added that will be printed when the assertion error is raised.

## Example

The `assert` keyword can be used to validate a value (or evaluate some other condition):

```py
fav_color = 'blue'

assert fav_color == 'red'

# Output: AssertionError
```

## Codebyte Example

The following example uses `assert` to evaluate if `'mud'` is within the following list `things_that_float`:

```codebyte/python
things_that_float = ['bread', 'apples', 'small rocks']

assert 'mud' in things_that_float, 'this string is not present in the list'
```
