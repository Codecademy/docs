---
Title: 'help()'
Description: 'Displays documentation of an object using the Python help utility.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Documentation'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`help()`** displays documentation about various Python objects including [modules](https://www.codecademy.com/resources/docs/python/modules), [functions](https://www.codecademy.com/resources/docs/python/functions), [classes](https://www.codecademy.com/resources/docs/python/classes), and [keywords](https://www.codecademy.com/resources/docs/python/keywords). If no argument is passed, the interactive help utility starts up on the [command line](https://www.codecademy.com/resources/docs/command-line).

## Syntax

```pseudo
help(object)
```

When an `object` parameter is not passed to the `help()` function, the interactive help utility will be started.

If the `object` is a [string](https://www.codecademy.com/resources/docs/python/strings) that matches a valid module, function, class, keyword, or other topic, a documentation page will be displayed. For other kinds of objects (like a [tuple](https://www.codecademy.com/resources/docs/python/tuples)), the `help()` function will show its documentation page as well.

## Example

Calling the `help()` function without an argument, the following output is returned:

```shell
Welcome to Python 3's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the internet at https://docs.python.org/3.10/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing
Python programs and using Python modules.  To quit this help utility and
return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type
"modules", "keywords", "symbols", or "topics".  Each module also comes
with a one-line summary of what it does; to list the modules whose name
or summary contain a given string such as "spam", type "modules spam".

help>
```

The following shows how the `help()` function provides information about Python's built-in [`print()`](https://www.codecademy.com/resources/docs/python/built-in-functions/print) function:

```py
help(print)
```

This produces the following output:

```shell
print(...)
   print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)

   Prints the values to a stream, or to sys.stdout by default.
   Optional keyword arguments:
   file:  a file-like object (stream); defaults to the current sys.stdout.
   sep:   string inserted between values, default a space.
   end:   string appended after the last value, default a newline.
   flush: whether to forcibly flush the stream.
```

## Codebyte Example

The following example is runnable and shows how the `help()` function can be applied to different kinds of objects, including user-defined classes:

```codebyte/python
import math

class newClass:
    x = 5

# class
help(newClass)

# module
help(math)

# function
help(print)
```
