# `def`

**Definition**  
The `def` keyword in Python is used to define a **function**. A function is a reusable block of code that performs a specific task.

**Syntax**  
```python
def function_name(parameters):
    # function body
    return value
```

**Example**
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Ada"))  # Output: Hello, Ada!
```

**Parameters**  
- `function_name`: A valid identifier that names the function.
- `parameters`: Optional. A comma-separated list of parameters the function accepts.
- `return`: Optional. Specifies the value to return when the function is called.

**Notes**
- Functions defined using `def` can include docstrings to describe their purpose.
- Functions can return values using the `return` statement, or return `None` by default.

**Related Concepts**
- [`lambda`](https://docs.python.org/3/reference/expressions.html#lambda) – for defining anonymous functions.
- [`*args`, `**kwargs`](https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions) – for variable-length argument lists.

