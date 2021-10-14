---
Title: 'Casting'
Description: 'Casting is a method in which a variables data type converts into another data type.'
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

Since casting changes the variable's data type, the `float()` function type cast an integer to a float. Alternatively, `str()` function type cast an integer to a string. These conversions can be implicit
or explicit.

## Implicit Type Conversion

Python interpreter automatically type cast one data type into another data type. Such type of coversions are done without user's involvement.

```py
a = 7  # Int type variable
b = 2.2 # Float type variable
print(type(a))
print(type(b))

y = a + b # Python automatically type cast 'y' into float
print(y)  
print(type(y))
```

This will output:

```shell
<class 'int'>
<class 'float'>
9.2
<class 'float'>
```

## Explicit Type Conversion

In this user convert the data type of variable with the help of predefined function like `float()`, `int()`, `str()` to convert the variable data type.

- `str()`: This function takes int or float as an argument and converts it to string data type.
- `int()`: This function takes string or float as an argument converts it to integer data type.
- `float()`: This function takes integer or string as an argument and converts it to float data type.

### Type Casting `int` to `string`

```py
x = 7  # Int type variable

y = str(x) # Casting into string

print(type(x))
print(y)
print(type(y))
```

This will output:

```shell
<class 'int'>
7
<class 'str'>
```

### Type Casting `float` to `string`

```py
x = 7.2  # Float type variable

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

### Type Casting `str` to `int`

```py
x = "7" # String type variable

y = int(x) # Casting into integer

print(type(x))
print(y)
print(type(y))
```

This will output:

```shell
<class 'str'>
7
<class 'int'>
```

### Type Casting `string` to `float`

```py
x = "7.2" # String type variable

y = float(x) # Casting into float

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

```py
x = 7  # Int type variable

y = float(x) # Casting into float

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

```codebyte/py
x = 7.2 # Float variable type

y = int(x) # Casting into int

print(type(x))
print(y)
print(type(y))
```
