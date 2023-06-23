---
Title: 'getattr()'
Description: 'Returns the value of the named property in the specified object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Objects'
  - 'Classes'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The built-in **getattr()** function returns the value of the named property in a specified object/[Class](https://github.com/Codecademy/docs/blob/main/content/python/concepts/classes/classes.md).

## Syntax

```shell
getattr(object, name, default)
```

The `getattr()` method takes at least 2 parameters:

- `object`, the given object
- `name`, a string with the name of the attribute
- `default`, (optional) a value to be returned when the named attribute does not exist

## Examples

### Example 1

```py
class Cat:
    hobby = 'sleeping'
    age = 2

pet = Cat()
attr = getattr(pet, 'age')
print("My cat is", attr, "years old.")
```

This code will return:

```shell
My cat is 2 years old.
```

### Example 2

```py
class Cat:
    hobby = 'sleeping'
    age = 2

pet = Cat()
attr = getattr(pet, 'love')
print("My cat's favourite food is", attr)
```

This code will output an error, this because the `Cat` object does not have an attribute named `love`, and we did not set `default` parameter:

```shell
Traceback (most recent call last):
  File "main.py", line 6, in <module>
    attr = getattr(pet, 'love')
AttributeError: 'Cat' object has no attribute 'love'
```

### Example 3

```py
class Cat:
    hobby = 'sleeping'
    age = 2

pet = Cat()
attr = getattr(pet, 'love', 'tuna')
print("My cat's favourite food is", attr)
```

This code will return:

```shell
My cat's favourite food is tuna
```

## Codebyte Example

Use `getattr()` to get the value of the named property in a specified object/class:

```codebyte/python
class Cat:
    hobby = 'sleeping'
    age = 2

pet = Cat()
attr_1= getattr(pet, 'hobby')
attr_2 = getattr(pet, 'love', 'tuna')
print("My cat's hobby is", attr_1)
print("My cat's favourite food is", attr_2)
```
