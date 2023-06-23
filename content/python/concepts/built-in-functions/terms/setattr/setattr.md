---
Title: 'setattr()'
Description: 'Sets the value of the attribute of an object.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Objects'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`setattr()`** function is a built-in Python function used to set the value of a named attribute of an object. It allows a developer to dynamically assign or modify attributes of an object at runtime.

## Syntax

```pseudo
setattr(object, attribute, value)
```

The `setattr()` function requires three parameters:

- `object`: an object.
- `attribute`: name of the attribute to be set.
- `value`: the value to give the `attribute`.

## Example

The following example will change the value of the `name` attribute of the `Person` object:

```py
class Person:
  name = "Alex"
  age = 30

# Updating the name property
setattr(Person, "name", "John")

# Retrieving the name property
new_name = getattr(Person, "name")
print("My new name is " + new_name)
```

The code results in the following output:

```shell
My new name is John
```

## Codebyte Example

Suppose there is a `Person` class that represents a person with attributes such as name and age. The `setattr()` function can be used to dynamically set the value of an attribute.

```codebyte/py
class Person:
    pass

# Create an instance of the Person class
person = Person()

# Set the name attribute using setattr()
setattr(person, "name", "John Doe")

# Set the age attribute using setattr()
setattr(person, "age", 25)

# Access the attributes
print(person.name)
print(person.age)
```
