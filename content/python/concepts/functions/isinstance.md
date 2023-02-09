<div align="left">
  <h1>isinstance()</h1>
  <strong>Function that evaluates if a value type equates to True</strong><br>
</div>
<br>

## Description
The isinstance() function determines whether one object equals the value type desired.

## Syntax
```pseudo
isinstance(object, type)
```

## Example
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

In the above example there are: two different variables that have been defined, a simple function named **check_if_string**, and below it two instantiations of that function. Inside the function is a conditional `if` statement that checks whether the contents of the parameter **value** (that we pass into the function) is a string using the `isinstance()` function.

When we instantiate **check_if_string()**, once with **var1** (which contains a string) and then again with **var2** (which does not contain a string but instead an integer), the instance passing in **var1** evaluates to `True` and the instance passing in **var2** evaluates to `False`.
