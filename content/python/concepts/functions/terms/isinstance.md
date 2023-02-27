---
Title: 'isinstance()'
Description: 'Returns `True` if object is the specified type. Otherwise function will return `False`.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Booleans'
  - 'Classes'
  - 'Data Types'
CatalogContent:
- 'learn-python-3'
- 'paths/computer-science'
---

# Description
The **isinstance()** function determines whether one object is a designated value type. If it is, the function will return `True`, otherwise the function will return `False`.

# Syntax
```py
isinstance(object, class)
```

# Example
```py
var1 = "Hello World!"
var2 = 123

def check_if_string(value):
    if isinstance(value, str):
        print(f'{value} is a string type.')
    else:
        print(f'{value} is not a string.')
    
check_if_string(var1)
check_if_string(var2)
```

This example results in the following output:
```py
True
False
```

In the above example there are: two different variables that have been defined, a simple function named `check_if_string`, and two instantiations of that function. Inside the function is a conditional `if` statement that checks whether the contents of the parameter `value` (that is passed into the function) is a string using the `isinstance()` function.

When we instantiate `check_if_string()`, once with `var1` (which contains a string) and then again with `var2` (which does not contain a string but instead an integer), the instance passing in `var1` evaluates to `True` and the instance passing in `var2` evaluates to `False`.
