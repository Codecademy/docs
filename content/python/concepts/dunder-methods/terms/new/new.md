---
Title: '__new__()'
Description: 'Creates a new instance of a class.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Attributes'
  - 'Classes'
  - 'Methods'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`__new__()`** static method creates a new instance of a class `cls` and takes in the class (of which the instance was requested) as the first argument.

## Syntax

```pseudo
class ClassName:
  def __new__(cls, *args, **kwargs):
    obj = super().__new__(cls)
    return obj
```

Object creation is typically done by invoking the superclass’ `__new__()` in two ways. The first argument of `__new__()` is always the class which is passed in as the first parameter automatically. The name `cls` is not a keyword; it’s used to reference the class (the first parameter) by convention. When `__new__()` returns an instance of `cls` it automatically invokes the [`__init__()`](https://www.codecademy.com/resources/docs/python/dunder-methods/init) method of that instance with the arguments passed to it. The first argument passed to `__init__()` will be the instance itself (this happens automatically) which is by convention referenced by `self`.

In the example above, no parent class was specified, therefore, the class will directly inherit from the object base class (from which all classes inherit). Calling it explicitly using `object.__new__(cls)` will have the same effect.

When the following pseudocode is appended to the previous one above:

```pseudo
def __init__(self, *args, **kwargs):
    print(*args, **kwargs)

class_instance = ClassName(1, 2)
```

`__new__()` is invoked during the construction of the object (instance of class `ClassName`) with the arguments `1` and `2` which are accepted within `\*args`. The object is created by calling the `__new__()` method of the object base class which only takes in the class `cls`. It then returns an object which is then stored in `obj` and returned. This invokes the `__init__()` method of the `ClassName` class with the arguments `(obj, \*args, \*\*kwargs)`.

This method has two main applications:

- Customizing how new class instances are created.
- Subclassing of immutable types which cannot be initialized via a simple `__init__()` method.

## Example

In the following example, the number of instances of the class `Test` is limited to ‘MaxNumberOfInstances’:

```py
class Test(object):
    numberOfInstances = 0
    MaxNumberOfInstances = 4

    def __new__(cls, value):
        if cls.numberOfInstances >= cls.MaxNumberOfInstances:
            raise ValueError("Maximum number of instances of Test exceeded")
        cls.numberOfInstances += 1
        obj = super().__new__(cls)
        return obj

    def __init__(self, value):
        self.value = value
```

## Codebyte Example

The codebyte example below creates a subclass of the `int` class called `MyInt`. `MyInt` will have a mutable `bitLength` property. Note that when the `int` class’ `__new__()` method is invoked, `value` is passed in as the second argument. When `__new__()` returns an `int` object, it will initialize it with `value`. The `bitlength` attribute as well as any other attribute can also be initialized within the `__new__()` method of `myInt`.

```codebyte/python
class MyInt(int):
    def __new__(cls, value, bitLength = None):
        obj = int.__new__(cls, value)
        obj.bitLength = bitLength
        return obj

int1 = MyInt(2, 4)
print(int1, int1.bitLength)
```
