---
Title: "Functions in Python"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Functions"
  - "Parameters"
  - "Arguments"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

Some tasks need to be performed multiple times within a program. Rather than rewrite the same code in multiple places, a function may be defined using the def keyword. Function definitions may include parameters, providing data input to the function.

Functions may return a value using the return keyword followed by the value to return.

```py
# Define a function my_function() with parameter x
 
def my_function(x):
  return x + 1
 
# Invoke the function
 
print(my_function(2))      # Output: 3
print(my_function(3 + 5))  # Output: 9
```

## Calling Functions

Python uses simple syntax to use, invoke, or call a preexisting function. A function can be called by writing the name of it, followed by parentheses.

For example, the code provided would call the doHomework() method.

```py
doHomework()
```

## Function Parameters

Sometimes functions require input to provide data for their code. This input is defined using parameters.

Parameters are variables that are defined in the function definition. They are assigned the values which were passed as arguments when the function was called, elsewhere in the code.

For example, the function definition defines parameters for a character, a setting, and a skill, which are used as inputs to write the first sentence of a book.

```py
def write_a_book(character, setting, special_skill):
  print(character + " is in " + 
        setting + " practicing her " + 
        special_skill)
```

## Returning Value from Function

A `return` keyword is used to return a value from a Python function. The value returned from a function can be assigned to a variable which can then be used in the program.

In the example, the function `check_leap_year()` returns a string which indicates if the passed parameter is a leap year or not.

```codebyte/py
def check_leap_year(year): 
  if year % 4 == 0:
    return str(year) + " is a leap year."
  else:
    return str(year) + " is not a leap year."
 
year_to_check = 2018

returned_value = check_leap_year(year_to_check)

print(returned_value) 
# Output: 2018 is not a leap year.
```