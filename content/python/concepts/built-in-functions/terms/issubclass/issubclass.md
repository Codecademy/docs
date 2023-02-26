---
Title: 'issubclass()'
Description: 'Returns True <span style="color:red">if</span> a given [class](https://www.codecademy.com/resources/docs/python/classes) is a subclass of one <span style="color:red">or</span> more classes.'
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
The **`issubclass()` function returns `True` based on whether a given [class](https://www.codecademy.com/resources/docs/python/classes) is a subclass of one or more classes.

The **`issubclass()` function returns `True` based on whether a given [class](https://www.codecademy.com/resources/docs/python/classes) is a subclass of one or more classes.

## Syntax

```pseudo
issubclass(class, candidateClasses)
```

`issubclass()` take two parameters:
- `class` - a validly defined class
- `candidateClasses` - a single class or type, or a [tuple](https://www.codecademy.com/resources/docs/python/tuples) of classes and types

if any relationship exists, `True` is returned, otherwise `False`.

## Example

The following example uses the `issubclass()` function to confirm whether `myInfo` is a subclass of the `myAge` class:

```py
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

In the following example, the `issubclass()` function checks the relationship between the `Car` and `Color` classes. While `Color` is a subclass of `Car`, the reverse is not true:

```codebyte/python
class Car:
  def __init__(car_color):
    print("My car is ", car_color)

class Color(Car):
  def __init__(self):
    Car.__init__('white')

print(issubclass(Color, Car))
print(issubclass(Car, Color))
```
