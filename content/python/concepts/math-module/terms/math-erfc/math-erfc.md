---
Title: 'math.erfc()'
Description: 'Aims to find the complementary error function of the specified parameter.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **math.erfc()** method returns the complementary error function of a number. This method accepts a value between - inf and + inf, and returns a value between 0 and 2.

## Syntax

```pseudo
math.erfc(x)
```
Parameter Value

- `x`: Required. Parameter x is a real number.

The function returns a floating point value which is the value of the error function at x. 


## Example

```py
# Import math Library
import math

# Print complementary error function for different numbers
print (math.erfc(0.67))
print (math.erfc(1.34))
print (math.erfc(-6))
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
