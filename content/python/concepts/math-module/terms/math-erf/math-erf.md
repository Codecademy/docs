---
Title: 'math.erf()' 
Description: 'Returns the error function of a number.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
  - 'Discrete Math'
  - 'Machine Learning'

Tags: 
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Statistics'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.erf()`** function returns the error function of a number.

## Syntax

```pseudo
math.erf(n)
```

- `n`: A real number for which the error function is to be computed.

The `math.erf()` function accepts any real number from negative infinity to positive infinity as input and returns a value between -1 and 1, representing the error function of that number.

## Example

In the example below, `math.erf()` returns the error function of *1*:

```py
import math

print(math.erf(1))
```

The above code gives the following output: 

```shell
0.8427007929497149
```

## Codebyte Example 

Run the following example that uses the `math.erf()` function to understand its working:

```codebyte/python
import math

print("The error function of 0 is:", math.erf(0))
```
