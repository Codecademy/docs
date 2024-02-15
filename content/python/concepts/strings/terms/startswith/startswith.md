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

The **`.startswith()`** method checks a value against a given string and returns `True` if the string starts with that value. Otherwise, it returns `False`.

## Syntax

```pseudo
string.startswith(value, start, end)
```

Given a string, the `.startswith()` method can be used in the following way:

- The required `value` argument is checked for existence at the beginning of the `string`. It is also case-sensitive.
- Optionally, a `start` and `end` index argument can be declared. The `value` is then checked for existence at the beginning of the substring from the `string`'s `start` and `end` indices.

## Example

```py
example_str = "This is a string"

check_A = example_str.startswith("T")
check_B = example_str.startswith("t")

print("A: ", check_A)
print("B: ", check_B)
```

The output will look like this:

```shell
A: True
B: False
```

In the example above, `check_A` is `True` since the `example_str` string starts with the character `"T"`.

## Codebyte Example

```codebyte/python
example_A = "This is a string"
check_A = example_A.startswith("This")
print(check_A)

example_B = "This is a string"
check_B = example_B.startswith("t")
print(check_B)

example_C = "This is a string"
check_C = example_C.startswith("st", 10, 14)
print(check_C)
```
