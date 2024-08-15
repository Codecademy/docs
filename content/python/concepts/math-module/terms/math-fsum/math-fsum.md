---
Title: 'math.fsum()'
Description: 'Takes an iterable as an argument and return an accurate floating-point sum. This function avoids loss of precision my tracking intermediate partial sums.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Takes an iterable as an argument and return an accurate floating-point sum. This function avoids loss of precision by tracking intermediate partial sums.

## Syntax

```python
math.fsum(iterable)
```

The **`math.fsum()`** function takes in an iterable parameter (as a list of numbers) and returns the accurate floating-point sum.

## Example

Use `math.fsum()` to return the accurate floating-point sum of `[1e-2, 1e-3, 1e-4]`:

```python
import math

numbers_list = [1, 1e-1, 1e-2, 1e-3, 1e-4]
print(math.fsum(numbers_list))
```

The above code gives the following output:

```python
1.1111
```

## Codebyte Example

Run the following example that uses the `math.fsum()` function to understand its working:

```codebyte/python
import math

numbers_list = [2.3, 3.5e-3, 12.3, 0.00001]
print(math.fsum(numbers_list))
```
