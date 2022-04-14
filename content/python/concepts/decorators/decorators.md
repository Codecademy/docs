---
Title: 'Decorators'
Description: 'Decorators are a structural design pattern that wrap the original object, to add extra functionality dynamically, without modifying the original object. Decorators are usually used to run code before and/or after a function. Thus, they decorate the function with additional functionality, without changing the original function. They can also be used to alter the functionality of methods and classes.'
Subjects:
  - 'Web Development'
  - 'Developer Tools'
Tags:
  - 'Best Practices'
  - 'Classes'
  - 'Decorators'
  - 'Functions'
  - 'Objects'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Decorators are a structural design pattern which wrap the original object, to add extra functionality dynamically, without modifying the original object. Decorators are usually used to run code before and/or after a function. Thus, they decorate the function with additional functionality, without changing the original function. They can also be used to alter the functionality of methods and classes.

## Creating Decorators

Functions in Python are first class objects: they can be assigned to variables, passed into functions as arguments, returned from functions and declared inside functions.

With that in mind, a decorator can be created using functions or classes.

### Decorator using Functions

The general syntax for creating a decorator using functions is as follows:

```py
def decorator_name(original_function):

  def wrapper():
    # Code can be executed before the original function call

    original_function()

    # Code can be executed after the original function call

  return wrapper
```

The `original_function()`, in this case, is the function that is decorated with the `decorator_name()`.

For example, a decorator that upper cases the returned values from any function can be created as follows:

```py
# Define a function called upper_case_decorator() which will act as a decorator with parameter original_function

def upper_case_decorator(original_function):

  # Creating the wrapper to wrap additional code around the original function
  def wrapper():

    # Code can be executed before the original function
    print(f"'{original_function.__name__}' function execution will start now.")

    # Original function call with the upper cased argument
    result = original_function(arg1)

    # Code can be executed after the original function
    result = result.upper()
    return result

  # Return the wrapper function
  return wrapper
```

### Decorator using Classes

The general syntax for creating a decorator using classes is as follows:

```py
class decorator:

  def __init__(self, original_function):
    self.original_function = original_function


  def __call__(self):
    # Code can be executed before the original function

    # Original function call with the upper cased argument
    self.original_function()

    # Code can be executed after the original function
```

For example, a decorator created using class based syntax that upper cases the return values from any function:

```codebyte/py
# Define a class called upper_case_decorator_with_class which will act as a decorator with the __init__ method requiring a parameter original_function

class upper_case_decorator_using_class:

  def __init__(self, original_function):
    self.original_function = original_function


  def __call__(self):
    # Code can be executed before the original function
    print(f"'{self.original_function.__name__}' function execution will start now.")

    # Original function call with the upper cased argument
    result = self.original_function()

    # Code can be executed after the original function
    result = result.upper()
    return result
```

## Applying Decorator to a Function

The decorators created above accept an argument called `original_function` which can be any function. Therefore, we create a `greeting()` function and decorate it with the `@upper_case_decorator`.

```py
def greeting():
  return "hello Dharma"
```

`greeting()` function can be decorated with the common python syntax by calling the decorator function and assigning the result back to `greeting`.

```py
# Without using the @decorator syntax

greeting = upper_case_decorator(greeting)

print(greeting())
# Output: HELLO DHARMA
```

However, Python provides a simpler way to achieve the same result using the `@` symbol syntax. Add the line `@upper_case_decorator` at the start of function definition to decorate it.

```py
# Using the @decorator syntax

@upper_case_decorator
def greeting():
  return 'hello Dharma'

print(greeting())
# Output: HELLO DHARMA
```

`@upper_case_decorator` or `@upper_case_decorator_with_class` can be used to decorate other functions as well.

```py
@upper_case_decorator_with_class
def farewell():
  return 'bye'

farewell()
# Output: BYE
```

The full code with a decorator created using function will be:

```codebyte/py
def upper_case_decorator(original_function):

    def wrapper():
        result = original_function()
        result = result.upper()
        return result
    return wrapper

@upper_case_decorator
def greeting():
    return 'hello Dharma'

class upper_case_decorator_using_class:

  def __init__(self, original_function):
    self.original_function = original_function


  def __call__(self):
    # Code can be executed before the original function
    print(f"'{self.original_function.__name__}' function execution will start now.")

    # original function call with the upper cased argument
    result = self.original_function()

    # Code can be executed after the original function
    result = result.upper()
    return result

@upper_case_decorator_using_class
def farewell():
    return 'bye'

print(greeting())
print(farewell())
```

## Passing arguments to the Decorated functions

Arguments can be passed to the original function by creating parameters in the `wrapper()` function.

Eg: `arg1` is the parameter that the original function `greeting()` requires. Thus, the `wrapper()` function receives it and passes it along to the original function call.

```codebyte/py
def upper_case_decorator(original_function):

    # arg1 is received by the wrapper
    def wrapper(arg1):

        # arg1 is passed to the original function from the wrapper.
        result = original_function(arg1)

        result = result.upper()
        return result

    return wrapper

@upper_case_decorator
def greeting(arg1):
    return arg1 + '!'


print(greeting('hi'))

# output:
# HI!

```

