---
Title: 'break'
Description: 'Immediately exits the nearest enclosing `for` or `while` loop.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Break'
  - 'For'
  - 'Loops'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`break`** keyword in Python is used to exit a [loop](https://codecademy.com/resources/docs/python/loops) immediately. It’s commonly used to stop looping early based on a condition or to exit infinite loops.

## Syntax

Here is the syntax for using `break` in `while` loop:

```pseudo
while condition:
  if some_condition:
    break  # Exit the loop
```

Here is the syntax for using `break` in `for` loop:

```pseudo
for item in iterable:
  if some_condition:
    break  # Exit the loop
```

**Parameters:**

- The `break` statement does not take any parameters.

**Return value:**

The `break` statement does not return any value. It simply exits the nearest enclosing loop immediately.

## Example: Exiting a Loop Early Using `break`

This example iterates through a list of numbers and stops printing when the number 58 is reached, demonstrating how `break` exits the loop immediately:

```py
numbers = [14, 25, 36, 47, 58, 69, 70]
for number in numbers:
  print(number)

  if number == 58:
    break
```

The output of this code will be:

```shell
14
25
36
47
58
```

## Codebyte Example: Using `break` to Stop Loop on a Condition

This codebyte example loops through numbers and prints their doubles until it encounters a number divisible by 29, where it exits the loop using `break`:

```codebyte/python
numbers = [14, 25, 36, 47, 58, 69, 70]
for number in numbers:
  if number % 29 == 0:
    break
  print(number * 2)
```
