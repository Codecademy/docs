---
Title: 'Packages'
Description: 'Packages are a way to organize related modules into a directory hierarchy in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Command Line'
  - 'Packages'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, **packages** are a way to organize related modules into a directory hierarchy. Packages allow for modular code organization, making projects more readable, reusable, and maintainable. A package is essentially a directory that contains a special `__init__.py` file and one or more modules (Python files).

Packages are particularly useful for:

- Grouping related functionality.
- Avoiding module name conflicts in larger codebases.
- Providing a clear project structure.

## Syntax

The structure of a Python package typically looks like this:

```pseudo
project_name/
    package_name/
        __init__.py       # Marks the directory as a package (can be empty or include initialization code)
        module1.py        # First module in the package
        module2.py        # Second module in the package
    main.py               # Main program
```

- The `__init__.py` file is required to make Python treat the directory as a package.
- Modules (`.py` files) inside the package can be imported and used in other parts of the project.

### Importing a Package

To use a package or its modules, the syntax is:

```pseudo
import package_name.module_name

# OR
from package_name import module_name

# OR (import specific functions or classes)
from package_name.module_name import function_name, class_name
```

## Example

Here’s an example that creates and uses a Python package:

### Creating a Python Package

Create a directory with following files:

```shell
mypackage/
    __init__.py
    module1.py
    module2.py
```

- `__init__.py`: This file is used to indicate that the directory `mypackage` is a package. It can be empty or contain initialization code for the package.

- `module1.py`: A module within the package that could contain functions or classes.

```py
# module1.py
def greet(name):
    return f"Hello, {name}!"
```

- `module2.py`: Another module within the package.

```py
# module2.py
def farewell(name):
    return f"Goodbye, {name}!"
```

### Using the Package

The package and its modules can then be used in another Python script like this:

```py
# test_package.py
import mypackage.module1 as m1
import mypackage.module2 as m2

print(m1.greet("Alice"))
print(m2.farewell("Alice"))
```

The output of the above code will be as follows:

```shell
Hello, Alice!
Goodbye, Alice!
```
