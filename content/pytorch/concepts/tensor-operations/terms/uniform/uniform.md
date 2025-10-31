---
Title: numpy random uniform
Description: Generates random floating-point numbers from a continuous uniform distribution over a specified interval.
Subjects:
  - Data Science
  - Machine Learning
Tags:
  - NumPy
  - Random Module
  - Distribution
CatalogContent:
  - learn-python-3
---

The **`numpy.random.uniform()`** function generates random floating-point numbers drawn from a **continuous uniform distribution** over a specified interval. Every number within the given range has an equal probability of being selected.

This function is commonly used for random sampling, simulations, and initializing random parameters in machine learning models.

## Syntax

```py
numpy.random.uniform(low=0.0, high=1.0, size=None)
```

| Parameter | Type                 | Description                                                                                                                |
| --------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `low`     | float or array-like  | Lower boundary of the output interval. All values generated will be greater than or equal to this value. Default is `0.0`. |
| `high`    | float or array-like  | Upper boundary of the output interval. All values generated will be less than this value. Default is `1.0`.                |
| `size`    | int or tuple of ints | Output shape. If `None`, a single float is returned.                                                                       |

**Returns:**
`ndarray` or `float` — random values sampled uniformly from the interval `[low, high)`.

## Example

```py
import numpy as np

# Generate a single random float between 0 and 10
x = np.random.uniform(0, 10)
print("Random float:", x)

# Generate a 2×3 array of random numbers between −5 and 5
arr = np.random.uniform(-5, 5, size=(2, 3))
print(arr)
```

**Output (example):**

```
Random float: 4.217843
[[-1.234561 2.987654]
 [ 4.563210 -0.876543]]
```

## Codebyte

```codebyte/python
import numpy as np

# Generate 5 random floats between 1 and 10
values = np.random.uniform(1, 10, size=5)
print("Uniform random values between 1 and 10:", values)
```

```

```
