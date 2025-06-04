---
Title: 'try'
Description: 'Used to define a block of code that may raise and handle exceptions.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Python'
  - 'Exceptions'
  - 'Error Handling'
  - 'Keywords'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`try`** keyword in Python is used to define a block of code that may raise an exception. It allows a programmer to catch and handle errors gracefully using `except`, `else`, and `finally` clauses.

## Syntax

```py
try:
    # Code that might raise an exception
except SomeException:
    # Code to handle the exception
else:
    # (optional) Runs if no exception occurs
finally:
    # (optional) Always runs no matter what
```
## Example

```py
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")
else:
    print("Division successful.")
finally:
    print("This block always runs.")
#Output
#Cannot divide by zero.
#This block always runs.
```

## Codebyte Example

```codebyte/python
try:
    number = int(input("Enter a number: "))
    print("Reciprocal is:", 1 / number)
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero.")
finally:
    print("Thanks for trying!")


