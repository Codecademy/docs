---
Title: 'math.remainder()'
Description: 'return the remainder of the division x/y.'
Subjects: 
  - 'Developer Tools'
  - 'Web Development'
  - 'Discrete Math'
Tags:
  - 'Math Methods'
  - 'Arithmetic'
  - 'Numbers'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.remainder()`** method is the remainder of the division `x/y`. It will return a float value, representing the remainder. The remainder is the difference between `x` and the closest integer multiple of `y`.

## Syntax

```pseudo
math.remainder(x,y)
```

  - `x`: It is the number to be divided.
  - `y`: It is the number by which `x` is divided.

>**Note:** The Parameter `y` has to be a non-zero number or will return a `ValueError`.

## Example 1

This example will return the remainder between two **Integer** values.

```python
# Import math Library
import math

# Return the remainder of x/y
print(math.remainder(10, 2))
print(math.remainder(34, 3))
```

The output for the above code will be:

```shell
0.0
1.0
```

## Example 2

This example will return the remainder between two **Float** values.

```python
# Import math Library
import math

print(math.remainder(25.5, 5.7))
print(math.remainder(58.9, 5.5))
```

the `output` for the above line of code will be:

```shell
2.6999999999999993
-1.6000000000000014
```

## Example 3

The use of multiple `Methods` can then convert the result to an **Integer** value.

```python
# Import math Library
import math

print(math.floor(math.remainder(25.5, 5.7)))
print(math.ceil(math.remainder(25.5, 5.7)))
```

The output for the above line of code will be:

```shell 
2
3
```

## Codebyte Example

The following code is runnable and demonstrates a few examples of the use of the `math.remainder()` method:

```codebyte/python
import math

print(math.remainder(10,2))

print(math.remainder(22.5,5.6))

print(math.floor(math.remainder(25.5,5.7)))
```