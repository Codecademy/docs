---
Title: 'casting'
Description: 'casting is method in which variable data type is converted into another data type.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Classes'
CatalogContent:
  - 'learn-python-3'
  - 'path/Computer-Science'
---

## Casting

Since casting helps in changing the variable data type. We can type cast integer to float using flaot() function or integer to string using str() function and vice versa. These conversion can be implicit or explicit.

## Implict Type Conversion

In this pyhton convert one data type into another without user's involvement. Python itself render variable type. Variable type need not to be defined as we do in C++/C.

```codebyte/py
x = 7
print(type(x))

y=7.0
print(type(x))
```

## Explicit Type Conversion

In this user convert the data type of variable with the help of predefined function like float(), int(), str() to convert the variable data type.

str():str() function takes int or float as argument and convet it into string data type.
int():int() function takes string or float as argument convert it into integer data type.
float():float() function takes integer or string as argument and covert it into float data type.

## Type casting int into string

```codebyte/py
x = 7  # int type variable

y = str(x) # casting into string

print(y)
print(type(y))

```

### Type casting float to string

```codebyte/py
x = 7.2  # float type variable

y=str(x) # casting into string

print(y)
print(type(y))
```

### Type casting string to int

```codebyte/py
x = "7" # string type variable

y = int(x) # casting into integer

print(y)
print(type(y))
```

### type casting string to float

```codebyte/py
x = "7.2" # string type variable

y = float(x) # casting into float

print(y)
print(type(y))
```

### type casting int to float

```codebyte/py
x = 7  # int type variable

y = float(x) # casting into float

print(y)
print(type(y))
```
