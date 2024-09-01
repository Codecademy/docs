---
Title: '.atanh()'
Description: 'Returns the inverse hyperbolic tangent of a number.'
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

The **`.atanh()`** returns the inverse hyperbolic tangent of a number.

## Syntax

```pseudo
math.atanh(x)
```

Since it is used to reverse the effect of a hyperbolic tangent function, the parameter `x` is always a number between -1 and 1. A `ValueError` will occur if:

- `x` is greater than or equal to 1.
- `x` is less than or equal to -1.


## Example

The following example shows the use of the `.atanh()`:

```python
import math

x = 0.5
result = math.atanh(x)
print("Inverse hyperbolic tangent of 0.5 =",str(result))
```

The above code produces the following output:

```shell
Input Signal's Amplitude =  0.8673005276940532
```

## Codebyte Example

More Examples of `math.atanh()`:

```codebyte/python
import math

# Compute the inverse hyperbolic tangent of -0.3
print(math.atanh(-0.3))


# Practical: Normalize a value between -1 and 1 using atanh
value = 0.6
normalized_value = math.atanh(value)
print(f"Normalized value: {normalized_value}")

```
