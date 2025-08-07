---
Title: 'Variables'
Description: 'Variables are used to store data that can be used and manipulated throughout a program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Booleans'
  - 'Integers'
  - 'Strings'
  - 'Variables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Python variables help in storing data that can be used and manipulated throughout a program. Unlike some other languages, Python doesn't require explicit declaration of a variable’s [data type](https://www.codecademy.com/resources/docs/python/data-types). Whether storing a number, a [string](https://www.codecademy.com/resources/docs/python/strings) of text, or even a complex data structure like a [list](https://www.codecademy.com/resources/docs/python/lists), variables act as containers for that information, allowing code to reference and reuse it.

## Creating Python Variables

The assignment [operator](https://www.codecademy.com/resources/docs/python/operators) (`=`) is used to create a Python variable:

```py
x = 10
name = "Alice"
is_active = True
```

In this example:

- `x` stores an integer (`10`)
- `name` stores a string (`"Alice"`)
- `is_active` stores a Boolean value (`True`)

Python automatically infers the type of data being assigned.

## Modifying Python Variables

The assignment operator (`=`) can also be used to change the value of a Python variable after its creation:

```py
# Creating a variable
x = 10

# Changing the value of the variable
x = 15
```

## Python Variable Naming Conventions

A Python variable can have a short name (`x`, `y`, etc.) or a more descriptive name (`age`, `grade`, `grocery_list`, etc.).

Here are the rules to follow while naming Python variables:

- A variable name should begin with a letter or the underscore character. It cannot start with a number.
- A variable name can only include alpha-numeric characters and underscores (`A`-`z`, `0`-`9`, and `_`).
- Variable names are case-sensitive (`num`, `Num`, and `NUM` are three different variables).

These are some valid variable names:

```py
my_var = 1
_myvar = 2
myVar3 = 3
```

These are some invalid variable names:

```py
3var = 10    # Starts with a number (invalid)
my-var = 20  # Contains a hyphen (invalid)
if = "hello" # 'if' is a reserved keyword (invalid)
```

## Example 1: Basic Arithmetic with Python Variables

This example adds two Python variables:

```py
a = 5
b = 3

sum_result = a + b

print("Sum:", sum_result)
```

Here is the output:

```shell
Sum: 8
```

## Example 2: Swapping Python Variables

Python makes it easy to swap values between two variables:

```py
x = 10
y = 20

x, y = y, x

print("x =", x)
print("y =", y)
```

Here is the output:

```shell
x = 20
y = 10
```

## Codebyte Example: Using Python Variables in Strings

Python variables can be used within strings using f-strings (Python 3.6+):

```codebyte/python
name = "Alice"

age = 30

print(f"My name is {name} and I am {age} years old.")
```

## Frequently Asked Questions

### 1. What is the difference between a Python variable and a constant?

- A Python variable can change its value during program execution.
- A constant is intended to remain unchanged. Python doesn't enforce constants but naming them in all-caps (e.g., `PI = 3.14`) is a convention.

### 2. Can I declare multiple Python variables at once?

Yes, you can declare multiple Python variables at once:

```py
a, b, c = 1, 2, 3
```

### 3. Do I need to specify the data type of Python variables?

No. Python uses dynamic typing, so the type of a Python variable is inferred automatically.
