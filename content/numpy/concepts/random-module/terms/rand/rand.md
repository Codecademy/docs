---
Title: '.rand()'
Description: 'Create an array of the given shape and populate it with random samples from a uniform distribution over [0, 1)'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **.rand()** is a function from the *numpy* library which generates an array of specified shapes and fills it with uniformly distributed random values between 0 and 1. The function's output is determined by the shape parameters provided and it is commonly used for creating random arrays in various applictaions such as machine learning and simulations.

## Syntax
```pseudo
numpy.random.rand(a1, a2, a3 ..., an)
```

**Parameters:**
- `a1, a2, a3, ..., an` : [int, optional] it is dimension of the returned array and if no argument is given, a single python float is returned.

**Return value:**
It returns *array* of defined shape and filled with ranom values.

## Example

The following examples demonstrate the use of `.rand()` from numpy library
```py
import numpy as np

```
