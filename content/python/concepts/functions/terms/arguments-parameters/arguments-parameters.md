---
Title: 'Arguments/Parameters'
Description: 'Supplies data to a defined function when it is called in a program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

If parameters are defined inside a function, then any data passed into the function later in a program are known as arguments.

## Parameters

Parameters are variables that are declared in the function definition. They are usually processed in the function body to produce the desired result. When the function is called, each parameter is assigned the value which was passed as a corresponding argument.

For example, the function below contains parameters for a `character`, a `setting`, and a `skill`, which are used as inputs to write the first sentence of a book.

```py
def write_a_book(character, setting, skill):
  print(character + " is in " +
        setting + " practicing " +
        skill + ".")

write_a_book("Naomi", "engineering school", "welding")
```

The output will look like this:

```shell
Naomi is in engineering school practicing welding.
```

## Default Parameter Values

Function parameters can also be initialized to a default value. In the `calc_total()` function, there are `amount` and `discount` parameters.

- When the `discount` value is explicitly specified in the function call, that value is used.
- Otherwise, the default value of 10 is used.

```py
def calc_total(amount, discount=10):
  total = amount * (1 - 0.01 * discount)
  return total

print(calc_total(100))
print(calc_total(250, 5))
```

The output will look like the following:

```shell
90.0
237.5
```

## Arguments

Unless otherwise specified, arguments passed into a called function are assigned to each parameter in the order in which they appear in the function definition. Thus, they are also known as "positional arguments".

### Keyword Arguments

Python also supports keyword arguments — prefixing arguments with the names of parameters to assign them directly, regardless of the order.

```py
def write_a_book(name, color, clothing_item):
  print(name + " was wearing a " + color +
        " " + clothing_item + ".")

write_a_book(color="yellow", clothing_item="raincoat", name="Jonas")
```

The output will look like this:

```shell
Jonas was wearing a yellow raincoat.
```

Keyword arguments must be passed after positional arguments.

```py
write_a_book(name="Jonas", "yellow", "raincoat")
```

The call above raises the following exception:

```shell
SyntaxError: positional argument follows keyword argument
```

### Varying Arguments

When defining a function, it may not be necessary to know in advance how many arguments will be needed. In such cases, a special parameter `*args` is passed in. The asterisk, known in this context as the "packing operator", packs the arguments into a [tuple](https://www.codecademy.com/resources/docs/python/tuples) stored in `args`. This tuple can then be iterated through within the function.

In the example below, the `multiply()` function returns the product of all numbers used in the function call.

```py
def multiply(*args):
  product = 1
  for arg in args:
    product *= arg
  return product

print(multiply(21, 24))
print(multiply(10, 5, 3, 6, 17))
```

The output will look like this:

```shell
504
15300
```

### Varying Keyword Arguments

Similarly, functions can be called with an arbitrary number of keyword arguments. In this case, a special parameter `**kwargs` is passed in, where the double asterisk is a packing operator that produces a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) rather than a tuple. The parameter name and value of each keyword argument are packed as a key-value pair stored in `kwargs`.

```py
def north_american_capitals(**kwargs):
  for country in kwargs:
    print(country + ": " + kwargs[country])

north_american_capitals(canada="Ottawa", us="Washington D.C.", mexico="Mexico City")
```

The output of the function call will be:

```shell
canada: Ottawa
us: Washington, D.C.
mexico: Mexico City
```

When defining a function, both forms of argument packing can be used. However, `args` must always precede `kwargs`.

### Passing Arguments Dynamically

When many arguments need to be passed into a function, it can be tedious to type them out individually. Instead, "argument unpacking" can be used to pass positional or keyword arguments dynamically.

```codebyte/python
def print_biography(name, country, age, hobby):
  print("Hello! My name is " + name + " and I'm " + str(age) +
        " years old. I come from " + country + ", and in my
        free time I like to " + hobby + ".")

adam = {
  "name": "Adam",
  "country": "Germany",
  "age": 23,
  "hobby": "paint"
}

print_biography(**adam)
```
