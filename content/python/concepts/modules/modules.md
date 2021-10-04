---
Title: 'Modules';
Description: 'A module is a Python file that contains functions, definitions, and statements that can be included in an application.';
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

A module is a Python file that contains functions, definitions, and statements that can be included in an application.

Think of a module as a code library that can be reused across applications. Modules improve code reusablity and allow us to access shared libraries and packages.

Instead of entering commands directly into a Python interpreter, Python code can be saved as a module so that we can use it again later in other applications. Modules can also be used to access libraries such as `numpy`, `sklearn`, and the `date-time` built-in module.

## Creating and Importing Modules

A module can be created by saving a Python file with the **.py** file extension. It can then be imported into another Python file with the `import` command followed by the module name.

For example, to import a **video_player.py** file:

```py
import video_player

# Rest of the program starts here...
```

The program now has access to all functions, objects, and statements contained within the `video_player` module.

## Importing Specific Resources

Instead of importing the whole module, individual named resources can be specified. For example:

```py
from collections import Counter
```

This will import only the `Counter` class from Python's `collections` built-in module, rather than all types of collections contained within it.

It's often useful to import only the resources that you need to avoid slowing down your program and polluting your local namespace where your code runs.

## Namespaces and Scope

A module within our local namespace can be renamed by creating an alias using the `as` keyword. For example:

```py
from bs4 import BeautifulSoup as bs
```

Aliasing is especially convenient for shortening module names and managing the local namespace where our code executes.

Once a module is imported, it is within the scope of the program and it can be accessed in the local namespace.
