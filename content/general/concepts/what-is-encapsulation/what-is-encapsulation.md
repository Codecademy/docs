---
Title: 'What is Encapsulation?'
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

Encapsulation is one of the four principles of object-oriented programming (OOP) which emphasize modularity and hiding away of complexities in order to better maintain and reason about code.

Most of the time encapsulation can be achieved by creating classes and naming private and public methods (or getters and setters) for our systems to interact.

## Examples of Encapsulation

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
