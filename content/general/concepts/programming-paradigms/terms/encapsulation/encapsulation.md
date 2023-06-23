---
Title: 'Encapsulation'
Description: 'Encapsulation is one of the four principles of object-oriented programming (OOP), and it advances the benefits of modularity and hiding away of complexities in order to better maintain and reason about code.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'OOP'
  - 'Best Practices'
  - 'Memory'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

**Encapsulation** advances the benefits of modularity and hiding away of complexities in order to better maintain and reason about code. It is one of the four principles of [object-oriented programming (OOP)](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming).

Most of the time encapsulation can be achieved by creating [classes](https://www.codecademy.com/resources/docs/general/data-structures/class) with an overarching design structure that includes private and public [methods](https://www.codecademy.com/resources/docs/general/method) (or getters and setters) for our systems to interact.

## Python Example

In the following [Python](https://www.codecademy.com/resources/docs/python) example, a `Robot` class is created with a `__version` property, initialized as a number. Getter and setter methods are made to allow any instance of `Robot` to be set with a `__version` and have it changed later]:

```py
class Robot(object):
 def __init__(self):
   self.__version = 22

 def getVersion(self):
   print(self.__version)

 def setVersion(self, version):
   self.__version = version

obj = Robot()

obj.getVersion()
obj.setVersion(23)
obj.getVersion()

print(obj.__version)
```
