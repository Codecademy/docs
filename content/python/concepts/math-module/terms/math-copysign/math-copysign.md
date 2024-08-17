---
Title: 'math.copysign()'
Description: 'Returns a float with the magnitude (absolute value) of the first value and the sign of the second value.'
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

The `math.copysign()` function in Python takes two numeric values and returns a float with the magnitude of the first value and the sign of the second value.

## Syntax

```pseudo
math.copysign(x, y)
```


## Example

Use `math.copysign()` to return `10` with the same sign as `-5`:

```py
import math

print(math.copysign(10, -5))
```

The above code gives the following output:

```shell
-10.0
```

## Codebyte Example

Run the following example that uses the `math.copysign()` function to understand its working:

```codebyte/python
import math

print(math.copysign(-40, 5.5))

print(math.copysign(7, -7))
```
