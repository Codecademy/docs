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

Functions often process data to achieve their intended task. Each value required by a function is passed as an argument when that function is called.

Parameters are variables that are declared in the function definition. When a function is called, each parameter is assigned the value which was passed as a corresponding argument.

For example, the function below contains parameters for a `character`, a `setting`, and a `special_skill`, which are used as inputs to write the first sentence of a book.

```py
def write_a_book(character, setting, special_skill):
  print(character + " is in " +
        setting + " practicing her " +
        special_skill)

write_a_book("Naomi", "engineering", "welding")
```

The output will be:

```pseudo
Naomi is in engineering practicing her welding.
```

## Returning Values from Functions

The `return` keyword is used to return a value from a Python function. The value returned from a function can be assigned to a variable which can then be used in the program.

In the example below, the check_leap_year()` function returns a string which indicates if the passed parameter is a leap year or not.

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

In the `calc_total()` function, there are `amount` and `discount` parameters.

- When the `discount` value is explicitly specified in the function call, that value is used.
- Otherwise, the default value of 10 is used.

```py
def calc_total(amount, discount=10):
  total = amount * (1 - 0.01*discount)
  return total

calc_total(100)     # Output: 90.0
calc_total(250, 5)  # Output: 237.5
```

## Keyword Arguments

Unless specified otherwise, the arguments passed into a function are assigned to each parameter in the order in which they appear in the function signature. Thus, they are also known as "positional arguments".

Python also supports keyword arguments — prefixing arguments with the names of parameters to assign them directly, regardless of the order.

```py
def write_a_book(name, color, clothing_item):
  print(name + " was wearing a " + color +
        " " + clothing_item + ".")

write_a_book(color="yellow", clothing_item="raincoat", name="Jonas")
```

The output will be:

```pseudo
Jonas was wearing a yellow raincoat.
```

Keyword arguments must be passed after positional arguments.

```py
write_a_book(name="Jonas", "yellow", "raincoat")
```

The call above raises the following exception:

```py
SyntaxError: positional argument follows keyword argument
```

## Functions with Varying Number of Arguments

When defining a function, it may not be necessary to know in advance how many arguments will be needed. In such cases, a special parameter `*args` is passed in. The asterisk, known in this context as the "packing operator", packs the arguments into a [tuple](https://www.codecademy.com/resources/docs/python/tuples) stored in `args`. This tuple can then be iterated through within the function.

In the example below, the `multiply()` function returns the product of all numbers used in the function call.

```py
def multiply(*args):
  product = 1
  for arg in args:
    product *= arg
  return product

multiply(21, 24)           # Output: 504
multiply(10, 5, 3, 6, 17)  # Output: 15300
```

Similarly, functions can be called with an arbitrary number of keyword arguments. In this case, a special parameter `**kwargs` is passed in, where the double asterisk is a packing operator that produces a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) rather than a tuple. The parameter name and value of each keyword argument are packed as a key-value pair stored in `kwargs`.

```py
def north_american_capitals(**kwargs):
  for country in kwargs:
    print(country + ": " + kwargs[country])

north_american_capitals(canada="Ottawa", us="Washington D.C.", mexico="Mexico City")
```

The output of the function call will be:

```pseudo
canada: Ottawa
us: Washington, D.C.
mexico: Mexico City
```

When defining a function, both forms of argument packing can be used. However, `args` must always precede `kwargs`.

## Dynamically Passing Arguments

When many arguments need to be passed into a function, it can be tedious to type them out individually. Instead, "argument unpacking" can be used to pass positional or keyword arguments dynamically.

```codebyte/py
def print_biography(name, country, age, hobby):
  print("Hello! My name is " + name + " and I'm " + str(age) +
        " years old. I come from " + country + ", and in my
        free time I like to " + hobby + ".")

adam = {
  "name": "Adam",
  "country": "Germany",
  "age": 23,
  "hobby": "paint"
}

print_biography(**adam)
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

Inside the `else` block of the function definition, two recursive calls to `fibonacci()` (representing the two previous numbers) are added and returned. Once `n` is equal to `0` or `1`, the base case (the `if` block) runs instead.

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

The act of defining a function using the `def` keyword binds that function to a name. However, some functions can be defined without giving them a name. Such functions are called "anonymous" and are defined using the `lambda` keyword.

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

Parameters are optional when defining an anonymous function. However, a function body must be present, and it must only contain a single return expression.

Lambda expressions are most commonly used to define single-use functions which are passed to higher-order functions.

```py
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

odd_numbers = filter(lambda n : n % 2 == 1, numbers)

print(list(odd_numbers))
# Output: [1, 3, 5, 7, 9]
```

Anonymous functions can also be evaluated immediately after they are defined. The expression inside the `print()` function below is known as an "immediately-invoked function expression" (IIFE).

```py
print((lambda a, b: a + b)(1986, 33))
# Output: 2019
```

If the function can be written in a single line, `lambda` could be useful. Otherwise, if the function is more complex, it is recommended to use the `def` keyword.
