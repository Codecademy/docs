---
Title: 'triangular'
Description: 'Returns a random floating number from a triangular distribution.'
Subjects: 
  -"Computer Science"
  -"Data Science"
Tags:
  -"Functions"
  -"Methods"
  -"Random"
Catalog Content: 
  -"learn-python-3"
  -"paths/computer-science"
  -"paths/data-science"
---

"The ** `.triangular()` ** method returns a random floating number from a triangular distribution. Input parameters are `low`, `high` and `mode`. If `mode` not provided, the midpoint is set to default."

## Syntax

```pseudo
random.triangular(low,high,mode)
```

Where `low` and `high` correspond to the required lower and upper limits of distribution, and `mode` is an optional input for peak of the distribution.

## Example

In the example below, `.triangular()` is used to return a random integer between 50 and 500, biased towards 400.

```py
import random

print(random.triangular(50,500,400)
```

Example output:
```shell
395
```

## Codebyte Example

The following examples prints a random floating-point value between 1 and 100, biased towards 70; 350 and 1000, biased towards 385; 4 and 5, biased towards 4; 1 and 100 with default bias at midpoint.

```codebyte/python
import random

print('random.triangular(1,100,80)
print('random.triangular(350,1000,385)
print('random.triangular(4,5,4)
print('random.triangular(1,100)
```





