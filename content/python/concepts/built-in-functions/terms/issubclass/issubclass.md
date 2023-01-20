## **issubclass()**
---
Title: 'issubclass()'

Description: Returns `True` <span style="color:red">if</span> a given [class](https://www.codecademy.com/resources/docs/python/classes) is a subclass of one <span style="color:red">or</span> more classes.

Subjects:
  - 'Computer Science'
  - 'Data Science'

Tags:
  - 'Classes'
  - 'Functions'

CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

## Syntax

```pseudo
issubclass(class, candidateClasses)
```

`issubclass()` take two parameters:
- `class` - a validly defined class
- `candidateClasses` - a single class, type, or class, type, or [tuple](https://www.codecademy.com/resources/docs/python/tuples) of classes and types

if any relationship exists, `True` is returned, otherwise `False`.

## Example

The following example uses the `issubclass()` function to confirm whether the `myInfo` is a subclass of the `myAge` class:

```pseudo
class myAge:
  age = 36

class myInfo(myAge):
  name = "Homer"
  age = myAge

print(issubclass(myInfo, myAge))
```

This will print the following output:
```shell
True
```

## Codebyte Example

In the following example, the `issubclass()` function is used to check the relationship between the `Car` <span style="color:red">and</span> `Color` classes. While `Color` is a subclass of `Car`, the reverse is <span style="color:red">not</span> true:

```
[codebyte language=python]
class Car:
  def __init__(car_color):
    print("My car is ", car_color)

class Color(Car):
  def __init__(self):
    Car.__init__('white')

print(issubclass(Color, Car))
print(issubclass(Car, Color))
[/codebyte]
```




