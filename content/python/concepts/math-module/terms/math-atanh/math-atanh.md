---
Title: 'math.atanh()'
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

In Python, the **`math.atanh()`** function returns the inverse hyperbolic tangent of a number.

## Syntax

```pseudo
math.atanh(x)
```

Since it is used to reverse the effect of a hyperbolic tangent function, the parameter `x` must always a number between -0.99 and 0.99. A `ValueError` will occur if:

- `x` is greater than or equal to 1.
- `x` is less than or equal to -1.

## Example

The following example shows the use of the `math.atanh()`:

```py
import math

x = 0.5
result = math.atanh(x)
print("Inverse hyperbolic tangent of 0.5 =",str(result))
```

The above code produces the following output:

```shell
Inverse hyperbolic tangent of 0.5 = 0.5493061443340549
```

## Codebyte Example

Run the following code to understand how the `math.atanh()` function works:

```codebyte/python
import math

print(math.atanh(-0.3))

output_signal_amplitude = 0.7
input_signal_amplitude = math.atanh(output_signal_amplitude)
print("Input Signal's Amplitude = ", input_signal_amplitude)
```
