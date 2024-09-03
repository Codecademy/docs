---
Title: 'math.fabs()'
Description: 'Takes in a numeric data type and returns the absolute value as a float.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Integers'
  - 'Math'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.fabs()`** function takes in a numeric data type and returns the absolute value as a float.

## Syntax

```pseudo
math.fabs(n)
```

The `math.fabs()` function takes in a number value and returns its absolute value as a float. A non-negative number is returned and thus, a negative number is first negated. Unlike math.abs(), the value is always converted to a float value. Any other data type except a number will return a TypeError.

## Example

This is an example of `math.fabs()` to return the fabs of `-154.2`:

```py
import math

print(math.fabs(-154.2))
```

The above code prints the following output:

```shell
154.2
```

## Codebyte Example

The following examples run and use the `math.fabs()` function to return the absolute value of a number as a float:

```codebyte/python
import math

print(math.fabs(-7.8))

print(math.fabs(10))

print(math.fabs(2405))

print(math.fabs(57.5))
```