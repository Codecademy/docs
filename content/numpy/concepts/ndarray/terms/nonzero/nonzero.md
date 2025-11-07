---
Title: nonzero()
Concept: ndarray
---

# nonzero()

The `nonzero()` method in NumPy returns the indices of the array elements that are non-zero (or `True` when the array is treated as a boolean). It is often used to identify or extract the locations of non-zero elements in an array.

## Syntax

```python
numpy.nonzero(a)

```markdown
## Example

```python
import numpy as np

a = np.array([[0, 2, 0],
              [3, 0, 4]])

result = np.nonzero(a)
print(result)

```markdown
## Codebyte

```codebyte/python
import numpy as np

a = np.array([[0, 5, 0],
              [7, 0, 9]])

rows, cols = a.nonzero()

for r, c in zip(rows, cols):
    print(f"Non-zero element {a[r, c]} found at position ({r}, {c})")
