---
Title: 'math.erfc()'
Description: 'Finds the complementary error function of a number.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Math'
  - 'Functions'
  - 'Numbers'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.erfc()`** method returns the complementary error [function](https://www.codecademy.com/resources/docs/python/functions) of a number. This method accepts a value between _-inf_ and _+inf_ and returns a floating-point value between _0_ and _2_.

## Syntax

```pseudo
math.erfc(x)
```

- `x`: A required parameter that should be a real number.

## Example

The following example demonstrates the usage of the `math.erfc()` method:

```py
# Import the 'math' library
import math

# Print the complementary error functions of different numbers
print(math.erfc(0.67))
print(math.erfc(1.34))
print(math.erfc(-6))
```

Output:

```shell
0.3433722976996949
0.058086284741634665
2.0
```

> Note: If the input value is not a real number, a `TypeError` is raised.


## Codebyte Example:

The following codebyte example demonstrates how the `math.erfc()` function works:

```codebyte/python

import math

print(math.erfc(0))
print(math.erfc(1))
print(math.erfc(2),"\n")

print(math.erfc(-0.1))
print(math.erfc(-1))
print(math.erfc(-2))
```
