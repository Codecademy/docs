---
Title: 'divmod()'
Description: 'Returns the quotient and remainder of the division of two numbers.'
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
---

Returns the quotient and remainder of the division of two numbers.

## Syntax

```pseudo
divmod(x, y)
```

The `divmod()` method takes two arguments and returns a tuple, with the result of the division and the remainder.

> **Note:** The method only accepts non-complex values and the quotient returned will always be a whole number (the quotient returned is the result of a floor-division).

## Example

In the code below `divmod()` is implemented with two positive integers:

```python
result = divmod(10, 3)

print(result)
```

The code above results in the following output:

```shell
(3, 1)
```

In this example, 10 divided by 3 yields 3, and the remainder is 1.

## Codebyte Example

Below `divmod()` is passed two floating point values:

```codebyte/python
result = divmod(10.0, 2.5)

print(result)
```
