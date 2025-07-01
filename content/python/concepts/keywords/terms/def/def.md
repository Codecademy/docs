---
Title: 'def'
Description: 'Allows users to define a function.'
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

In Python, the **`def`** keyword can be used to define a [function](https://www.codecademy.com/resources/docs/python/functions). Functions allow users to group related code into blocks that can be executed repeatedly without rewriting the same lines. Using functions helps improve modularity, reduce redundancy, and increase readability.

## Syntax

```pseudo
def function_name(parameters):
  """
  Optional docstring
  """
  # Function body
  return result
```

In the syntax:

- `function_name`: The name of the function.
- `parameters` (Optional): The inputs that the function can accept.
- `return` (Optional): The value that the function returns.

## Example 1: A Simple Greeting Function

In this example, the function `greet()` prints the given greeting when called:

```py
def greet():
  print("Hello, Codecademy!")

greet()
```

Here is the output:

```shell
Hello, Codecademy!
```

## Example 2: Function with Parameters

In this example, the `add()` function takes two parameters and returns their sum:

```py
def add(a, b):
  return a + b

result = add(5, 3)

print("Sum:", result)
```

Here is the output:

```shell
Sum: 8
```

## Codebyte Example: Function with Default Parameter

In this example, the `power()` function has a default value (`2`) for the `exponent` parameter. If an argument is not provided for this parameter, the default value will be taken:

```py
def power(base, exponent=2):
  return base ** exponent

print(power(4))
print(power(3, 3))
```

Here is the output:

```shell
16
27
```

## Frequently Asked Questions

### 1. Can a function return multiple values?

Yes. Python functions have the ability to return multiple values as a tuple:

```py
def get_coordinates():
  return 10, 20

x, y = get_coordinates()
```

### 2. Can you define a function inside another function?

Yes. Python supports nested functions:

```py
def outer():
  def inner():
    print("Inner function")
  inner()
```

### 3. What happens if you call a function before it's defined?

Python will raise a `NameError`. Functions must be defined before they are called in the code flow.
