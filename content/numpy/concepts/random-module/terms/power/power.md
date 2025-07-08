---
Title: '.power()'
Description: 'Return random samples from power distribution as numpy array'
Subjects: 
    - 'AI'
    - 'Data Science'
    - 'Computer Science'
Tags:
    - 'Arrays'
    - 'Functions'
    - 'Math'
    - 'Numpy'useruser
CatalogContent:
    - 'learn-python'
    - 'paths/data-science'

---
The **`.power()`** function, *aka: Power-Function-Distribution* is part of the NumPy library. Primarily draws samples in [0, 1] from a power distribution with positive exponent and returns them in the form of an array.

This function is commonly used for statistical testing, simulations and generating machine learning synthetic data.

**PS:** New code should use the power method of a Generator instance instead

## Syntax

```pseudo
random.power(a, size=None)
```

**Parameters:**
1.`a`: float or array_like of floats
    - Parameter of the distribution. Must be non-negative.

2.`size`: int or tuple of ints, optional
    - Output shape. If the given shape is, e.g., `(m, n, k)`, then `m * n * k` samples are drawn. If size is `None` (default), a single value is returned if `a` is a scalar. Otherwise, `np.array(a).size` samples are drawn.

**Return value:**

An array ([`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray)) of a shape consistent with the size filled with random floats from a power distribution over [0, 1).

**Raises**: Value Error if `a` is negatif or null.

## Example

```py
>>> import numpy as np
>>> import random

# If size=None

>>> print(np.random.power(2))
0.6846237833835251

>>> print(np.random.power(7))
0.8110137348659924

>>> print(np.random.power(2,3))
[0.49055308 0.93763919 0.67387802]

# If size is an integer

>>> print(np.random.power(10,10))
[0.72456875 0.94693609 0.92619849 0.94813071 0.97270994 0.93135905
 0.95546733 0.94237131 0.96817561 0.98170604]

>>> print(np.random.power(10,2))
[0.94107937 0.90562675]

>>> print(np.random.power(1000,3))
[0.99809396 0.99916794 0.99774856]

#If size is a tuple ()

>>> print(np.random.power(1000,(5,5))) #5*5matrix
[[0.99880382 0.99934307 0.99996164 0.99815375 0.99837584]
 [0.99662911 0.99923268 0.9973192  0.99894496 0.99980047]
 [0.99655904 0.99914458 0.99831727 0.99856803 0.99699759]
 [0.99924632 0.99945667 0.99825157 0.99897058 0.99888353]
 [0.99464373 0.99692161 0.99948955 0.99904031 0.99854974]]
```
