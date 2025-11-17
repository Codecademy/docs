

# Title: 'uniform()'

# Description: 'The `uniform()` function in NumPy generates random floating-point numbers sampled from a continuous uniform distribution over a specified interval.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Random'
  - 'Uniform Distribution'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

# uniform()

The `uniform()` function in NumPy generates random floating-point values sampled from a **continuous uniform distribution** over the interval `[low, high)`.  
Every value in this range has an equal probability of being selected.

This function is commonly used in simulations, randomized algorithms, data augmentation, and generating synthetic datasets.

---

## Syntax

```python
numpy.random.uniform(low=0.0, high=1.0, size=None)
````

### Parameters

* **`low`** (float, optional)
  The lower bound of the interval. Default is `0.0`.

* **`high`** (float, optional)
  The upper bound of the interval. Default is `1.0`.

* **`size`** (int or tuple of ints, optional)
  The shape of the output.

  * `None` returns a single float
  * An integer returns a 1D array
  * A tuple returns a multi-dimensional array

### Returns

* **float or ndarray**
  Random value(s) drawn from the specified uniform distribution.

---

## Example

```python
import numpy as np

# Generate a single random value between 5 and 10
value = np.random.uniform(5, 10)
print(value)

# Generate a 2×3 array of values between 0 and 1
array = np.random.uniform(0, 1, size=(2, 3))
print(array)
```

---

## Codebyte

```codebyte/python
import numpy as np

# Generate three random numbers between 2 and 4
result = np.random.uniform(2, 4, size=3)
print("Uniform random values:", result)
```


