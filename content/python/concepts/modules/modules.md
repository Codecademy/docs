---
Title: "Modules" 
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Libraries"
  - "Modules"
  - "Scope"
CatalogContent: 
  - "learn-python-3"
  - "paths/computer-science"
---

A module is a file that contains Python functions, definitions, and statements that can be included in an application.

Instead of entering commands directly into a Python interpreter, we can save Python code as a module so we can use it again in other applications. We can also use modules to access libraries such as `numpy` and `sklearn` or the built-in Python `date-time` module. 

Think of a module as Python file or code library that can be reused across applications. Modules improve code reusablity and allow us to access shared libraries and packages.

## Creating Modules

We can create a module by saving a Python file with the `.py` file extension. We can then import it into another Python file with the import command followed by the module name:

```py
import video_player_tools
# Imports video_player_tools.py
```

We now have access to all functions, objects, and statements contained within the `video_player_tools` module.

## Importing Modules

We can also import only specific named resources from a module. For example:

```py
from collections import Counter
```

This will import only the `Counter` class from the built-in Python `collections` module rather than all types of collections contained within it.

It's often useful to import only the resources that you need to avoid slowing down your program and polluting your local namespace where your code runs.

## Namespaces and Scope

We can rename a module within our local namespace by creating an alias for it using the `as` keyword. For example:

```py
from bs4 import BeautifulSoup as bs
```

Aliasing is especially convenient for shortening module names and managing the local namespace where our code executes.

Once we import a module, it is within the scope of our program and we have access to it in our local namespace.