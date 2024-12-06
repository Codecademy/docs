---
Title: 'Type Hints'
Description: 'Specify expected data types for variables, function arguments, and return values, improving code readability and aiding static analysis'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Python'
  - 'Type Guard'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Type hints** in Python are a feature that allows developers to specify the expected data types of variables, function arguments, and return values. It was introduced in Python 3.5.

> **Note:** Type hints are part of the **`typing` module**, which provides a comprehensive set of tools for type annotations.

## Syntax

This is the general syntax for type hints in function annotations:

```pseudo
from typing import List, Dict, Union

def function_name(parameter_name: parameter_type) -> return_type:
    # Function body
```

- `parameter_name`: This represents the name of the parameter that the function accepts.
- `parameter_type`: This indicates the expected data type of `parameter_name`.
- `return_type`: This specifies the data type of the value that the function will return.

