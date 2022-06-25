---
Title: 'Classes'
Description: 'Classes are templates used to define the properties and methods of objects in code.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Attributes'
  - 'Classes'
  - 'Methods'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Classes** are templates used to define the properties and methods of objects in code. They can describe the kinds of data that the class holds, and also how a programmer interacts with that data.

The usage of classes are a key element of [object-oriented programming](https://www.codecademy.com/resources/docs/general/object-oriented-programming) (OOP) where "class instances" are created to implement design principles such as [inheritance](https://www.codecademy.com/resources/docs/general/inheritance) and [encapsulation](https://www.codecademy.com/resources/docs/general/encapsulation).

## Creating a Class

```py
class Home:
  # Class body starts here
```

In Python, classes are defined using the [`class`](https://www.codecademy.com/resources/docs/python/keywords/class) keyword. Within the code of the class, we can call its methods and access its variables. We do this by using `self` followed by a period `.` and then followed by the method or variable.

### Class Instances

Objects can be created or instantiated, from classes. These objects are known as class instances. To create an instance of a class, we can set a variable equal to the class name followed by parentheses `()`:

```py
my_home = Home()
```

Here, the instance name is `my_home`, and the class is `Home`.

### Attributes

Class attributes are variables that are defined outside of all methods and have the same value for every instance of the class.

```py
class Bird:
  # Class attribute
  leg_count = 2

parakeet = Bird()
parrot = Bird()

print(parakeet.leg_count) # Output: 2
print(parrot.leg_count)   # Output: 2
```

### Methods

Methods are [functions](https://www.codecademy.com/resources/docs/python/functions) defined as part of a class. The first parameter for any class method is the actual object calling the method, usually called `self`.

For example, the following class `Home` has a method called `.paint_wall()`:

- The first parameter is `self`.
- The second parameter is `color`.

When calling a class method, no argument is provided for the parameter `self`, but arguments must be provided for each following parameter.

```py
class Home:
  def paint_wall(self, color):
    # Method body

# Creating an instance of the class
blue_home = Home()

# Calling the method on the instance
blue_home.paint_wall("blue")
```

#### Static Methods

It is also possible to create method that only apply to the class itself, not instances of the class. These can be distinguised with `@classmethod` and `@staticmethod`:

```py
class Home:
  name="Code Ninja"
  rooms = 4
  stories = 2

  @staticmethod
  def is_on_market(home):
    if(home.name == ""):
      return True
    else:
      return False

  @classmethod
  def paint_wall(self, color):
    return f"Painting wall with the color {color}."

home = Home()

print(Home.is_on_market(home))
# Output: False
```

#### Customized Class Methods

The `__init__()` method is used to initialize a newly created object. It is called each time a class is instantiated. Instance variables are set within the `__init__()` method block. They can be set initially within the `__init__()` method when the instance is created, or instance variables can be added by setting them to values.

```py
class Home:
  def __init__(self, rooms, stories):
    # Setting instance variables
    self.rooms = rooms
    self.stories = stories

home = Home(4, 2)

print(home.rooms)   # Output: 4
print(home.stories) # Output: 2
```

The `__repr__()` method returns the string representation of the class. One way to see the string representation is to call [`print()`](https://www.codecademy.com/resources/docs/python/built-in-functions/print) on the instance.

```py
class Home:
  def __init__(self, rooms, stories):
    self.rooms = rooms
    self.stories = stories

  def __repr__(self):
    return "Home with {} rooms and {} stories".format(self.rooms, self.stories)

home1 = Home(4, 2)
print(home1) # Output: Home with 4 rooms and 2 stories

home2 = Home(5, 2)
print(home2) # Output: Home with 5 rooms and 2 stories
```

## Example

The following example demonstrates an `Employee` class defined in a file called `employee.py`:

```py
# employee.py
class Employee(object):
  name = "Sam"
  company = "ILoveCode Inc."
  age = 30
  is_on_vacation = True

  def working(self, employee_name):
    self.name = employee_name
    print(f"{employee_name} is working")
```

Afterward, the `Employee` class can be imported in other files where new instances and methods can be created. This makes the code efficient, reusable, and maintainable:

```py
# other_file.py
from employee import Employee

def create_employee():
  print("Employee is starting thier job...")
  employee1 = Employee()
  employee1.name = "Blake"
  employee1.working(employee1.name)

create_employee();
```

Running the code in `other_file.py` will output the following:

```shell
Employee is starting thier job...
Blake is working
```

## Codebyte Example

Defined methods and variables can be accessed within the class definition. This is done with the `self` keyword, followed by a period `.`, and then followed by the method or variable. In the example below, the defined `.getName()` method is used inside the `.sayHi()` method:

```py
class Person:
  def __init__(self, name):
    self.name = name

  def sayHi(self):
    # Calls its method .getName()
    print(f"Hi! My name is {self.getName()}.")

  def getName(self):
    # Accesses the name variable
    return self.name

bob = Person("Bob")
bob.sayHi()
```
