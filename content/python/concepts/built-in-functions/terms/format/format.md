---
Title: '.format()'
Description: 'Used to format different types of objects into strings.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
  - 'built-in-functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`format()`** function returns a string from an input value, formatted to the provided specifications.

## Syntax

```pseudo
format(value, format_specification)
```

Where `value` is the value to format, and `format_specification` is the format specification to use.

Example format specifiers:

| Specifier | Meaning                                |
| :-------: | -------------------------------------- |
|    `b`    | Binary format.                         |
|    `d`    | Decimal format.                        |
|    `e`    | Scientific format with lower case "e". |
|    `E`    | Scientific format with upper case "e". |
|    `f`    | Fixed-point format.                    |
|    `g`    | General format.                        |
|    `x`    | Hex format, lower case.                |
|    `X`    | Hex format, upper case.                |

## Example

In the following example, a float is formatted in a variable `pi`, which stores an approximation of the value of the constant pi. The format denotes that the output should be a string that represents the provided float, but only using two decimal places.

```python
pi = 3.14159
formatted = format(pi, '.2f')
print(formatted)
```

Output for above code is:

```shell
3.14
```

## Codebyte Example

The codebyte example is runnable and uses the `format()` function to convert an integer to a binary and print its string representation.

```codebyte/python
value = 42
formatted = format(value, 'b')
print(formatted)
```
