---
Title: 'classmethod()'
Description: 'Converts a given function into a class method.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Character Encoding'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Converts a given function into a class method.

## Syntax

```py
classmethod(function)
```

## Example 1

Use `classmethod()` to create the `Codecademy` class method:

```py
class Student:
  name = "Codecademy"

  def print_name(obj):
    print("Welcome to...", obj.name)

Student.print_name = classmethod(Student.print_name)

Student.print_name()
```

## Codebyte Example

Here's an example to illustrate the usage of `classmethod()`:

```codebyte/python
class MyClass:
  count = 0

  def __init__(self, name):
      self.name = name
      MyClass.count += 1

  def instance_method(self):
      print(f"Instance method called by {self.name}")

  @classmethod
  def class_method(cls):
      print(f"Class method called. Total instances created: {cls.count}")

obj1 = MyClass("Object 1")
obj2 = MyClass("Object 2")

obj1.instance_method()

MyClass.class_method()
obj1.class_method()
obj2.class_method()
```

Output for the above code is:

```shell
Instance method called by Object 1
Class method called. Total instances created: 2
Class method called. Total instances created: 2
Class method called. Total instances created: 2
```

In the above example, a class called `MyClass` is defined with a class attribute `count` and two methods: `instance_method` and `class_method`.

The `instance_method` is a regular instance method that can access instance-specific attributes. It is called using an instance of the class.

The `class_method` is a class method decorated with `classmethod()`. It takes the class itself (`cls`) as the first parameter instead of the instance (`self`). It can access and modify class-level attributes, such as `count`. It can be called using the class name or an instance of the class.
