---
Title: 'Casting'
Description: 'Casting, also known as type conversion, is a process that converts the data type of a variable into another data type.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Variables'
  - 'Variable Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Casting, also known as type conversion, is a process that converts a variable's data type into another data type. These conversions can be implicit (automatically interpreted) or explicit (using built-in functions).

## Implicit Type Conversion

The Python interpreter automatically performs type conversion on some operations without any user involvement.

To avoid data loss, Python converts smaller data types to higher data types. In the below example, the integer 7 is converted to a float when added with 2.2. Since the expression represents the sum of two `float` values, the data type of `y` is also `float`.

```py
y = 7 + 2.2 
# Python automatically type casts y into float

print(y) 
# Output: 9.2

print(type(y))
# Output: <class 'float'>
```

Since the expression above represents the sum of two `float` values, the data type of `y` is also a `float`.

## Explicit Type Conversion

Explicit type casting involves Python's predefined functions that act as a constructor of another data type:

- The `str()` function takes an integer or float as an argument and converts it to a string.
- The [`int()` function](https://www.codecademy.com/resources/docs/python/built-in-functions/int) takes a string or float as an argument converts it to an integer.
- The [`float()` function](https://www.codecademy.com/resources/docs/python/built-in-functions/float) takes an integer or string as an argument and converts it to a float.

### Type Casting `int` to `str`

In example below, the integer `x` is casted to a string using the `str()` function.

```py
x = 7

# Casting into string
y = str(x)

print(x)
print(y)

print(type(x)) # Printing the data type of x
print(type(y)) # Printing the data type of y
```

This will output:

```shell
7
7
<class 'int'>
<class 'str'>
```

### Type Casting `str` to `int`

The below example does the opposite — the string variable `x` is casted to an integer using the `int()` function.

```py
x = "7"

# Casting into integer
y = int(x)

print(x)
print(y)

print(type(x))
print(type(y))
```

This will output:

```shell
7
7
<class 'str'>
<class 'int'>
```

In the above example, `x` must be the string representation of an integer for casting to work. `x` is a string that contains a number so there's no error when type casting.

If `x` is a string of characters or letters, it will raise `valueError` during type casting:

```py
x = 'seven'
y = int(x)
```

This will output:

```error
Traceback (most recent call last):
  File "<string>", line 3, in <module>
ValueError: invalid literal for int() with base 10: 'seven'
```

## Operations on Different Types of Data

When operating on data, it is important to be mindful of the data types associated with it. The following code is a flawed attempt to print the square of a number specified by the user. When run, a `TypeError` will be thrown:

```codebyte/py
num = input("Please enter a number: ")
print(num ** 2)
```

The [`input()` function](https://www.codecademy.com/resources/docs/python/built-in-functions/input) takes input from the user and stores it in a variable as a string. However, the `**` operator takes two numbers and returns the first number to the power of the second. In order to make the code work, the input variable must be cast to a number type. Try to edit the code above to successfully square a number inputted by the user.
