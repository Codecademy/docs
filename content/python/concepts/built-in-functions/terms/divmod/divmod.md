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

## Example

Use `divmod()` to calculate the quotient and remainder of dividing `10` by `3`:

```python
result = divmod(10, 3)

print(result)
```

Output

```shell
(3, 1)
```

In this example, the quotient of 10 divided by 3 is 3, and the remainder is 1.


## Codebyte Example

Use `divmod()` to calculate the quotient and remainder of dividing `-15` by `4`:

```codebyte/python
result = divmod(-15, 4)

print(result)
```
