---
Title: 'math.isclose()'
Description: 'Returns True when two floating point numbers are close to each other within a specified tolerance.'
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

The **`math.isclose()`** function returns True when two floating point numbers are close to each other within a specified tolerance. This is useful when one wants to compare a value to an expected value, without requiring exact equality. Consider adding float values and comparing them: *0.1 + 0.2 == 0.3*. While this comparison returns 'False', using the .isclose() function would return 'True'.

## Syntax

```pseudo
math.isclose(x, y, rel_tol=1e-9, abs_tol=0.0)
```

The `math.isclose()` function takes four arguments. 

The first two arguments are the two float values to be compared. These are required.

The third argument is for relative tolerance, the maximum difference between x and y. The default is `rel_tol=1e-9`, which returns True when the two values are the same within 9 decimal digits. This can be defined with the exponetial format used by the default value, or as a decimal to represent percentage. A 1% tolerance would be defined as `rel_tol=0.01`. The tolerance used must be at or above zero.

The fourth argument is for the minimum absolute tolerance. The default is `abs_tol=0`. This can be defined by any number at or above 0. Absolute tolerance is best used for near zero comparisons.



## Example

Here is an example of `math.isclose()` to return True:

```py

x = 0.1
y = 0.2

print(math.isclose(x + y, 0.3))
```

The above code gives the following output:

```shell
True
```

## Codebyte Example

The following example is runnable and uses the `math.isclose()` function to return True or False of the closeness of two float numbers:

```codebyte/python
import math

#returns True
print(math.isclose(0.1 + 0.2, 0.3))

#returns False with default rel_tol
print(math.isclose(567.34, 566.25))

#returns True with 10% rel_tol
print(math.isclose(567.34, 566.25, rel_tol=0.1))

#returns True
print(math.isclose(0.0000000001, 0.0000000002, abs_tol=0.0000000001))

#returns False
print(math.isclose(0.0000000001, 0.0000000012, abs_tol=0.0000000001))
```
 *Note that the first example returns True where a comparison of **0.1 + 0.2 == 0.3** would return False.*