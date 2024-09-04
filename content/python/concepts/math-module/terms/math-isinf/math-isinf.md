---
Title: 'math.isinf()'
Description: 'Returns a boolean indicating whether the given value is infinite or not.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
  - 'Developer Tools'
  - 'Machine Learning'
Tags: 
  - 'Algorithms'
  - 'Data Structures'
  - 'Error Handling'
  - 'Math'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.isinf()`** [function](https://www.codecademy.com/resources/docs/python/functions) in Python checks whether a given value is infinite. It returns `True` if the value is positive or negative infinity, and `False` otherwise. This function is part of the [`math module`](https://www.codecademy.com/resources/docs/python/math-module) and is useful when dealing with calculations that may result in infinite values.

## Syntax

```pseudo
math.isinf(x)
```

- `x`: The number to be checked for infinity.

## Example

The following example demonstrates how to use the `math.isinf()` function:

```py
import math

print(math.isinf(float('inf')))  # Positive infinity
print(math.isinf(float('-inf'))) # Negative infinity
print(math.isinf(1000))          # Finite number
```

This code outputs:

```shell
True
True
False
```

## Codebyte Example

Run the following codebyte to understand how the `math.isinf()` works in various scenarios:

```codebyte/python
import math

print(math.isinf(1e309))  # Very large number, close to infinity
print(math.isinf(-1e309))  # Very large negative number, close to negative infinity
print(math.isinf(float('inf')))  # Explicit positive infinity
print(math.isinf(1000))  # A finite number
```
