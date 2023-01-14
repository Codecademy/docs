## **issubclass()**
The **`issubclass()`** function returns `True` if a given [class](https://www.codecademy.com/resources/docs/python/classes) is a subclass of one or more classes.


## Syntax
`issubclass()` take two parameters:

`issubclass(class, candidateClasses)`

- `class` - a validly defined class
- `candidateClasses` - a single class, type, or class, type, or [tuple](https://www.codecademy.com/resources/docs/python/tuples) of classes and types

if any relationship exists, `True` is returned, otherwise `False`.


## Example

The following example uses the `issubclass()` function to confirm whether the `myInfo` is a subclass of the `myAge` class:

```
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

```
[codebyte language=python]
class Car:
    def __init__(carColor):
      print('My car is ', carColor)

class Color(Car):
    def __init__(self):
      Car.__init__('white')

print(issubclass(Color, Car))
print(issubclass(Car, Color))
[/codebyte]
```




