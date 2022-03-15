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

Given a string, the `.endswith()` method can be used in the following way:

- The required `value` argument, which is checked if it exists at the end of the string. It is also case-sensitive.

- Optionally, the `value` can be tested for whether it is at the end of a particular substring within the string using the `start` and `end` index arguments.

## Example

```py
example_str = "This is a string"

check_A = example_str.endswith("g")
check_B = example_str.endswith("s")
check_C = example_str.endswith("st", 5, 12)

print("A: ", check_A)
print("B: ", check_B)
print("C: ", check_C)
```

The output will look like this:

```shell
A: True
B: False
C: True
```

From the above example, for `check_A` the output is `True` as the `.endswith()` function checks whether the `example_str` string ends with the character "g".

## Codebyte Example

```codebyte/python
example_A = "This is a string"
check_A = example_A.endswith("ring")
print(check_A)

example_B = "This is a string"
check_B = example_B.endswith("G")
print(check_B)
```
