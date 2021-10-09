---
Title: 'Casting'
Description: 'Casting is method in which variable data type is converted into another data type.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Classes'
CatalogContent:
  - 'learn-python-3'
  - 'path/computer-science'
---

## Casting
Since casting helps in changing the variable data type. We can type cast integer to float using `flaot()` function or integer to string using `str()` function and vice versa. These conversion can be implicit or explicit.

## Implict Type Conversion
In this Pyhton convert one data type into another without user's involvement. Python itself render variable's data type. Variable type need not to be defined as we do in C++/C.

```py
x = 7
print(type(x))

y = 7.0
print(type(x))
```

This will be output:

```shell
<class 'int'>
<class 'float'>
```

## Explicit Type Conversion
In this user convert the data type of variable with the help of predefined function like `float()`, `int()`, `str()` to convert the variable data type. 

`str()`: `str()` function takes int or float as argument and convet it to string data type.
`int()`: `int()` function takes string or float as argument convert it to integer data type.
`float()`: `float()` function takes integer or string as argument and covert it to float data type.


### Type casting `int` to `string`

```py
x = 7  # Int type variable

y = str(x) # Casting into string

print(type(x))
print(y)
print(type(y))
```

This will be output:

```shell
<class 'int'>
7.2
<class 'str'>
```

### Type casting `float` to `string`

```py
x = 7.2  # Float type variable

y = str(x) # Casting into string

print(type(x))
print(y)
print(type(y))
```

This will be output:

```shell
<class 'float'>
7.2
<class 'str'>
```

### Type Casting `string` to `int`

```py
x = "7" # String type variable

y = int(x) # Casting into integer

print(type(x))
print(y)
print(type(y))
```

This will be output:

```shell
<class 'str'>
7
<class 'int'>
```

### Type casting `string` to `float`

```py
x = "7.2" # String type variable

y = float(x) # Casting into float

print(type(x))
print(y)
print(type(y))
```

This will be output:

```shell
<class 'str'>
7.2
<class 'float'>
```

### Type casting `int` to `float`

```py
x = 7  # Int type variable

y = float(x) # Casting into float

print(type(x))
print(y)
print(type(y))
```

This will be output:

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
