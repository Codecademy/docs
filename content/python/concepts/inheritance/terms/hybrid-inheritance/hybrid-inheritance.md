---
Title: 'Hybrid Inheritance'
Description: 'Hybrid inheritance combines multiple types of inheritance, allowing a class to inherit features from more than one parent and represent complex real-world relationships.'
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Inheritance'
  - 'Machine Learning'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Hybrid inheritance** in Python combines multiple types of inheritance, such as single, multiple, and multilevel inheritance, within a single class hierarchy. It allows a class to inherit attributes and methods from multiple parent classes, often through a complex structure. Hybrid inheritance is useful for modeling real-world relationships where a class needs behaviors from various sources, but it requires careful design to avoid ambiguity, such as the diamond problem.

## Diagram

The following diagram shows a hybrid inheritance structure where a class inherits from multiple parent classes, combining multilevel and multiple inheritance:

![Hybrid-Inheritance-Diagram](https://raw.githubusercontent.com/Codecademy/docs/main/media/Hybrid-Inheritance.png)

- `System`: Base class with general functionality.
- `Database`: Inherits from `System`, adds data storage capabilities.
- `API`: Inherits from `System`, adds request handling capabilities.
- `App`: Inherits from both `Database` and `API`, combining their features.

## Syntax

```python
# Base class attributes and methods
class BaseClass:

# Inherits from BaseClass
class DerivedClass1(BaseClass):

# Inherits from BaseClass
class DerivedClass2(BaseClass):

# Inherits from DerivedClass1 and DerivedClass2
class HybridClass(DerivedClass1, DerivedClass2):
```

- `BaseClass`: The top-level parent class.
- `DerivedClass1`, `DerivedClass2`: Intermediate classes inheriting from `BaseClass`.
- `HybridClass`: Inherits from both intermediate classes, forming a hybrid structure (mix of multilevel and multiple inheritance).

> **Note:** Use commas in the class definition to specify multiple parent classes. Python’s Method Resolution Order (MRO) determines which parent class method is called in case of conflicts.

## Example

This example defines an `System` base class with a `process` method. `Database` and `API` inherit from `System`, adding `store` and `request` methods, respectively. `App` uses hybrid inheritance to inherit from both `Database` and `API`, combining their behaviors. The `describe` method in `App` calls methods from all parent classes, demonstrating access to inherited functionality.

```py
class System:
  def process(self):
    return "Processing data"

class Database(System):
  def store(self):
    return "Storing data"

class API(System):
  def request(self):
    return "Handling request"

class App(Database, API):
  def describe(self):
    return f"{self.process()}, {self.store()}, {self.request()}"

app = App()
print(app.describe())
```

The output would be:

```shell
Processing data, Storing data, Handling request
```

## Codebyte

```codebyte/python
class System:
  def process(self):
    return "Processing data"

class Database(System):
  def store(self):
    return "Storing data"

class API(System):
  def request(self):
    return "Handling request"

class App(Database, API):
  def describe(self):
    return f"{self.process()}, {self.store()}, {self.request()}"

app = App()
print(app.describe())
```

Hybrid inheritance can lead to the diamond problem, where a class inherits the same method from multiple parents. Python resolves this using the Method Resolution Order (MRO), accessible via **`ClassName.mro()`**. Use hybrid inheritance judiciously to avoid complex hierarchies that are hard to maintain. Ensure parent classes are designed to work together to prevent method conflicts.
