---
Title: "Tuples" 
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Tuples"
  - "Lists"
  - "Data Types"
CatalogContent: 
  - "learn-python-3"
  - "paths/computer-science"
---

A tuple is a Python data structure used to store an ordered and immutable collection of objects. Tuples are similar to lists, except that tuples cannot be changed after creation.

## Creating a Tuple

There are multiple ways to create a tuple in Python. 

Tuples can be created with the built-in `tuple()` constructor:

```py
streaming_platforms = tuple(["Netflix", "Hulu", "Amazon", "Apple TV"])
```

We can also create tuples with parentheses:

```py 
mountains = ("Everest", "Kilimanjaro", "Fuji")
```

One-element tuples are a special case. We can create a one-element tuple with a trailing comma:

```py
controller = ("joystick", )
```

Without the trailing comma, Python will interpet the surrounding parentheses as an expression instead of a tuple:

```py
streaming_days = (3)

print(type(streaming_days))
# Output: <class 'int'>
```

## Using a Tuple

Much like lists, since tuples are ordered, we can access tuple elements by index:

```py
streaming_platforms = tuple(["Netflix", "Hulu", "Amazon", "Apple TV"])

print(streaming_platforms[1])
# Output: Hulu
```

However, since tuples are immutable, we cannot modify, delete, or add new elements. For example, attempting to re-assign an element will throw an error:

```py
streaming_platforms = tuple(["Netflix", "Hulu", "Amazon", "Apple TV"])

streaming_platforms[2] = "YouTube"
```

This will result in: 

```error
TypeError: 'tuple' object does not support item assignment
```

Tuples also support sequence operations such as `len()`, `min()`, `max()`.
