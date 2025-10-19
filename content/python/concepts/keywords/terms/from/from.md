---
Title: 'from'
Description: 'Used to import specific attributes, classes, or functions from a Python module.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Modules'
  - 'Imports'
  - 'Python'
  - 'Keywords'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`from`** keyword in Python is used to **import specific items** (such as functions, classes, or variables) from a module instead of importing the entire module.  
It helps keep the code cleaner and avoids unnecessary namespace clutter.

For example, instead of importing the whole `math` module, you can import only the functions you need.

---

## Syntax

```py
from module_name import name
```

or

```py
from module_name import name1, name2, ...
```

or

```py
from module_name import *
```

In the syntax:

- `module_name`: The name of the module to import from.
- `name`: The specific object(s) (function, class, or variable) to import.
- The asterisk (\*) imports all public objects from the module, though it’s not recommended in production code due to potential namespace conflicts.

## Example 1: Importing a Specific Function

```py
from math import sqrt

# Using the imported function directly
result = sqrt(16)
print(result)

#Output 4.0
```

## Example 2: Importing Multiple Functions

```py
from math import ceil, floor

print(ceil(4.2))   # Output: 5
print(floor(4.8))  # Output: 4
```

## Codebyte Example

The following is a runnable example demonstrating the use of the `from` keyword:

```codebyte/python
# Import specific functions from the math module
from math import sqrt, pow

# Use imported functions directly
num = 9
root = sqrt(num)
power = pow(2, 3)

print("Square root of 9 is:", root)
print("2 raised to the power 3 is:", power)
```

**_Output :_**

- Square root of 9 is: 3.0
- 2 raised to the power 3 is: 8.0

## Notes

- The from keyword can also be used with relative imports inside packages, such as:

  ```py
  from . import utils
  from ..helpers import format_data
  ```

- Relative imports use dots (.) to indicate the current and parent packages.

- Using from with explicit imports improves readability and avoids importing unnecessary code.
