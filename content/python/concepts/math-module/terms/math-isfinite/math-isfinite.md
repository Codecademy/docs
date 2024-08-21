---
Title: 'math.isfinite()'
Description: 'Returns True when a number is finite or False.'
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

The **`math.isfinite()`** function returns true when a number is finite or false. The number should neither be an infinite nor NaN. 

## Syntax

```psuedo
math.infinite(x)
```
> **Note:** 0.0 is considererd finite.

## Example

Use `math.isfinite()` to check whether `0.1` is finite or not.

```py
import math

print(math.isfinite(0.1))
```
The output shall be as follows

```shell
True
```

## Codebyte

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