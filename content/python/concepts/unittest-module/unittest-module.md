---
Title: 'Unittest Module'
Description: 'Python’s unittest module is a built-in testing framework that helps developers create, organize, and run unit tests.'
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

Python **`unittest`** [module](https://www.codecademy.com/resources/docs/python/modules) is a built-in testing [framework](https://www.codecademy.com/resources/docs/general/framework) that provides a set of tools for testing code's functionality in a more systematic and automated way. It supports creating and running [unit tests](https://www.codecademy.com/resources/docs/general/unit-testing), helping developers catch bugs early and ensure code reliability. Similar to unit testing frameworks in other languages, `unittest` allows for the following features:

- Automation of test execution
- Setup and teardown functionality for preparing and cleaning up before/after tests
- Grouping of tests into test suites

## Commonly Used `unittest` Methods

This table lists the most frequently used methods in Python’s `unittest` module. These include assertion methods that check specific conditions in tests, as well as setup and teardown methods that manage test environments:

| **Method**                   | **Description**                                          |
| ---------------------------- | -------------------------------------------------------- |
| `assertEqual(a, b)`          | Test passes if `a == b`.                                 |
| `assertNotEqual(a, b)`       | Test passes if `a != b`.                                 |
| `assertTrue(x)`              | Test passes if `bool(x) is True`.                        |
| `assertFalse(x)`             | Test passes if `bool(x) is False`.                       |
| `assertIs(a, b)`             | Test passes if `a is b` (same object).                   |
| `assertIsNot(a, b)`          | Test passes if `a is not b`.                             |
| `assertIsNone(x)`            | Test passes if `x is None`.                              |
| `assertIsNotNone(x)`         | Test passes if `x is not None`.                          |
| `assertIn(a, b)`             | Test passes if `a in b`.                                 |
| `assertNotIn(a, b)`          | Test passes if `a not in b`.                             |
| `assertIsInstance(a, b)`     | Test passes if `a` is an instance of `b`.                |
| `assertNotIsInstance(a, b)`  | Test passes if `a` is _not_ an instance of `b`.          |
| `assertGreater(a, b)`        | Test passes if `a > b`.                                  |
| `assertGreaterEqual(a, b)`   | Test passes if `a >= b`.                                 |
| `assertLess(a, b)`           | Test passes if `a < b`.                                  |
| `assertLessEqual(a, b)`      | Test passes if `a <= b`.                                 |
| `assertAlmostEqual(a, b)`    | Test passes if `a ≈ b` (to 7 decimal places by default). |
| `assertNotAlmostEqual(a, b)` | Test passes if `a ≠ b` within tolerance.                 |
| `assertRaises(Exception)`    | Checks if the specified exception is raised.             |
| `setUp()`                    | Prepares test environment; runs before each test method. |
| `tearDown()`                 | Cleans up after each test method is executed.            |

## Example 1: Testing a `Rectangle` Class

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
  def setUp(self):
    self.rectangle = rect.Rectangle(5, 10)

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

if __name__ == '__main__':
  unittest.main()
```

To run the tests, include:

```py
if __name__ == '__main__':
  unittest.main()
```

The `unittest.TestCase` class is subclassed to define a test case object. Each test method must start with the word `test` so the test runner can detect and execute it. A breakdown of all the tests will be as follows:

- `setup()`: Initializes a `Rectangle` object before each test method runs.
- `test_area()`: Verifies that the area calculation is correct (`5 * 10 = 50`).
- `test_area()`: Checks the perimeter (`2 * (5 + 10) = 30`).
- `test_isSquare()`: Asserts that a rectangle with unequal sides is not a square, and that changing width to equal height makes it a square.
- `test_error()`: Ensures a `TypeError` is raised when width is set to a non-numeric value.

Running the above produces the following:

```shell
$ python test.py
....
----------------------------------------------------------------------
Ran 4 tests in 0.001s
```

Each dot (`.`) represents a passing test.

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

- Each test method's name
- Its test case class
- A result message indicating whether it passed

## Example 2: Testing a `BankAccount` Class

This example demonstrates how to write unit tests for a basic bank account class, covering deposit, withdrawal, and balance operations.

```py
# bank_account.py

class BankAccount:
  def __init__(self, owner, balance=0):
    self.owner = owner
    self.balance = balance

  def deposit(self, amount):
    if amount < 0:
      raise ValueError("Deposit amount must be positive.")
    self.balance += amount
    return self.balance

  def withdraw(self, amount):
    if amount > self.balance:
      raise ValueError("Insufficient funds.")
    self.balance -= amount
    return self.balance

  def get_balance(self):
    return self.balance
```

Writing the unit tests for this:

```py
# test_bank_account.py

import unittest
from bank_account import BankAccount

class BankAccountTestCase(unittest.TestCase):

  def setUp(self):
    self.account = BankAccount("Alice", 100)

  def test_deposit(self):
    self.assertEqual(self.account.deposit(50), 150)

  def test_withdraw(self):
    self.assertEqual(self.account.withdraw(30), 70)

  def test_withdraw_insufficient_funds(self):
    with self.assertRaises(ValueError):
         self.account.withdraw(200)

  def test_deposit_negative_amount(self):
    with self.assertRaises(ValueError):
         self.account.deposit(-20)

  def test_get_balance(self):
    self.assertEqual(self.account.get_balance(), 100)

if __name__ == '__main__':
    unittest.main()
```

In the test cases:

- `setUp()`: Creates an account with `owner='Alice'` and initial balance of `100`.
- `test_deposit()`: Tests depositing a valid amount (`50`) updates the balance to `150`.
- `test_withdraw()`: Tests withdrawing `30` correctly reduces the balance to `70`.
- `test_withdraw_insufficient_funds()`: Ensures withdrawing more than available (`200`) raises a `ValueError`.
- `test_deposit_negative_amount()`: Ensures depositing a negative amount raises a `ValueError`.
- `test_get_balance()`: Verifies the balance remains unchanged initially (`100`).

## Best Practices for Using `unittest` Module

- Use `setUp()` for repeated setup code instead of duplicating it in each test.
- Name test methods clearly to describe what’s being tested.
- Keep tests isolated—each test should not depend on another.
- Avoid testing multiple concerns in one test method.
- Run tests frequently during development, not just before deployment.
- Use descriptive assertion messages (e.g., `self.assertEqual(a, b, "Area calculation failed")`) for easier debugging.

## Frequently Asked Questions

### 1. Which is better, `pytest` or `unittest`?

`unittest` is built into Python and follows an object-oriented approach. It is ideal for small to medium-sized projects.
`pytest` is a third-party framework that offers more concise syntax, better error messages, and additional plugins, making it a popular choice for larger projects.

### 2. What does `unittest.main()` do?

`unit test.main()` launches the test runner, which automatically discovers and executes all test methods in the file. It also provides a command-line interface to control test behavior (e.g., verbosity).

### 3. What does `if __name__ == '__main__'` mean in Python?

This statement ensures that the code inside runs only when the script is executed directly, not when it’s imported as a module. It's commonly used to run test scripts or demo code.
