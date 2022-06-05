---
Title: '.linspace()'
Description: 'Returns an array of evenly-spaced numbers over a given interval.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.linspace()`** function returns an array of evenly-spaced numbers over a the specified interval \[`start`,`stop`\], optionally excluding the `stop` value.

## Syntax

```pseudo
numpy.linspace(start, stop, num, endpoint, retstep, dtype, axis)
```

The `start` and `stop` arguments are required and represent the beginning and end of the interval. They can be numbers or arrays.

`.linspace()` provides the following arguments:

- `start`: The starting point of the sequence.
- `stop`: The (optionally included) endpoint of the sequence.
- `num`: The number of values to generate. Defaults to 50.
- `endpoint`: Boolean flag. If `True` then `stop` is included as the last value. If `False`, `stop` is excluded. Defaults to `True`.
- `retstep`: Boolean flag. If `True` the result will include the calculated step size between values. Defaults to `False`.
- `dtype`: The `dtype` of the returned array, if omitted, dtype is inferred from `start` and `stop`. Defaults to `None`.
- `axis`: If `start` and `stop` are arrays, specifies on what axis the values will be added. If `0` the axis is added at the beginning. If `-1` it's added at the end. Defaults to `0`.

## Example

The following example creates a list of values between 10 and 20.

```py
import numpy

result = numpy.linspace(10, 20, num=6)
print(result)

result2 = numpy.linspace(10, 20, num=6, endpoint=False)
print(result2)

```

This results in the following output:

```shell
[10. 12. 14. 16. 18. 20.]

[10.         11.66666667 13.33333333 15.         16.66666667 18.33333333]
```
