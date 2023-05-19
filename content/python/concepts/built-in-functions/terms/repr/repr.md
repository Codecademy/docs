---
title: Python repr() Built-in Function
---

The `repr()` function in Python is a built-in function that returns a string representation of an object. It is commonly used to obtain a printable representation of an object that can be used to recreate the object.

## Syntax

The syntax of the `repr()` function is as follows:

```pseudo
repr(object)
```

where object is the object you want to represent with created string.

## Example

Here's an example showing `repr()` function in use:

 ```py
 x = 2
 print(repr(x))
 ```
Output:
```py
2
```
In this example we take object `x` which is integer and with `repr()` function print out string representaion of that object.

## Codebyte example

```codebyte/python
number_list = [3,4,5,6]
print(repr(number_list))
```
In this example we print out string representation of list called `number_list` using `repr()` function. Output would look like this: '[3,4,5,6]'

```codebyte/python

```
