---
Title: '.trunc()'
Description: 'Returns the truncated value of each element in an array, removing the fractional part and leaving the integer part.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
  - 'Formatting'
  - 'Numbers'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.trunc()`** function truncates the decimal part of each element in an array, returning the integer part as a float. It is used to discard the fractional part without rounding the number.

## Syntax

```pseudo
numpy.trunc(x, /, out=None, *, where=True)
```

- `x`: The input array (or a single number) whose elements are to be truncated.
- `out` (Optional): A location where the result will be stored. If not provided, a new array is created and returned.
- `where` (Optional): A boolean array or condition that specifies which elements to compute for. The default is `True`, meaning the function operates on all elements of `x`.

It returns a new array (or a scalar if the input is a single value) with the decimal part truncated from each element, leaving the integer part as a float.

## Example 1

The example demonstrates how `.trunc()` truncates the decimal values in a NumPy array:

```py
import numpy as np

arr = np.array([3.14, -2.718, 1.618, -4.0])
truncated = np.trunc(arr)
print(truncated)
```

The output will be as follows:

```shell
[ 3. -2.  1. -4.]
```

The above example also shows that `.trunc()` does not round but it simply removes the fractional part.

## Example 2

The example below demonstrates how to selectively apply truncation using the `where` parameter, allowing truncation only for elements meeting a specified condition while leaving others unchanged:

```py
import numpy as np

# Array of numbers
numbers = np.array([3.14, -2.718, 1.618, -4.0])

# Truncate only the positive numbers
result = np.where(numbers > 0, np.trunc(numbers), numbers)

# Print the original and modified arrays
print("Original Numbers:", numbers)
print("Conditionally Truncated Numbers:", result)
```

The output will be as follows:

```shell
Original Numbers: [ 3.14  -2.718  1.618  -4.   ]
Conditionally Truncated Numbers: [ 3.   -2.718  1.   -4.   ]
```

Here, truncation is only applied to elements where the value is greater than `0`, leaving other elements unchanged.

## Codebyte Example

Run the following codebyte example to understand how the `.trunc()` works:

```codebyte/python
import numpy as np

# List of product prices with decimal values
prices = np.array([12.99, 49.75, 7.50, 19.99, 5.05])

# Truncate the decimal part
truncated_prices = np.trunc(prices)

# Print the original and truncated prices
print("Original Prices:", prices)
print("Truncated Prices:", truncated_prices)
```
