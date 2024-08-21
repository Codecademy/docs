---
Title: 'math.isfinite()'
Description: 'Checks whether a given number is finite or not.'
Subjects:
 - 'Computer Science'
 - 'Data Science'
Tags:
 - 'Arithmetic'
 - 'Boolean'
 - 'Functions'
CatalogContent:
 - 'learn-python-3'
 - 'paths/computer-science'
---

The **`math.isfinite()`** function returns `True` when a number is finite and `False` otherwise. The number should neither be infinite nor `NaN`. 

## Syntax

```psuedo
math.infinite(x)
```

## Example

The following example uses `math.isfinite()` to check whether a specific value is finite or not:

```py
import math

print(math.isfinite(0.1))
```

The output is generated as follows:

```shell
True
```

## Codebyte Example

Run the following example that uses the `math.isfinite()` function to understand its working:

```codebyte/python
import math

print(math.isfinite(2000))
print(math.isfinite(-45.34))
print(math.isfinite(+45.34))
print(math.isfinite(math.sqrt(8)))
print(math.isfinite(0.00001))
print(math.isfinite(math.inf))
print(math.isfinite(float("inf")))
print(math.isfinite(float("NaN")))
print(math.isfinite(-math.inf))
```

> **Note:** 0.0 is considererd finite.