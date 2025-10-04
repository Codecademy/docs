---
Title: 'Inheritance'
Description: 'Allows a class to inherit attributes and methods from another class, promoting code reuse and hierarchical relationships.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Classes'
  - 'Inheritance'
  - 'Methods'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Inheritance** is a fundamental concept in [object-oriented programming (OOP)](https://www.codecademy.com/resources/blog/object-oriented-programming/) that allows a [class](https://www.codecademy.com/resources/docs/python/classes) (called a child or derived class) to inherit attributes and methods from another class (called a parent or base class). This mechanism promotes code reuse, establishes hierarchical relationships between classes, and enables the creation of more specialized classes from general ones.

Inheritance implements the "is-a" relationship between classes, where a child class represents a more specific version of the parent class. For example, a `Dog` class can inherit from an `Animal` class because a dog "is-a" type of animal. This relationship allows the child class to automatically access all the attributes and methods of the parent class while adding its own unique functionality.

## Syntax for Inheritance

```pseudo
class ParentClass:
  # Parent class attributes and methods
  pass

class ChildClass(ParentClass):
  # Child class inherits from ParentClass
  # Additional attributes and methods
  pass
```

**Parameters:**

- `ParentClass`: The base class from which properties and methods are inherited. Also known as the superclass or base class.
- `ChildClass`: The derived class that inherits from the parent class. Also known as the subclass or derived class.
- Parentheses `()`: Used to specify the parent class from which the child class inherits.

**Return value:**

Inheritance does not return a value. It establishes a relationship between classes that allows the child class to access the parent class attributes and methods.

## Creating a Parent Class

A **parent class** (also called a base class or superclass) serves as the foundation for inheritance. It contains common attributes and methods that multiple child classes can share. Creating a parent class follows the same syntax as creating any other class in Python.

```py
class Animal:
  def __init__(self, name):
    self.name = name

  def speak(self):
    print(f"{self.name} makes a sound")

  def move(self):
    print(f"{self.name} is moving")
```

This creates a basic `Animal` parent class with common attributes and methods that different types of animals can share.

## Creating a Child Class

A **child class** (also called a subclass or derived class) inherits from a parent class by specifying the parent class name in parentheses during class definition. The child class automatically inherits all attributes and methods from the parent class.

```py
class Dog(Animal):
  def bark(self):
    print(f"{self.name} says: Woof! Woof!")
```

The `Dog` class inherits from `Animal` and can access all parent class methods while adding its own specific functionality.

## `__init__()` Function

The **`__init__()`** method is a special method called automatically when an object is created from a class. In inheritance, when a child class defines its own `__init__()` method, it overrides the parent class's `__init__()` method.

```py
class Cat(Animal):
  def __init__(self, name, breed):
    self.name = name
    self.breed = breed

  def meow(self):
    print(f"{self.name} the {self.breed} says: Meow!")
```

The child class `__init__()` method must initialize all necessary attributes, including those that would normally be handled by the parent class.

## `super()` Function

The **`super()`** function is a [built-in](https://www.codecademy.com/resources/docs/python/built-in-functions) Python function that provides access to methods and attributes of the parent class from within the child class. This function allows calling parent class methods without explicitly naming the parent class.

```py
class Bird(Animal):
  def __init__(self, name, species):
    super().__init__(name)  # Call parent's __init__
    self.species = species

  def speak(self):
    super().speak()  # Call parent's speak method
    print(f"{self.name} is a {self.species}")
```

The `super()` function enables the child class to extend parent class functionality while reusing the original implementation.

## Adding Properties to Child Class

Child classes can add new **properties** (attributes) that are specific to their functionality while inheriting all properties from the parent class. These additional properties extend the functionality without modifying the original parent class.

```py
class Fish(Animal):
  def __init__(self, name, water_type):
    super().__init__(name)
    self.water_type = water_type  # New property
    self.can_swim = True          # New property

  def swim(self):
    print(f"{self.name} is swimming in {self.water_type} water")
```

The `Fish` class adds new properties (`water_type`, `can_swim`) while inheriting all properties from the `Animal` class.

## Example: Animal Behavior System

Here's a comprehensive example that demonstrates all the concepts working together:

```py
class Vehicle:
  def __init__(self, brand, model, year):
    self.brand = brand
    self.model = model
    self.year = year
    self.is_running = False

  def start_engine(self):
    self.is_running = True
    print(f"The {self.year} {self.brand} {self.model} engine is now running.")

  def stop_engine(self):
    self.is_running = False
    print(f"The {self.year} {self.brand} {self.model} engine has stopped.")

  def get_info(self):
    return f"{self.year} {self.brand} {self.model}"

class Car(Vehicle):
  def __init__(self, brand, model, year, num_doors, fuel_type):
    super().__init__(brand, model, year)  # Initialize parent properties
    self.num_doors = num_doors            # New property
    self.fuel_type = fuel_type           # New property
    self.trunk_open = False              # New property

  def honk_horn(self):
    print(f"The {self.brand} {self.model} is honking: Beep! Beep!")

  def open_trunk(self):
    self.trunk_open = True
    print(f"The {self.brand} {self.model} trunk is now open.")

  def get_info(self):
    base_info = super().get_info()  # Call parent method
    return f"{base_info} - {self.num_doors} doors, {self.fuel_type} engine"

# Creating and using the child class
my_car = Car("Toyota", "Camry", 2023, 4, "Hybrid")

# Using inherited methods
my_car.start_engine()

# Using child class methods
my_car.honk_horn()
my_car.open_trunk()

# Using overridden method
print(my_car.get_info())

# Stopping the engine
my_car.stop_engine()
```

This example results in the following output:

```shell
The 2023 Toyota Camry engine is now running.
The Toyota Camry is honking: Beep! Beep!
The Toyota Camry trunk is now open.
2023 Toyota Camry - 4 doors, Hybrid engine
The 2023 Toyota Camry engine has stopped.
```

This complete example demonstrates how the `Car` class inherits from `Vehicle`, uses `super()` to call parent methods, adds its own properties, and extends functionality while maintaining the benefits of inheritance.

## Frequently Asked Questions

### 1. What is the `__init__` method for inheritance in Python?

The `__init__` method is a constructor that executes when creating objects. In inheritance, child classes override the parent's `__init__`. Use `super().__init__()` to call the parent constructor and properly initialize inherited attributes.

### 2. What is overriding in Python?

Method overriding occurs when a child class provides its own implementation of a parent class method. The child's version executes instead of the parent's when called on child objects.

### 3. What is the difference between inheritance and composition in Python?

Inheritance models "is-a" relationships where child classes extend parents. Composition models "has-a" relationships where classes contain other objects as attributes.

### 4. Can a child class override parent class methods in Python?

Yes, by defining a method with the same name as the parent method. Use `super()` to still access the parent's original method if needed.

### 5. What happens if a child class doesn't define an `__init__()` method?

The child automatically inherits and uses the parent's `__init__()` method with the same parameters and logic.
