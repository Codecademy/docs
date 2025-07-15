---
Title: 'getattr()'
Description: 'Returns the value of a named attribute from an object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Attributes'
  - 'Functions'
  - 'Objects'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`getattr()`** function is a [built-in](https://www.codecademy.com/resources/docs/python/built-in-functions) Python function that returns the value of a named attribute from an object. It provides a dynamic way to access object attributes using their [string](https://www.codecademy.com/resources/docs/python/strings) names rather than dot notation. This function is particularly useful when the attribute name is stored in a variable or determined at runtime.

The `getattr()` function serves as a safe alternative to direct attribute access, allowing developers to specify a default value when an attribute doesn't exist. This makes it invaluable for creating flexible code that can handle objects with varying attributes, implementing configuration systems, and building dynamic applications where attribute names may not be known in advance.

## Syntax

```pseudo
getattr(object, name, default)
```

**Parameters:**

- `object`: The object whose attribute needs to be accessed
- `name`: A string containing the name of the attribute to retrieve
- `default` (optional): The value to return if the specified attribute is not found

**Return value:**

The value of the specified attribute if it exists, the default value if the attribute doesn't exist and a default is provided, or raises an `AttributeError` if the attribute doesn't exist and no default is specified.

## Example 1: Basic Attribute Access

This example demonstrates the fundamental usage of `getattr()` to access object attributes dynamically:

```py
class Student:
  def __init__(self, name, age, grade):
    self.name = name
    self.age = age
    self.grade = grade

# Create a student object
student = Student("Alice", 20, "A")

# Access attributes using getattr()
student_name = getattr(student, "name")
student_age = getattr(student, "age")

print(f"Student name: {student_name}")
print(f"Student age: {student_age}")
```

This example results in the following output:

```shell
Student name: Alice
Student age: 20
```

## Example 2: Configuration Management System

This example shows how `getattr()` can be used in a real-world scenario for managing application configurations with default values:

```py
class AppConfig:
  def __init__(self):
    self.database_url = "localhost:5432"
    self.debug_mode = True
    self.cache_timeout = 300

def get_config_value(config, setting_name, default_value=None):
  """Safely retrieve configuration values with fallback defaults"""
  return getattr(config, setting_name, default_value)

# Create configuration object
config = AppConfig()

# Retrieve existing and non-existing configuration values
db_url = get_config_value(config, "database_url", "default.db")
api_key = get_config_value(config, "api_key", "not_configured")
max_connections = get_config_value(config, "max_connections", 100)

print(f"Database URL: {db_url}")
print(f"API Key: {api_key}")
print(f"Max Connections: {max_connections}")
```

This example results in the following output:

```shell
Database URL: localhost:5432
API Key: not_configured
Max Connections: 100
```

## Codebyte Example: Dynamic Method Execution

This example illustrates using `getattr()` to dynamically call methods based on user input or runtime conditions:

```codebyte/python
class Calculator:
  def add(self, x, y):
    return x + y

  def subtract(self, x, y):
    return x - y

  def multiply(self, x, y):
    return x * y

  def divide(self, x, y):
    if y != 0:
      return x / y
    return "Cannot divide by zero"

def execute_operation(calculator, operation_name, x, y):
  """Execute mathematical operation based on operation name"""
  # Get the method using getattr with a default fallback
  operation_method = getattr(calculator, operation_name, None)

  if operation_method and callable(operation_method):
    return operation_method(x, y)
  else:
    return f"Operation '{operation_name}' not supported"

# Create calculator instance
calc = Calculator()

# Execute different operations dynamically
operations = ["add", "multiply", "modulo"]
x, y = 10, 3

for op in operations:
  result = execute_operation(calc, op, x, y)
  print(f"{x} {op} {y} = {result}")
```

## Frequently Asked Questions

### 1. What happens if I don't provide a default value and the attribute doesn't exist?

Python will raise an `AttributeError` exception. Always use a default value or handle the exception appropriately.

### 2. Can I use `getattr()` to access private attributes?

Yes, `getattr()` can access private attributes (those starting with underscore), but this goes against Python conventions and should be avoided.

### 3. Is `getattr()` slower than direct attribute access?

Yes, `getattr()` has slightly more overhead than direct dot notation access, but the performance difference is typically negligible for most applications.

### 4. Can I use `getattr()` with methods?

Yes, `getattr()` returns method objects that can be called. Always check if the returned object is callable using `callable()` before invoking it.

### 5. What's the difference between `getattr()` and `hasattr()`?

`hasattr()` checks if an attribute exists and returns `True` or `False`, while `getattr()` retrieves the actual value of the attribute.
