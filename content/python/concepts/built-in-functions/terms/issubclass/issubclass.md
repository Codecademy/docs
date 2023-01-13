## **issubclass()**
used to check if a class is a subclass of another class or not.

### Syntax
`issubclass()` take two parameters:

`issubclass(class, classinfo)`
- **class** - class to be checked
- **classinfo** - class, type, or tuple of classes and types 

**Return type:** `True` if object is subclass of a class, or any element of the tuple, otherwise `False`.


### Example

```
class myAge:
  age = 36

class myInfo(myAge):
  name = "Homer"
  age = myAge

x = issubclass(myInfo, myAge)
print(x)
```

Output: 
`True`


### codebyte

[codebyte language=python]
class Car:
    def __init__(carColor):
      print('My car is ', carColor)

class Color(Car):
    def __init__(self):
      Car.__init__('white')

print(issubclass(Color, Car))
print(issubclass(Car, Color))
print(issubclass(Color, (list, Car)))
print(issubclass(Car, (list, Car)))
[/codebyte]


