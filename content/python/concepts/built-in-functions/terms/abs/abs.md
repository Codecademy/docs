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

The `abs()` function returns the absolute value of a numeric argument.

## Syntax

```pseudo
abs(n)
```

Where n is a real number, for example an int or float, that will have its absolute value taken. The absolute value of n will be the non-negative value of n, a positive value will remain unchanged and a negative value will have its negative sign removed.

## Example

In this example code, let's set up two variables; one positive number and one negative number; and print() the two.

```py
positive = 10
negative = -3.5

print(abs(positive))
# Output: 10

print(abs(negative))
# Output: 3.5
```

## Codebyte Example

The following example returns the absolute value from each element in the `numbers` list:

```codebyte/python
numbers = [-19.2, 27.3, 48, -115, 302.7, -421, -2011]

print([abs(number) for number in numbers])
```
