---
Title: 'randint'
Description: 'Generates random integers from a specified range in NumPy.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Numpy'
  - 'Python'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`randint()`** is a function from NumPy's `random` module that generates random integers. It can generate a single integer or an array of integers within a specified range, making it useful for simulations, testing, and randomized operations.

## Syntax

```python
numpy.random.randint(low, high=None, size=None, dtype=int)
```

**Parameters:**

- `low` (int): Lowest integer to be drawn (inclusive).
- `high` (int, optional): If provided, the largest integer (exclusive). If `None`, the range is `0` to `low - 1`.
- `size` (int or tuple of ints, optional): Output shape. If `None`, a single integer is returned.
- `dtype` (data-type, optional): Desired data type of the output. Default is `int`.

**Return value:**

- `out` (int or ndarray): Random integer(s) from the specified range.
  - If `size` is `None`, returns a single integer.
  - If `size` is specified, returns a NumPy array of the given shape.

## Example

This example demonstrates generating random integers:

```py
import numpy as np
np.random.seed(15)

# Single random integer from 0 to 9
single_int = np.random.randint(10)
print(single_int)

# Array of 5 random integers from 1 to 5
arr = np.random.randint(1, 6, size=5)
print(arr)
```
The output for this code will be:

```shell
3
[5 2 2 1 2]
```

Here:

- `np.random.seed(15)` ensures reproducible results.
- `np.random.randint(10)` generates a single integer between 0 and 9.
- `np.random.randint(1, 6, size=5)` generates an array of 5 integers between 1 and 5.


## Codebyte Example

This codebyte sample generates a single random integer and a 2×3 array of random integers from specified ranges, ensuring reproducible results using a fixed random seed.

```codebyte/python
import numpy as np
np.random.seed(42)

# Single random integer between 0 and 9
num = np.random.randint(10)
print(f"Random integer: {num}")

# 2x3 array of random integers between 1 and 10
arr = np.random.randint(1, 11, size=(2, 3))
print(f"Random integers array:\n{arr}")
```

- `np.random.seed(42)` ensures the code produces the same results every time.
- `size=(2, 3)` generates a 2D array with 2 rows and 3 columns of random integers.