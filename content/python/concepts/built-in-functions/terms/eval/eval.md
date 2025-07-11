---
Title: 'eval()'
Description: 'Evaluates and executes Python expressions from string input dynamically.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Python'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`eval()`** function is a [built-in](https://www.codecademy.com/resources/docs/python/built-in-functions) Python function that dynamically evaluates and executes Python expressions from [string](https://www.codecademy.com/resources/docs/python/strings)-based input. This powerful function parses a string containing a Python expression, compiles it into bytecode, and then evaluates it as if it were written directly in the code.

The `eval()` function is commonly used in scenarios where there is a need to evaluate mathematical expressions from user input, create dynamic code execution systems, or process expressions stored as strings. However, it should be used with caution due to significant security implications when handling untrusted input.

> **Note:** Never use `eval()` on untrusted input without strict validation or sandboxing, as it can execute arbitrary code and pose major security risks.

## Syntax

```pseudo
eval(expression, globals, locals)
```

**Parameters:**

- `expression`: A string containing a valid Python expression to be evaluated
- `globals` (optional): A [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) specifying the global namespace for the evaluation
- `locals` (optional): A dictionary specifying the local namespace for the evaluation

**Return value:**

The `eval()` function returns the result of the evaluated expression. The return type depends on the expression being evaluated.

## Example 1: Basic Mathematical Evaluation

The following example demonstrates the fundamental usage of `eval()` for evaluating simple mathematical expressions:

```py
# Evaluating basic arithmetic expressions
result1 = eval("5 + 3")
print(f"5 + 3 = {result1}")

result2 = eval("10 * 2 - 5")
print(f"10 * 2 - 5 = {result2}")

# Evaluating expressions with variables
x = 4
result3 = eval("x ** 2 + 1")
print(f"x ** 2 + 1 = {result3}")
```

The output of this code is:

```shell
5 + 3 = 8
10 * 2 - 5 = 15
x ** 2 + 1 = 17
```

This example shows how `eval()` can process mathematical expressions stored as strings and return their computed values.

## Example 2: Dynamic Calculator Application

The following example demonstrates a real-world scenario where `eval()` can be used to create a simple calculator that processes user input:

```py
def safe_calculator():
  # Define allowed mathematical operations
  allowed_names = {
    'abs': abs, 'round': round, 'min': min, 'max': max,
    'sum': sum, 'pow': pow, 'sqrt': lambda x: x ** 0.5
  }

  # Set up a safe global environment (no built-ins, only allowed functions)
  safe_globals = {"__builtins__": None}
  safe_globals.update(allowed_names)

  print("Simple Calculator (type 'quit' to exit)")

  while True:
    try:
      # Get user input
      expression = input("Enter expression: ")

      if expression.lower() == 'quit':
        break

      # Evaluate with restricted namespace
      result = eval(expression, safe_globals)
      print(f"Result: {result}")

    except Exception as e:
      print(f"Error: {e}")

safe_calculator()

# Example usage
# User inputs: "25 + 17", "sqrt(144)", "pow(2, 3)"
```

The above code will produce the following output based on the example inputs:

```shell
Simple Calculator (type 'quit' to exit)
Enter expression: 25 + 17
Result: 42
Enter expression: sqrt(144)
Result: 12.0
Enter expression: pow(2, 3)
Result: 8
```

This example shows how `eval()` can create an interactive calculator while using restricted namespaces to improve security.

## Codebyte Example: Configuration File Processing

This example illustrates how `eval()` can be used to process configuration values stored as strings:

```codebyte/python
import json

def process_config(config_data):
  """Process configuration with dynamic evaluation"""

  # Sample configuration with expressions
  config = {
    "max_connections": "50 * 2",
    "timeout_seconds": "30 + 15",
    "cache_size": "1024 * 1024",
    "debug_mode": "True"
  }

  processed_config = {}

  # Safe namespace for evaluation
  safe_globals = {"__builtins__": {}}
  safe_locals = {"True": True, "False": False}

  for key, value in config.items():
    try:
      # Evaluate the expression safely
      processed_config[key] = eval(value, safe_globals, safe_locals)
      print(f"{key}: {value} -> {processed_config[key]}")
    except:
      # If evaluation fails, keep original string
      processed_config[key] = value
      print(f"{key}: {value} (kept as string)")

  return processed_config

# Execute the function
result = process_config({})
```

This example demonstrates how `eval()` can dynamically process configuration values while maintaining security through restricted namespaces.

## Frequently Asked Questions

### 1. What's the difference between `eval()` and `exec()`?

`eval()` evaluates expressions and returns a value, while `exec()` executes statements and returns None. Use `eval()` for expressions like "2 + 3" and `exec()` for statements like "x = 5".

### 2. Can `eval()` handle multi-line expressions?

No, `eval()` only works with single expressions. For multi-line code execution, use `exec()` instead.

### 3. What happens if `eval()` receives invalid syntax?

`eval()` raises a `SyntaxError` exception if the expression contains invalid Python syntax.
