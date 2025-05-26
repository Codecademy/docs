---
Title: '.choice()'
Description: 'Generates a random selection of elements from an array with or without replacement.'
Subjects:
  - 'Computer science'
  - 'Data Science'
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

In the random module of NumPy, the **`.choice()`** method generates a random sample from a specified 1-D array. It is commonly used in simulations, random sampling, and testing scenarios where randomness is required.

## Syntax

```pseudo
numpy.random.choice(a, size=None, replace=True, p=None)
```

**Parameters:**

- `a`: 1-D array-like or int. If an integer `n` is provided, the array `[0, 1, ..., n-1]` is used as the input.
- `size` (Optional): The number of samples to draw. If `None`, a single sample is returned.
- `replace` (Optional): Determines whether sampling is with or without replacement.
  - If `True` (default), an element can be selected multiple times.
  - If `False`, each element can only be selected once.
- `p` (Optional): The probabilities associated with each element in `a`. Must sum to 1. If not specified, each element has an equal probability of being selected.

**Return value:**

In NumPy, the `.choice()` function returns a randomly selected sample or an array of randomly selected samples from the provided array `a`.

- If `size` is `None`, it returns a single randomly selected value.
- If `size` is specified, it returns an array of random selections, where the length of the array is equal to `size`. The selections can either be with or without replacement, depending on the `replace` parameter.

## Example

The example below shows how to randomly select elements from an array:

```py
import numpy as np

result = np.random.choice([10, 20, 30, 40], size=2, replace=False)

print(result)
```

A possible output of this code can be:

```shell
[20 30]
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
> **Note:** The probability distribution influences how often each item is chosen, but since replace=True, elements may be selected more than once.
