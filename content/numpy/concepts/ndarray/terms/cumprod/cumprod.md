---
# REQUIRED METADATA (YAML FRONT MATTER)
title: numpy.ndarray.cumprod
description: Returns an array containing the cumulative product of the elements along a given axis.
keywords: numpy, ndarray, cumprod, cumulative product, array multiplication
type: method
---

The **`.cumprod()`** method returns a new array holding the cumulative product of the elements. The cumulative product is calculated by multiplying each element by the product of all preceding elements along a specified axis.

If the input is a 1D array, the result is calculated as:
$$[a_0, a_0 \times a_1, a_0 \times a_1 \times a_2, ...]$$

---

## Syntax

```python
array_instance.cumprod(axis=None, dtype=None, out=None)
```