General purpose decorators can be also be created that can accept any number of arguments by packing positional arguments using `*args` and by packing keyword arguments using `**kwargs`.

```py
def general_decorator(original_function):

    # accepting variable number of arguments
    def wrapper(*args, **kwargs):
        func(args, kwargs)

    return wrapper

@general_decorator
def original_function(args, kwargs):
    # code for the function
```

An example of variable arguments accepting decorator is as follows:

```codebyte/py
def upper_case_decorator(original_function):

    def wrapper(*arg1, **kwargs):

        result = original_function(*arg1)

        result = result.upper()
        return result
    return wrapper


@upper_case_decorator
def greeting(arg1):
    return arg1 + "!"


@upper_case_decorator
def double_greeting(arg1, arg2):
    return arg1 + ". " + arg2 + "!"


print(greeting('hi'))
# output:
# HI!

print(double_greeting('hi', 'hello'))
# Output:
# HI. HELLO!

```

## Passing Arguments to Decorators

Arguments can also be passed to the decorator itself. To pass arguments to the decorator, there should be a `decorator_wrapper_to_accept_decorator_arguments()` function wrapping the original decorator.

```py
def decorator_wrapper_to_accept_decorator_arguments(decorator_arg1, decorator_arg2):

    def decorator(original_function):

        def wrapper(*args, **kwargs):
            original_function(args, kwargs)

        return wrapper

    # (IMPORTANT)
    return decorator

@decorator_wrapper_to_accept_decorator_arguments('value 1', 'value 2')
def function_name(arg):
  # statements

```

Eg: With the greeting function, the decorator could be setup to use a `number_of_times_to_greet` parameter to greet once or more than once.

```py
def upper_case_decorator_wrapper(number_of_times_to_greet):
    def upper_case_decorator(original_function):

        def wrapper(*arg1, **kwargs):

            result = ""
            for i in range(number_of_times_to_greet):
                result += original_function(*arg1, **kwargs)
            result = result.upper()
            return result
        return wrapper

    return upper_case_decorator


@upper_case_decorator_wrapper(1)
def greeting(arg1):
    return arg1 + "!"


@upper_case_decorator_wrapper(2)
def greeting_twice(arg1):
    return arg1 + "!"


print(greeting('hi'))
# output:
# HI!

print(greeting_twice('hi'))
# output:
# HI!HI!

```

Even though, `greeting()` and `greeting_twice()` have the exact same function definition, their outputs are different because the decorator is executing these functions as per the `number_of_times_to_greet` argument passed to the decorator.

## `help()` with Decorators

The original function name and docstring are lost when it's wrapped by a decorator.

```codebyte/py
def upper_case_decorator(original_function):

    def wrapper():
        """decorates a function by uppercasing the return value"""

        result = original_function()
        result = result.upper()
        return result

    return wrapper

@upper_case_decorator
def greeting():
    """ returns a str greeting """
    return 'hello Dharma'

print(greeting.__name__)
print(greeting.__doc__)


# output:
# wrapper
# decorates a function by uppercasing the return value
```

The name of the function is `greeting()` and not `wrapper()`. The decorator completely hides the function and it's docstring. This also means that the `help(greeting)` call will be completely useless since it'll have no information about the `greeting()` function.

To solve this problem, python provides a decorator. `@functools.wraps()` decorator can be used to decorate the `wrapper()` function.

```codebyte/py
import functools

def upper_case_decorator(original_function):

    @functools.wraps(original_function)
    def wrapper():
        """ decorates a function by uppercasing the return value"""
        result = original_function()
        result = result.upper()
        return result
    return wrapper


@upper_case_decorator
def greeting():
    """returns a str greeting"""
    return 'hello Dharma'

print(greeting.__name__)
print(greeting.__doc__)


# output:
# greeting
# returns a str greeting
```

## Example Decorators

### Decorators can be used to measure the performance of a function

```codebyte/py
import functools
import time


def performance_measure(original_function):

    @functools.wraps(original_function)
    def wrapper(loop_val):
        """ decorates a function by measuring time for it's execution"""
        start_time = time.perf_counter()
        result = original_function(loop_val)
        stop_time = time.perf_counter()
        print(stop_time - start_time)
        return result
    return wrapper


@performance_measure
def long_loop(loop_value):
    for i in range(loop_value):
        pass


long_loop(10000)
long_loop(100000000)

```

### Decorators are used to create specialized functions

Special functions like 'once' that would only execute one time even if they're called more than once, can be created using decorators.

```codebyte/py
import functools


def run_once(original_function):
    has_run = False

    @functools.wraps(original_function)
    def wrapper():
        nonlocal has_run
        if not(has_run):
            original_function()
            has_run = True
        else:
            print("This function can no longer be executed")
    return wrapper


@run_once
def print_name():
    print("Dharma")


print_name()
print_name()

# output:
# Dharma
# This function can no longer be executed.
```
