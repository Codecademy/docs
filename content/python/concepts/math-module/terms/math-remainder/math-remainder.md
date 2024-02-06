---
Title: 'math.remainder()'
Description: 'return the remainder of the division x/y.'
Subjects: 
  - 'Web Dev'
  - 'App Dev'
Tags:
  - 'Math Methods'
  - 'Arithmetic'
  - 'Numbers'
CatalogContent:
  - 'learn-python'
  - 'web development'
  - 'app development' 
  - 'path/ IT careers'
---

The **`math.remainder()`** method is the remainder of the division **x/y**. It will return a **Float** value, representing the remainder.

The remainder is the difference between *x* and the closest **Integer** multiple of *y*.

## Syntax

```pseudo
math.remainder(x,y)
```

The **`math.remainder()`**  accepts two parameters :
  - *x* : This is required and needs to be a numeric value. Is the number you want to divide
  - *y* : This is required and needs to be a numeric value. Is the number you want to divide to.

The Parameter *y* has to be a non-zero number or we will get a **`ValueError`**

## Example 1

In this example we will return the remainder between two **Integer** values.

```python
# Import math Library
import math

# Return the remainder of x/y
print(math.remainder(10, 2))
print(math.remainder(34, 3))
```
```shell
# Output 
# 0.0
# 1.0
```

## Example 2

In this example we will return the remainder between two **Float** values.

```python
# Import math Library
import math

print(math.remainder(25.5, 5.7))
print(math.remainder(58.9, 5.5))
```
```shell
# Output
# 2.6999999999999993
#-1.6000000000000014
```

## Example 3

We can use multiple `Methods` to convert the result to an **Integer** value.

```python
# Import math Library
import math

print(math.floor(math.remainder(25.5, 5.7)))
print(math.ceil(math.remainder(25.5, 5.7)))
```
```shell 
# Output
# Now will be 2
# Now will be 3
```

## Codebyte Example

The following code is runnable and demonstrates a few examples of the use of the `math.remainder()` method:

```codebyte/python
import math

print(math.remainder(10,2))

print(math.remainder(22.5,5.6))

print(math.floor(math.remainder(25.5,5.7)))
```











  
