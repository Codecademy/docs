---
Title: 'math.fsum()'
Description: 'Takes an iterable as an argument and returns an accurate floating point sum.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Numbers'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.fsum()`** [function](https://www.codecademy.com/resources/docs/python/functions) takes an iterator as an argument and returns a floating point sum of all the items in the iterator. This function avoids loss of precision by tracking intermediate partial sums.

## Syntax

```pseudo
math.fsum(iterable)
```

- `iterable`: A list, tuple, or array to sum.

## Example

Use `math.fsum()` to return the accurate floating point sum of `[1e-2, 1e-3, 1e-4]`:

```python
import math

numbers_list = [1, 1e-1, 1e-2, 1e-3, 1e-4]
print(math.fsum(numbers_list))
```

The above code gives the following output:

```shell
1.1111
```

## Codebyte Example

Run the following example that uses the `math.fsum()` function to understand its working:

```codebyte/python
import math

numbers_list = [2.3, 3.5e-3, 12.3, 0.00001]
print(math.fsum(numbers_list))
```
