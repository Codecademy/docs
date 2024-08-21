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

The **`math.isfinite()`** function returns `True` when a number is finite and `False` otherwise. A finite number is neither infinite nor `NaN`. 

## Syntax

```psuedo
math.isfinite(x)
```

- `x`: The number to be checked. It can be an integer, float, or any numerical value.

## Example

The following example uses `math.isfinite()` to check whether a specific value is finite or not:

```py
import math

# Check if 0.1 is a finite number
print(math.isfinite(0.1))  

# Check if positive infinity is a finite number
print(math.isfinite(math.inf))  

# Check if the float representation of infinity is a finite number
print(math.isfinite(float("inf")))  

# Check if the float representation of NaN (Not a Number) is a finite number
print(math.isfinite(float("NaN"))) 
```

The output generated is as follows:

```shell
True
False
False
False
```

## Codebyte Example

Run the following example that uses the `math.isfinite()` function to understand it works:

```codebyte/python
import math

print(math.isfinite(2000))
print(math.isfinite(-45.34))
print(math.isfinite(+45.34))
print(math.isfinite(math.sqrt(8)))
print(math.isfinite(0.00001))
print(math.isfinite(-math.inf))
print(math.isfinite(0.0))
```
