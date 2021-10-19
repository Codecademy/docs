---
Title: 'Casting'
Description: 'Casting is a method that converts a variables data type into another data type.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Classes'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Casting is a method that converts a variable's data type into another data type. These conversions can be implicit (automatically compiled) or explicit (using built-in functions).

## Implicit Type Conversion

Python's interpreter automatically type casts one data type into another data type. This type of conversion is done without any user involvement. 

Since Python always convert smaller data type to higher data type to avoid data loss. In the below example, `7` a integer (lower data type) is type casted to a float (higher data type) when added with `2.2` to avoid data loss. So finally data type of y is `float`.

```py
y = 7 + 2.2 # Python automatically type cast y into float

print(y)
print(type(y))
```

This will output:

```shell
9.2
<class 'float'>
```

## Explicit Type Conversion

In explicit type casting (also known as type conversion), the user converts the data type of variable with the help of predefined functions:

- `str()`: This function takes int or float as an argument and converts it to string data type.
- `int()`: This function takes string or float as an argument converts it to integer data type.
- `float()`: This function takes integer or string as an argument and converts it to float data type.

### Type Casting `int` to `str`

Let's see casting of an integer to string with `str()` function. In below example `x` being an integer casted to string where `str()` function take x as argument.

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

Now let's convert string data type to int data type. In below example `x` being of string data type is casted to integer by `int()` function where `int()` function take x as argument in below example. Note that string has to be int value for cast to work.

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

In the above example, `x` is a string that contains a number. So there's no error during type casting. 

If `x` is a string of characters or letters, it will raise `valueError` during type casting. Below is illustration of this.

```py
x = 'seven'

# Casting into integer
y = int(x)
```

This will output:

```error
Traceback (most recent call last):
  File "<string>", line 3, in <module>
ValueError: invalid literal for int() with base 10: 'seven'
```

### Type Casting `float` to `str`

Below is illustration of casting of float data type to string where `float()` function take `x` as argument.

```py
x = 7.2

y = str(x) # Casting into string

print(type(x))
print(y)
print(type(y))
```

This will output:

```shell
<class 'float'>
7.2
<class 'str'>
```

### Type Casting `str` to `float`

Let's see the example of casting of string data type to float. In below example `x` is being of string data type is casted to float where `float()` function take `x` as argument.

```py
x = "7.2"

# Casting into float
y = float(x)

print(type(x))
print(y)
print(type(y))
```

This will output:

```shell
<class 'str'>
7.2
<class 'float'>
```

### Type Casting `int` to `float`

Below is an example to show how an int variable is converted to float. In below example `float()` function take `x` as argument where `x` in integer type data.

```py
x = 7

# Casting into float
y = float(x)

print(type(x))
print(y)
print(type(y))
```

This will output:

```shell
<class 'int'>
7.0
<class 'float'>
```

### Type Casting `float` to `int`

Similarly like above example , in this float data type variable is casted to integer where `int()` function take x as argument.

```codebyte/py
x = 7.2

# Casting into int
y = int(x)

print(x)
print(y)

print(type(x))
print(type(y))
```

This will ouput:

```shell
<class 'float'>
7
<class 'int'>
```
