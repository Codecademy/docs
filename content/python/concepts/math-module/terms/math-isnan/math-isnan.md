---
Title: 'Math Isnan Method'
Description: 'Math-isnan method returns True if x is a NaN (not a number) and False if x is a number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Modules'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`Math-isnan`** method belongs to the group of Number-theoretic and representation functions in the [math-module](https://www.codecademy.com/resources/docs/python/math-module) and is used to handle simple (not complex) numbers. Except when explicitly noted otherwise, this function expects a float-type numeric value.

## Syntax

`math.isnan(x)`: Returns **True** if `x` is a NaN (not a number) and **False** if `x` is a number. The parameter `x` is required.

```pseudo
math.isnan(x)
```

## Examples

Using an integer (a number)

```py
import math

num = 20
print(math.isnan(num))
```

The example above results in the following output:

```shell
False
```

Using a NaN value from type `float`:

```py
import math

nan = float('nan')
print(math.isnan(nan))
```

The example above results in the following output:

```shell
True
```

## Codebyte Example

Run the following code to understand how the `math.isnan(x)` method works:

```codebyte/python
import math

is_number = 7
print(math.isnan(is_number))

not_a_number = float('nan')
print(math.isnan(not_a_number))
```
