---
Title: 'Modulo'
Description: 'A modulo calculation returns the remainder of the division between two numbers.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Operators'
  - 'Logical'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the percent sign (`%`) is known as the modulo operator.

A modulo calculation returns the remainder of the division between two numbers.

## Example 1

```py
x = 12 % 5

print(x) # Output: 2
```

Because 12 is not evenly divisible by 5, the value of `x` is 2.

## Example 2

```py
y = 10 % 5

print(y) # Output: 0
```

Because 10 is evenly divisible by 5, the value of `y` is 0.

## Codebyte Example

```codebyte/py
# Check if even or odd

num = 499

if (num % 2) == 0:
  print(num, "is even.")
else:
  print(num, "is odd.")
```
