---
Title: 'Parameters'
Description: ''
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Functions often need outside data to achieve their intended task. This is where parameters can be used as placeholders for that data.

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

```codebyte/python
def calc_total(amount, discount=10):
  total = amount * (1 - 0.01 * discount)
  return total

calc_total(100)     # Output: 90.0
calc_total(250, 5)  # Output: 237.5
```
