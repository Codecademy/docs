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
  - 'Functions'
  - 'Methods'
  - 'Modules'
  - 'Units'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`unittest`** [module](https://www.codecademy.com/resources/docs/python/modules) provides features for [unit testing](https://www.codecademy.com/resources/docs/general/unit-testing) Python code. Similar to unit testing frameworks in other languages ,`unittest` allows for the following features:

- Automation of unit tests.
- Sharing of setup and tear-down code for tests.
- Aggregation of tests into collections.

## Example

The following example begins with code for a `Rectangle` [class](https://www.codecademy.com/resources/docs/python/classes) that needs to be tested:

```py
# saved as rectangle.py
import math

class Rectangle():
  def __init__(self, h = 0, w = 0):
    self.height = h
    self.width = w

  def area(self):
    return self.height * self.width

  def perimeter(self):
    return 2 * (self.height + self.width)

  def isSquare(self):
    return self.height == self.width
```

The `unittest` module can set up automated tests for various conditions:

```py
# saved as test.py
import unittest
import rectangle as rect

class RectangleTestCase(unittest.TestCase):

  def test_area(self):
    self.assertEqual(self.rectangle.area(), 50)

  def test_perimeter(self):
    self.assertEqual(self.rectangle.perimeter(), 30)

  def test_isSquare(self):
    self.assertFalse(self.rectangle.isSquare())
    self.rectangle.width = 5
    self.assertTrue(self.rectangle.isSquare())

  def test_error(self):
    self.rectangle.width = "A"
    with self.assertRaises(TypeError):
      a = self.rectangle.perimeter()

  def setUp(self):
    self.rectangle = rect.Rectangle(5 ,10)

if __name__ == '__main__':
  unittest.main()
```

First the `unittest.TestCase` class is subclassed for our test case object. Then tests are defined as methods with names starting with `test`. This naming convention is mandatory as it allows the test runner to find the methods that represent tests.

Tests consist of methods containing calls to one or more `assert` methods of the test case object:

- `.assertEqual()`: Test passes when both arguments are equal.
- `.assertTrue()` : Test passes when argument is `True`.
- `.assertFalse()` : Test passes when argument is `False`.
- `.assertRaises()` : Test passes when the passed exception is raised.

The test case can have `.setUp()` and `.tearDown()` methods defined. The `.setUp()` method is for any initialization needed for the test, and will run before each `test` method is carried out. The `.tearDown()` method is run after each `test` method to do any needed cleanup after each test.

The call to `unittest.main()` runs the tests and provides the test script with a command-line interface.

Running the above produces the following:

```shell
$ python test.py
....
----------------------------------------------------------------------
Ran 4 tests in 0.001s
```

The output shows a dot printed for each successful test.

Using the `-v` option on the command line will produce a more verbose test:

```shell
$ python test.py -v
test_area (__main__.RectangleTestCase) ... ok
test_error (__main__.RectangleTestCase) ... ok
test_isSquare (__main__.RectangleTestCase) ... ok
test_perimeter (__main__.RectangleTestCase) ... ok

----------------------------------------------------------------------
Ran 4 tests in 0.001s
```

The output shows the following:

- The method name for each test.
- The test case class the method belongs to.
- A message telling whether or the test was passed.
