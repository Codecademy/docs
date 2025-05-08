---
Title: 'Functions'
Description: 'Functions allow tasks to be performed multiple times within a program without having to be rewritten.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **function** in Python is a block of code that allows tasks to be performed multiple times within a program without having to be rewritten. It helps in reducing code duplication, improving readability and organization, dividing a program into smaller chunks, and facilitate debugging and testing.

## Defining a Function

Python functions are defined with the `def` keyword followed by the name of the function and parentheses:

```py
# Define a function
def hello():
  print("Hello, world!")

# Call the function
hello()
```

In this example, the `hello()` function prints the given message to the console.

Here is the output:

```shell
Hello, world!
```

## Defining a Function with Parameters

Python functions can be defined with parameters, which help in passing data to the function:

```py
# Define a function
def hello(name):
  print(f"Hello, {name}!")

# Call the function
hello("Robin")
```

In this example, a name is passed to the function as an argument, which is stored in the `name` parameter ([variable](https://www.codecademy.com/resources/docs/python/variables)).

Here is the output:

```shell
Hello, Robin!
```

> **Note:** Function names in Python are written in _snake_case_.

## Returning Values from a Function

In Python, a value can be returned from a function in two ways:

- Using the `return` keyword
- Using the `yield` keyword

### Returning Values Using `return`

The `return` keyword is used to return a value from a Python function. The value returned can then be stored in a variable and used in the program.

In this example, the `check_leap_year()` function returns a [string](https://www.codecademy.com/resources/docs/python/strings) that indicates if the given year is a leap year or not:

```py
# Define a function
def check_leap_year(year):
  if year % 4 == 0:
    return str(year) + " is a leap year."
  else:
    return str(year) + " is not a leap year."

# Store the year to check in a variable
year_to_check = 2018

# Call the function
returned_value = check_leap_year(year_to_check)

print(returned_value)
```

The resulting output will look like this:

```shell
2018 is not a leap year.
```

## Returning Values Using `yield`

A function can also return values with the `yield` keyword. Like `return`, `yield` suspends the function's execution and returns the value specified. Unlike `return`, the `yield` statement retains the state of the function and will resume where it left off on the next function call (i.e., execution resumes after the last `yield` statement). This way, the function can produce a number of values over time.

Functions using `yield` rather than `return` are known as [generator functions](https://www.codecademy.com/resources/docs/python/generators). Such a function can be used as an [iterator](https://www.codecademy.com/resources/docs/python/iterators).

This example will automatically generate successive Fibonacci numbers:

```py
# Function to produce infinite Fibonacci numbers
def fibonacci():
  # Generate first number
  a = 1
  yield a

  # Generate second number
  b = 1
  yield b

  # Infinite loop
  while True:
    # Return sum of a + b
    c = a + b
    yield c

    # Function resumes loop here on next call
    a = b
    b = c

# Iterate through the Fibonacci sequence until a limit is reached
for num in fibonacci():
  if num > 50:
    break

  print(num)
```

Here is the output:

```shell
1
1
2
3
5
8
13
21
34
```

## Python Library Functions

Python library functions are built-in functions that are always available for use without needing to define them explicitly. These functions are a part of the Python standard library and help perform common tasks like mathematical operations, type conversions, string manipulations, and more.

Some examples for Python library functions are:

- [`print()`](https://www.codecademy.com/resources/docs/python/built-in-functions/print)
- [`max()`](https://www.codecademy.com/resources/docs/python/built-in-functions/max)
- [`min()`](https://www.codecademy.com/resources/docs/python/built-in-functions/min)
- [`sum()`](https://www.codecademy.com/resources/docs/python/built-in-functions/sum)
- [`abs()`](https://www.codecademy.com/resources/docs/python/built-in-functions/abs)
- [`type()`](https://www.codecademy.com/resources/docs/python/built-in-functions/type)

### Example: Using the `len()` Function

The [`len()`](https://www.codecademy.com/resources/docs/python/built-in-functions/len) function is a commonly used library function in Python that returns the total number of elements in an object like a string, [list](https://www.codecademy.com/resources/docs/python/lists), [tuple](https://www.codecademy.com/resources/docs/python/tuples), etc.

```py
# Define a list
my_list = [10, 20, 30, 40]

# Return the number of items in the list
print(len(my_list))
```

Here is the output:

```shell
4
```

## Higher-Order Functions

In Python, functions are treated as first-class objects. This means that they can be assigned to variables, stored in data structures, and passed to or returned from other functions.

Functions are considered to be _higher-order_ values because they can be used as parameters or return values for other functions.

## Example: Using the `filter()` Function

The built-in [`filter()`](https://www.codecademy.com/resources/docs/python/built-in-functions/filter) function in Python is used to filter elements from an iterable (like lists, tuples, or sets) that satisfy a specific condition:

```py
# Function that returns True if n is a perfect square, and False otherwise
def is_perfect_square(n):
  return (n ** 0.5).is_integer()

# Store the numbers to check in a variable
numbers = [3, 4, 37, 9, 7, 32, 25, 81, 79, 100]

# Call the function
perfect_squares = filter(is_perfect_square, numbers)

print(list(perfect_squares))
```

`filter()` takes a predicate (a function that returns a boolean value) and an iterable, and returns a new iterable containing all elements of the first one that makes the predicate `True`.

Here is the output:

```shell
[4, 9, 25, 81, 100]
```

## Codebyte Example: Calculate the Area of a Rectangle

This codebyte example defines a function to calculate the area of a rectangle with the help of its length and width:

```codebyte/python
# Define the function
def calculate_area(length, width):
  # Return the area of a rectangle
  area = length * width
  return area

# Calling the function
l = 5
w = 3
result = calculate_area(l, w)

print(f"The area of the rectangle is {result}.")
```

## Frequently Asked Questions

### 1. What's the difference between a parameter and an argument in a Python function?

- A parameter is a variable used in the function definition.
- An argument is the value passed to the function when it's called.

### 2. What happens if you call a function before defining it?

Python will raise a `NameError` because the function must be defined before it is called.

### 3. What is a default parameter in a Python function?

A default parameter in a Python function is a value that is used if no argument is provided:

```py
def hello(name="Guest"):
  print(f"Hello, {name}!")
```

Here, the given value will be used for the `name` parameter (variable) if no argument is passed to the function.
