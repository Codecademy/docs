---
Title: 'break'
Description: 'Immediately exits the nearest enclosing `for` or `while` loop.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Break'
  - 'Loops'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`break`** keyword is used to exit a [loop](https://codecademy.com/resources/docs/python/loops) immediately. It’s commonly used to stop looping early based on a condition or to exit infinite loops.

## Syntax

The following is the syntax for using `break` in `while` loop:

```pseudo
while condition:
  if some_condition:
    break  # exit the loop
```

The following is the syntax for using `break` in `for` loop:

```pseudo
for item in iterable:
  if some_condition:
    break  # exit the loop
```

**Parameters:**

- The break statement does not take any parameters.

**Return value:**

The `break` statement does not return any value. It simply exits the nearest enclosing loop immediately.

## Example: Using `break` to Exit a Loop Early

This example iterates through a list of numbers and stops printing when the number 5 is reached, demonstrating how `break` exits the loop immediately:

```py
numbers = [1, 2, 3, 4, 5, 6, 7]
for number in numbers:
  print(number)

  if number == 5:
    break
```

Output of this code will be:

```shell
1
2
3
4
5
```

## CodeByte Example: Using `break` to Stop Loop on a Condition

This example loops through numbers and prints their doubles until it encounters a number divisible by 5, where it exits the loop using `break`:

```codebyte/python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers:
  if number % 5 == 0:
    break
  print(number * 2)
```
