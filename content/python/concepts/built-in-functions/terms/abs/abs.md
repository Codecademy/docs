---
Title: 'abs()'
Description: 'Returns the absolute value of a numeric argument.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`abs()`** function returns the absolute value of a numeric argument.

## Syntax

```pseudo
abs(n)
```

Return value is the absolute value of the `n` parameter, which is of type `int` or `float`.

The absolute value of `n` will be its distance from zero regardless of its direction (i.e., whether it is positive or negative). Since the absolute value is never negative, a positive value will remain unchanged and a negative value will have its negative sign removed.

## Example

In the example below, the absolute values of two variables, `positive` and `negative`, are returned with the `abs()` function:

```py
positive = 10
negative = -3.5

print(abs(positive))

print(abs(negative))
```

This will produce the following output:

```shell
10
3.5
```

## Codebyte Example

The following example returns the absolute value from each element in the `numbers` list:

```codebyte/python
numbers = [-19.2, 27.3, 48, -115, 302.7, -421, -2011]

print([abs(number) for number in numbers])
```
