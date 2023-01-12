---
Title: 'help()'
Description: 'Display the documentation of the object passed as argument.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `help()` function accepts an object as a parameter, which is a module, function, class or keyword. After being called, the documentation of the requested object is displayed.
If no argument is passed the interactive help utility starts up on the console.

## Syntax

The object is passed to the `help()` function as parameter:

```pseudo
help(object)
```

To start the interactive help utility, the function is called without argument:

```pseudo
help()
```
  
## Example

Below is an example where a build-in function is passed as argument:

```py
help(print)
```
Which produces the following output:
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

If no argument is present:

```py
help()
```
Which returns as output:
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

## Codebyte Example

```codebyte/py
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
