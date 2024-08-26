---
Title: 'math.isinf()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns True if value is a positive or negative infinity, and False otherwise.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: 
  - 'Computer Science'
  - 'Data Science'
  - 'Developer Tools'
  - 'Machine Learning'
Tags: 
  - 'Algorithms'
  - 'Computer Science'
  - 'Data Structures'
  - 'Error Handling'
  - 'Functions'
  - 'Math'
  - 'Mathematics'
  - 'Programming'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.isinf()`** [function](https://www.codecademy.com/resources/docs/python/functions) in Python checks whether a given value is infinite. It returns `True` if the value is positive or negative infinity, and `False` otherwise. This function is part of the `math` module and is useful when dealing with calculations that may result in infinite values.

## Syntax

```pseudo
math.isinf(value)
```

- `value`: The number to be checked for infinity.

The function returns a Boolean value: `True` if `value` is infinite, `False` otherwise.

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

Here’s a practical example using `math.isinf()`:

```codebyte/python
import math

print(math.isinf(1e309))  # Very large number, close to infinity
print(math.isinf(-1e309))  # Very large negative number, close to negative infinity
print(math.isinf(float('inf')))  # Explicit positive infinity
print(math.isinf(1000))  # A finite number
```

This code illustrates how `math.isinf()` detects infinite values in various scenarios.