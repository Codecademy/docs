---
Title: '.triangular()'
Description: 'Returns a random floating number from a triangular distribution.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Random'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.triangular()`** method returns a random floating-point number from a triangular distribution. The input parameters are `low`, `high`, and `mode`. If `mode` is not provided, it defaults to the midpoint between `low` and `high`.

## Syntax

```pseudo
random.triangular(low, high, mode)
```

- `low`: The lower limit of the distribution (optional; defaults to _0.0_).
- `high`: The upper limit of the distribution (optional; defaults to _1.0_).
- `mode`: The peak of the distribution (optional; defaults to the midpoint between `low` and `high`).

## Example

In the example below, the `.triangular()` method is used to return a random integer between _50_ and _500_, biased towards _400_:

```py
import random

print(random.triangular(50,500,400))
```

The code above produces the following output:

```shell
395
```

> Note: The output value will vary with each execution because `.triangular()` generates a random number within the specified distribution.

## Codebyte Example

The following codebyte example demonstrates how the `.triangular()` method generates random values with different biases:

```codebyte/python
import random

print(random.triangular(1,100,80))
print(random.triangular(350,1000,385))
print(random.triangular(4,5,4))
print(random.triangular(1,100))
```
