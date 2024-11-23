---
Title: '.trunc()'
Description: 'Truncate the decimal part of each element in an array, returning the integer part as a float.'
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
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**`numpy.trunc()`** truncates the decimal part of each element in a NumPy array, returning the integer part of the number as a float. It is often used when you need to ignore the fractional part without rounding.

## Syntax

```pseudo
numpy.trunc(x, /, out=None, *, where=True)
```

- `x`: The input array whose elements you want to truncate.
- `out`: (Optional) A location where the result is stored. If not provided, a new array is created.
- `where`: (Optional) A boolean array that specifies which elements to compute for. Default is True for all elements.

It returns a NumPy array containing the truncated values, where each element is the integer part of the input.

## Example

### Example 1: Truncating Decimal Values in an Array

The example demonstrates how `.trunc()` truncates the decimal values in a NumPy array:

```python
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

### Example 2: Truncating with Conditional Application

We can also selectively apply truncation using the `where` parameter.

```python
arr = np.array([3.14, -2.718, 1.618, -4.0])
truncated = np.trunc(arr, where=arr > 0)
print(truncated)
```

The output will be as follows:

```shell
[ 3. -2.718  1. -4. ]
```

Here, truncation is only applied to elements where the value is greater than `0`, leaving other elements unchanged.

## Codebyte Example

Imagine you're working on a shopping app and want to display the approximate price of products without including decimal values. For instance, if a product costs $12.99, you might want to show it as $12 in certain parts.

The example below demonstrates how to truncate the decimal part of product prices:

```python
import numpy as np

# List of product prices with decimal values
prices = np.array([12.99, 49.75, 7.50, 19.99, 5.05])

# Truncate the decimal part
truncated_prices = np.trunc(prices)

# Print the original and truncated prices
print("Original Prices:", prices)
print("Truncated Prices:", truncated_prices)
```
