---
Title: 'math.acos()'
Description: 'Returns the arc cosine (inverse cosine) of a number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.acos()`** function returns the arc cosine (inverse cosine) in radians of a value between `-1` and `1`.

## Syntax

```pseudo
math.acos(x)
```


- `x`: A number between `-1` and `1` representing the cosine value for which the arc cosine is to be calculated.

The `math.acos()` function returns a numeric value between 0 and π, which represents the inverse cosine of the value `n`.

## Example

Use `math.acos()` to return the inverse cosine of a numeric value between 0 and π:

```py
import math

print(math.acos(0))
```

The above code gives the following output:

```shell
1.5707963267948966
```

## Codebyte Example

Run the following example that uses the `math.acos()` function to understand its working:

```codebyte/python
import math

print("The inverse cosine of 0 is: ", math.acos(0))
```
