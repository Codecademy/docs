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
Catalog Content: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.triangular()`** method returns a random floating-point number from a triangular distribution. The input parameters are `low`, `high`, and `mode`. If `mode` is not provided, it defaults to the midpoint between `low` and `high`.

## Syntax

```pseudo
random.triangular(low, high, mode)
```

- `low`: Lower limit of the distribution (optional; defaults to 0.0).
- `high`: Upper limit of the distribution (optional; defaults to 1.0).
- `mode`: Peak of the distribution (optional; defaults to the midpoint between low and high).

## Example

In the example below, `.triangular()` is used to return a random integer between *50* and *500*, biased towards *400*.

```py
import random

print(random.triangular(50,500,400))
```

The code above produces the following output:

```shell
395
```

> **Note**: The output value will vary with each execution because `.triangular()` generates a random number within the specified distribution.

## Codebyte Example

Run the following code to see how `.triangular()` generates random values with different biases:

```codebyte/python
import random

print(random.triangular(1,100,80))
print(random.triangular(350,1000,385))
print(random.triangular(4,5,4))
print(random.triangular(1,100))
```
