---
Title: 'math.ceil()'
Description: 'Takes in a numeric data type and rounds the value up to the nearest integer.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Takes in a numeric data type and rounds the value up to the nearest integer.

## Syntax

```py
math.ceil(n)
```

The **`math.ceil()`** function takes in a value and returns its ceiling, the smallest integer greater than or equal to that value.

## Example 

Use `math.ceil()` to return the ceiling of `134.2`:

```python
import math

print(math.ceil(134.2))

# Output: 135
```

## Example 2

Use `math.ceil()` to return the ceiling of `412.959`:

```python
import math

print(math.ceil(412.959))

# Output: 413
```

## Codebyte Example

The following example is runnable and uses the `math.ceil()` function to round a number up to the nearest integer:

```codebyte/py
import math

print("The ceiling value of -16.7 is: ", math.ceil(-16.7))
```
