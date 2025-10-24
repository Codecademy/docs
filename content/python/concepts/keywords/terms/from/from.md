---
Title: 'from'
Description: 'Used to import specific attributes, classes, or functions from a Python module.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Attributes'
  - 'Classes'
  - 'Modules'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`from`** keyword in Python is used to import specific items (such as [functions](https://www.codecademy.com/resources/docs/python/functions), [classes](https://www.codecademy.com/resources/docs/python/classes), or [variables](https://www.codecademy.com/resources/docs/python/variables)) from a module instead of importing the entire module. It helps keep the code cleaner and avoids unnecessary namespace clutter.

For example, instead of importing the entire `math` module, only the required functions can be imported.

## Syntax

```pseudo
from module_name import name
```

To import multiple items:

```pseudo
from module_name import name1, name2, ...
```

To import all public names from a module (not recommended):

```pseudo
from module_name import *
```

In the syntax:

- `module_name`: The name of the module to import from.
- `name`: The specific object(s) (function, class, or variable) to import.
- The asterisk (`*`) imports all public objects from the module, which can lead to namespace conflicts and reduced clarity.

## Example 1: Importing a Specific Function

This example demonstrates importing a single function (`sqrt`) from the `math` module:

```py
from math import sqrt

# Using the imported function directly
result = sqrt(16)
print(result)
```

The output of this code is:

```shell
4.0
```

## Example 2: Importing Multiple Functions

This example shows how to import more than one function from the same module:

```py
from math import ceil, floor

print(ceil(4.2))
print(floor(4.8))
```

The output of this code is:

```shell
5
4
```

## Example 3: Using `from` for Relative Imports

The `from` keyword can also be used with relative imports inside packages, such as:

```py
from . import utils
from ..helpers import format_data
```

- Relative imports use dots (`.`) to indicate the current and parent packages.
- Explicit imports using `from` enhance code readability and prevent unnecessary components from being loaded.

## Codebyte Example

The following example illustrates importing multiple functions (`sqrt`, `pow`) and using them directly in a program:

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
