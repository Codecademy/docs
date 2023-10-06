---
Title: 'id()'
Description: 'Gives a unique number for any object in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Id'
  - 'Memory'
  - 'Debugging'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The **`id()`** function gives a unique number for any object in Python. This number is the location of the object in the computer’s memory. This will be consistent for the duration of the object's lifetime.

## Syntax

```pseudo
id(object)
```

The parameter, `object`, can be any given object such as a string, list, number, dictionary, etc.

## Example

In the example below, when two **immutable** variables are compared using the `id()` function, both return the same value pointing to the same location in memory.

This is because immutable objects don't change. The following example uses an immutable `string` object to demonstrate this:

```py
color = 'green'

favColor = 'green'

print(id(color))

print(id(favColor))
```

This example results in something resembling the following output:

```shell
140307997340656
140307997340656
```

## Example 2

In this next example, the `id()` function will be executed with two **mutable** variables. Take note of how the function will return different values: two separate unique ids.

This is because mutable objects are able to change. A mutable `list` object can be used to demonstrate this:

```py
animals = ['lions', 'tigers', 'bears']

favAnimals = ['lions', 'tigers', 'bears']

print(id(animals))

print(id(favAnimals))
```

This example results in something resembling the following output:

```shell
140279020355392
140279020204352
```

## Codebyte Example

The following example displays the output of two immutable `number` objects:

```codebyte/python
hello = 30
goodbye = 30

print(id(hello))
print(id(goodbye))
```
