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

### Commonly Used Type Hints

- `int`, `float`, `str`, `bool`: These are basic data types. -`List[ElementType]`: This is a list containing elements of `ElementType`.
- `Dict[KeyType, ValueType]`: This is a dictionary with keys of `KeyType` and values of `ValueType`.
- `Union[Type1, Type2]`: This is a value that can be of either `Type1` or `Type2`.
- `Optional[Type]`: This indicates that a value can be of `Type` or `None`.

## Example

This is an example of a function using type hints:

```py
from typing import List, Dict, Union

def process_data(data: List[Dict[str, Union[int,str]]]) -> List[str]:
    """
    Processes a list of dictionaries, extracting string values.

    Args:
        data (List[Dict[str, Union[int,str]]]): A list of dictionaries with string keys and integer or string values.

    Returns:
        List[str]: A list of string values extracted from the dictionaries.
    """
    result = []
    for item in data:
        for key, value in item.items():
            if isinstance(value, str):
                result.append(value)
    return result

# Example usage
data = [
    {"name": "Alice", "age": 25}
    {"name": "Bob", "city": "New York"}
]

output = process_data(data)
print(output)
```

The above example would output the following:

```shell
['Alice', 'Bob', 'New York']
```

## Codebyte Example

```codebyte/python
from typing import List, Optional

def greet(name: Optional[str] = None) -> str:
    """
    Args:
        name (Optional[str]): Name of the person to greet. Defaults to None.

    Returns:
        str: A greeting message.
    """
    if name:
        return f"Hello, {name}!"
    return "Hello, World!"

# Test the function
print(greet("Dani"))
print(greet())
```

> **Note:** While type hints enhance code clarity and help during development, they do not change how Python executes the code.
