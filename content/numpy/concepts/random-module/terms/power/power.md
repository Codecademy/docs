---
Title: '.power()'
Description: 'Returns a NumPy array of random samples drawn from the power distribution.'
Subjects: 
    - 'AI'
    - 'Computer Science'
    - 'Data Science'
Tags:
    - 'Arrays'
    - 'Functions'
    - 'Math'
    - 'Numpy'
CatalogContent:
    - 'learn-python'
    - 'paths/data-science'
---

The **`.power()`** function, also known as the *power function distribution*, is part of the NumPy random module. It draws random samples from the distribution $\( x^{a-1} \), where \( a > 0 \)$, returning values in the range [0, 1] as a NumPy array. This function is often used in statistical simulations, hypothesis testing, and generating synthetic data for machine learning.

## Syntax

```pseudo
random.power(a, size=None)
```

**Parameters:**

- `a` (float or array_like of floats): The shape parameter of the distribution. Must be positive.
- `size` (int or tuple of ints, optional): Output shape. If specified as `(m, n, k)`, then `m * n * k` samples are drawn. If `None` (default), a single value is returned if `a` is a scalar; otherwise, `np.array(a).size` samples are drawn.

**Return value:**

An [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) of random floats drawn from a power distribution over the interval [0, 1), with shape determined by `size`.

## Example 1: Drawing a Single Value (`size=None`)

When `size=None` (default), `np.random.power(a)` returns a single float from the power distribution over the range [0, 1):

```py
import numpy as np

# Single sample with shape parameter a = 2
print(np.random.power(2))

# Single sample with a = 7
print(np.random.power(7))
```

A possible output of this code is:

```shell
0.3279803284599577
0.9487782510180921
```

When no size is specified, a single float is returned.

## Example 2: Drawing Multiple Values Using an Integer `size`

When `size` is an integer, it specifies how many random values to draw from the power distribution:

```py
import numpy as np

# 3 values with a = 2
print(np.random.power(2, 3))

# 10 values with a = 10
print(np.random.power(10, 10))

# 3 values with a very large shape parameter
print(np.random.power(1000, 3))
```

The possible output of this code is:

```shell
[0.71399645 0.67523938 0.59913375]
[0.89043235 0.94651471 0.74650338 0.97812045 0.73832165 0.98408732
 0.94639479 0.89403161 0.95649183 0.91259268]
[0.99993867 0.99989337 0.99973659]
```

## Codebyte Example

The following example generates multi-dimensional arrays by passing a [tuple](https://www.codecademy.com/resources/docs/python/tuples) as the `size` argument:

```codebyte/python
import numpy as np

# Generate a 5x5 matrix of power-distributed values with a large shape parameter
samples = np.random.power(1000, (5, 5))
print(samples)
```
