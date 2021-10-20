---
Title: 'Functions'
Description: 'Some tasks need to be performed multiple times within a program. Rather than rewrite the same code in multiple places, a function may be defined using the def keyword. Function definitions may include parameters, providing data input to the function. Functions may return a value using the return keyword followed by the value to return. py def myfunction(x): return x + 1 print(myfunction(2)) # Output: 3 print(my_function(3 + 5)) # Output: 9'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Some tasks need to be performed multiple times within a program. Rather than rewrite the same code in multiple places, a function may be defined using the `def` keyword. Function definitions may include parameters, providing data input to the function.

Functions may return a value using the `return` keyword followed by the value to return.

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

For example, the code provided would call the `doHomework()` function.

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

The `return` keyword is used to return a value from a Python function. The value returned from a function can be assigned to a variable which can then be used in the program.

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
```

## Default Values for Function Parameters

Function parameters can also be initialized to a default value.

In the function `calc_total()`, the default value of `discount` is 10.

- When the `discount` value is explicitly specified in the function call, that value is used.
- Else, the default value of 10 is used.

```py
def calc_total(amount, discount=10):
  total = amount * (1 - 0.01*discount)
  return total

calc_total(100)

calc_total(250, 5)
```

## Functions with Variable Number of Parameters

When the number of arguments varies with each function call, the function definition can be modified accordingly.

In the function declaration, `args`,  is passed in with the special character `*` indicating that it's possible to loop through varying number of arguments during the function call. 

`*` turns the variable into a tuple, which is an iterable object.

It is important to note `*` is the operator here, `args` is just the variable name. 

In the example below, the `multiply()` function returns the product of all numbers used in the function call.

```py
def multiply(*args):
  product = 1
  for arg in args:
    product *= arg
  return product

multiply(21, 24, 17)

multiply(10, 5, 3, 6)
```

## Recursion

Functions in Python can call themselves — a concept known as "recursion". Recursion provides an elegant way to solve problems by breaking them down into smaller, more easily-solvable parts, and using those parts to build up a solution.

Consider the Fibonacci sequence, whose first two terms are explicitly defined to be 0 and 1. Each subsequent term is constructed by taking the sum of the previous two terms. Thus, the first six terms of the sequence are 0, 1, 1, 2, 3, and 5.

Defining a function that prints the `n`-th Fibonacci number is most easily achieved using recursion.

```codebyte/py
def fibonacci(n):
  if n <= 1:
    # Base cases
    return n
  else:
    # Sum of the previous two terms
    return fibonacci(n - 2) + fibonacci(n - 1)

for i in range(6):
  print(fibonacci(i))
```

Notice how inside the `fibonacci()` function, it calls itself.

## Higher-Order Functions

In Python, functions are treated as "first-class objects". This means that they can be assigned to variables, stored in data structures, and passed to or returned from other functions.

A function is considered to be of "higher-order" if it takes a function as a parameter or returns a function. One example is the built-in `filter()` function:

```py
# Returns true if n is a perfect square, and false otherwise

def is_perfect_square(n):
  return (n ** 0.5).is_integer()

numbers = [3, 4, 37, 9, 7, 32, 25, 81, 79, 100]

perfect_squares = filter(is_perfect_square, numbers)

print(list(perfect_squares))
# Output: [4, 9, 25, 81, 100]
```

`filter()` takes a predicate (a function that returns a boolean value) and an iterable, and returns a new iterable containing all elements of the first one that make the predicate true.

## Anonymous Functions

The act of defining a function using the `def` keyword binds that function to a name. However, functions can also be defined without giving them a name. Such functions are called "anonymous" and are defined using the `lambda` keyword.

```pseudo
lambda <parameters> : <function body>
```

The following two definitions are equivalent.

```py
def add(a, b):
  return a + b
```

```py
add = lambda a, b: a + b
```

The expression to the right of the assignment operator is called a "lambda expression". The Python interpreter takes this expression and defines a function object which can be bound to an identifier (in this case, `add`). There is no difference between binding a function to a name using the assignment operator or by using the `def` keyword.

Lambda expressions are most commonly used to define simple, single-use functions which are passed to higher-order functions.

```py
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

odd_numbers = filter(lambda n : n % 2 == 1, numbers)

print(list(perfect_squares))
# Output: [1, 3, 5, 7, 9]
```

For more complex functions with larger bodies, it is recommended to use the `def` keyword to keep code readable.
