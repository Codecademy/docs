---
Title: '.fiil()'
Description: 'Fills a NumPy array with a specified scalar value.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Methods'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.fill()`** method is used to fill a NumPy array with a specified scalar value.

## Syntax

```pseudo
ndarray.fill(value)
```

- `ndarray`: The NumPy array to be filled.
- `value`: The scalar value to assign to all the elements in the array.

## Example

In this example, the `.fill()` method assigns the scalar value `2798` to all the elements in the one-dimensional NumPy array `nf`:

```py
# Import NumPy
import numpy as a

# Create a NumPy array
nf = a.arange(12)

# Use the '.fill()' method
nf.fill(2798)

print(nf)
```

We will get the following result:

```shell
[2798 2798 2798 2798 2798 2798 2798 2798 2798 2798 2798 2798]
```

## Codebyte Example

In the following codebyte example, a two-dimensional NumPy array `nf` is created with specific values and then filled entirely with `985`:

```codebyte/python
import numpy as np

nf = np.array([[5,6], [7,8]])

nf.fill(985)

print(nf)
```
