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

Since casting helps in changing the variable data type. We can type cast integer to float using `float()` function or integer to string using `str()` function and vice versa. These conversion can be implicit or explicit.

## Implict Type Conversion

In this Python convert one data type into another without user's involvement. Python itself render variable type. Variable type need not to be defined as we do in C++/C.

```py
x = 7
print(type(x))

y = 7.0
print(type(x))
```

## Explicit Type Conversion

In this user convert the data type of variable with the help of predefined function like `float()`, `int()`, `str()` to convert the variable data type.

str():str() function takes int or float as argument and convet it into string data type.
int():int() function takes string or float as argument convert it into integer data type.
float():float() function takes integer or string as argument and covert it into float data type.

## Type Casting `int` into `string`

```py
x = 7  # int type variable

y = str(x) # casting into string

print(y)
print(type(y))
```

### Type Casting `float` to `string`

```py
x = 7.2  # Float type variable

y = str(x) # Casting into string

print(y)
print(type(y))
```

### Type Casting `string` to `int`

```py
x = "7" # String type variable

y = int(x) # Casting into integer

print(y)
print(type(y))
```

### Type Casting `string` to `float`

```py
x = "7.2" # String type variable

y = float(x) # Casting into float

print(y)
print(type(y))
```

### Type Casting `int` to `float`

```codebyte/py
x = 7  # int type variable

y = float(x) # Casting into float

print(y)
print(type(y))
```
