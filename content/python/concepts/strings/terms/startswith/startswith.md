---
Title: '.startswith()'
Description: 'Checks whether or not a string starts with a given value.'
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

The `.startswith()` method checks a value against a given string and returns `True` if the string starts with that value. Otherwise, it returns `False`.

## Syntax

```pseudo
string.startswith(value, start, end)
```

Given a string, the `.startswith()` method can be used in the following way:

- The required `value` argument, which is checked if it exists at the beginning of the string. It is also case-sensitive.

- Optionally, the `value` can be tested for whether it is at the beginning of a particular substring within the string using the `start` and `end` index arguments.

## Example

```py
example_str = "This is a string"

check_A = example_str.startswith("T")
check_B = example_str.startswith("h")
check_C = example_str.startswith("st", 10, 14)

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

From the above example, for `check_A` the output is `True` as the `.startswith()` function checks whether the `example_str` string starts with the character "T".

## Codebyte Example

```codebyte/python
example_A = "This is a string"
check_A = example_A.startswith("This")
print(check_A)

example_B = "This is a string"
check_B = example_B.startswith("t")
print(check_B)
```
