---
Title: '.choice()' 
Description: 'Chooses an element from a given array'
Subjects: 
  - 'Computer science'
  - 'Statistics'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Functions'
  - 'Numpy'
  - 'Probability'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`numpy.random.choice()`** method is used to generate a random sample from a given 1-D array. It is widely used in simulations, random sampling, and testing scenarios where randomness is required.

## Syntax

```pseudo
numpy.random.choice(a, size=None, replace=True, p=None)
```

- `a`: 1-D array-like or int. If an int `n` is given, the array `[0, 1, ..., n-1]` is used as the input.
- `size` (Optional): The number of samples to draw. If `None`, a single value is returned.
- `replace` (Optional): Whether the sample is with or without replacement.
  - If `True` (default), a value can be selected multiple times.
  - If `False`, each value can only be selected once.
- `p` (Optional): The probabilities associated with each entry in `a`. Must sum to 1. If not provided, all values have equal probability.

## Example

The example below shows how to randomly select elements from an array:

```python
import numpy as np

result = np.random.choice([10, 20, 30, 40], size=2, replace=False)

print(result)
```

The code above randomly selects 2 different elements from the array `[10, 20, 30, 40]` without replacement.

## Codebyte Example

In this codebyte example, we sample elements based on custom probabilities:

```codebyte/python
import numpy as np

values = ['apple', 'banana', 'cherry']
probabilities = [0.1, 0.7, 0.2]

sample = np.random.choice(values, size=5, p=probabilities)

print(sample)
```

> **Note:** The output may differ every time you run it, as the selection is random. The probability distribution influences how often each item is chosen.
