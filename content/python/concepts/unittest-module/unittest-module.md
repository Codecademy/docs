---
Title: 'Unittest Module'
Description: 'The unittest module provides features for unit testing Python code.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Automation'
  - 'Debugging'
  - 'Development'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`unittest`** module provides features for [unit testing](https://www.codecademy.com/resources/docs/general/unit-testing) Python code. It is similar to unit testing frameworks in other languages. It allows for the automation of unit tests, sharing of setup and shutdown code for tests, and aggregation of tests into collections.

## Example

Suppose the following code for a `Rectangle` class needs to be tested.

```py
import math

class Rectangle():
  def __init__(self, h = 0, w = 0):
    self.height = h
    self.width = w

  def area(self):
    return self.height * self.width

  def perimeter(self):
    return 2 * (self.height + self.width)
```

The `unittest` module can set up automated tests for various conditions:

```py
import unittest

class RectangleTestCase(unittest.TestCase):
  def setUp(self):
    self.rectangle = Rectangle(5 ,10)

  def test_area(self):
    self.assertEqual(self.rectangle.area(), 50)
 
   def test_perimeter(self):
     self.assertEqual(self.rectangle.perimeter(), 30)
 
 if __name__ == '__main__':
   unittest.main()
 ```
 
 
