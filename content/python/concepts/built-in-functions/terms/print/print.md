---
Title: 'print()'
Description: 'Prints the string representation of an object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `print()` function accepts an object as a parameter, such as a string, a number, or a list. It is then converted to a string through an implicit call of the built-in `str()` function and the value is printed to an output stream.

## Syntax

The object to be printed is passed to the `print()` function as a parameter:

```py
print(object)
```

## Example

Below is an example of the string being printed:

```py
print("Hello, World!")
# Output: Hello, World!
```

Multiple objects can also be printed within one `print()` when passed as a comma-separated list of parameters. By default, each object is separated by one space in the printed result:

```py
print("Hello,", "World!")
# Output: Hello, World!
```

## Codebyte Example

In additional to printing multiple objects, the `print()` function also comes with `sep` and `end` parameters to further format the printed result:

```codebyte/py
print("Python", "is", "awesome", sep="-", end="!\n")
```
