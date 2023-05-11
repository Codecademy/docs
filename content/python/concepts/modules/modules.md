---
Title: 'Modules'
Description: 'A module is a Python file that contains functions, definitions, and statements that can be included in an application.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Libraries'
  - 'Modules'
  - 'Scope'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **module** is a Python file that contains functions, definitions, and statements that can be included in other files within an application. Technically, all files with the `.py` [format](https://www.codecademy.com/resources/docs/general/file-formats) are modules.

Conceptually, modules are named units of code that can be reused across applications and allows us to access shared libraries (collections of modules) and packages (modules with nested modules and packages). Instead of entering commands directly into a Python interpreter, code can be saved as a module for later use in other applications.

## Creating and Importing Modules

A module can be created by saving a Python file with the `.py` file extension. It can then be imported into another `.py` file with an `import` statement.

For example, a separate `video_player.py` file that was previously saved can be imported in other files:

```py
import video_player

# Rest of the program starts here...
```

The program now has access to all functions, objects, and statements contained within the `video_player` module.

## Importing Specific Resources

Instead of importing the whole module, individually named resources can be specified. For example:

```py
from video_player import VideoPlayer
```

This will import only the `VideoPlayer` class from a given `video_player` module, rather than all types of collections contained within it.

It's often useful to import only what is needed to avoid slowing the program down and polluting the local namespace where the code runs.

## Namespaces and Scope

A module within our local namespace can be renamed by creating an alias using the `as` keyword. For example:

```py
from bs4 import BeautifulSoup as bs
```

Aliasing is especially convenient for shortening module names and managing the local namespace where our code executes.

Once a module is imported, it is within the scope of the program and it can be accessed in the local namespace.

## Python Standard Modules

Python comes with several different built-in modules that provide a variety of functions. They include:

- The [`collections`](https://www.codecademy.com/resources/docs/python/collections-module) module provides additional collection types.
- The [`functools`](https://www.codecademy.com/resources/docs/python/functools-module) module provides functions supporting a [functional programming](https://www.codecademy.com/resources/docs/general/programming-paradigms/functional-programming) approach.
- The [`glob`](https://www.codecademy.com/resources/docs/python/glob-module) module allows matching file paths per [Unix](https://www.codecademy.com/resources/docs/general/unix) shell rules.
- The [`json`](https://www.codecademy.com/resources/docs/python/json-module) module provides functions for dealing with [JSON](https://www.codecademy.com/resources/docs/general/json) objects.
- The [`math`](https://www.codecademy.com/resources/docs/python/math-module) module provides useful mathematical functions.
- The [`random`](https://www.codecademy.com/resources/docs/python/random-module) module provides functions for dealing with random numbers.
- The [`time`](https://www.codecademy.com/resources/docs/python/time-module) module provides various functions for dealing with time.

## Python Third-Party Modules

Python has a very broad selection of third-party modules that are devoted to particular tasks.

These are third-party Python modules that have topic entries:

- [NumPy](https://www.codecademy.com/resources/docs/numpy): a popular open-source Python library used for complex mathematical operations and multi-dimensional [arrays](https://www.codecademy.com/resources/docs/general/data-structures/array).
- [Pandas](https://www.codecademy.com/resources/docs/pandas): a popular open-source Python module used for data analysis and manipulation.

Below is a selection of other third-party modules of note:
