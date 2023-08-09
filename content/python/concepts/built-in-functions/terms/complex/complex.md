---
Title: 'complex()'
Description: 'Converts a given string into a complex number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`complex()`** function converts a given string, or pair of numbers, into a complex number.

## Syntax

```pseudo
result1 = complex(real, imaginary)
result2 = complex(string)
```

- `real` is the real part of a complex number.
- `imaginary` is the imaginary part of a complex number.
- `string` is the string representation of a complex number.

## Example

Use `complex()` to convert the string `"1+7j"` into a complex number:

```python
num = complex("1+7j")
print(num)
```

This will result in the following output:

```shell
(1+7j)
```

> **Note:** The passed string cannot contain whitespaces. A string such as, `"1 + 7j"`, will result in an error.

## Codebyte Example

Use `complex()` to convert the string `"1.5"` which is passed as a single parameter, into a complex number:

```codebyte/python
x = complex("1.5")
print(x)
```
