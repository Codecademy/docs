---
Title:
  - "Classes in Python"
Subjects:
  - "Computer Science"
  - "Web Development"
Tags:
  - "Classes"
  - "Objects"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/web-development"
---

Classes are templates used to define the properties and methods of objects in code. They can describe the kinds of information that the class holds, and also how a programmer interacts with that data.

It serves as a blueprint or template for the objects, or "instances" of the class.

## Creating a Class

In Python, classes are defined using the `class` keyword. 

```py
class Animal:
  def __init__(self, name, leg_count):
    self.name = name
    self.leg_count = leg_count
```

Class definitions cannot be empty, so the `pass` statement can be used as a placeholder to avoid errors.

```py
class Home:
  pass
```

## Creating Instances of a Class

Objects can be created from classes. These objects are called instances of a class, and when we create an instance, that is known as instantiating a class. To create an instance of a class, we can set a variable equal to the class name followed by parentheses `()`.

```py
my_home = Home()
```

Here, the instance name is `my_home`, and the class is `Home`.

## Class Methods

Methods are functions defined as part of a class. The first parameter for any class method is the actual object calling the method, usually called `self`. 

For example, the following class `Home` has a method called `.paint_wall()`. The first parameter is `self`, and the second parameter is `color`. 

When calling a class method, no argument is provided for the parameter `self`, but arguments must be provided for each following parameter.

```py
class Home:
  def paint_wall(self, color):
    # ...

# Creating an instance of the class.
blue_home = Home()
# Calling the method on the instance.
blue_home.paint_wall("blue")
```

## Class Attributes

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

## Instance Variables

Instance variables are variables that are unique to each instance of a class. They can be set initially within the `__init__()` method when the instance is created, or instance variables can be added by setting them to values.

```py
class Dog:
  def __init__(self, breed):
    # Instance variable:
    self.breed = breed

dog = Dog("Jindo")

dog.name = "Ruff"
```

We give the instance `dog` a new instance variable called `name` and set it to the value `"Ruff"`.

## __init__() Method

This method is used to initialize a newly created object. It is called each time a class is instantiated. Instance variables are set within the `__init__()` method block. Input parameters can be set for this method, which are passed during instantiation.

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

## __repr__() Method

The `__repr__()` method returns the string representation of the class. One way to see the string representation is to call `print()` on the instance.

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

## Accessing Methods and Variables in the Class

Within the code of the class, we can call its methods and access its variables. We do this by using `self` followed by a period `.` and then followed by the method or variable.

```py
class Person:
  def __init__(self, name):
    self.name = name
    
  def sayHi(self):
    # Calls its method .getName()
    print("Hi my name is {}".format(self.getName()))
    
  def getName(self):
    # Accesses the name variable
    return self.name
bob = Person("Bob")
bob.sayHi() # "Hi my name is Bob"
```

## type() Function

The `type()` function returns the data type of the argument passed to it. When the argument is an instance of a class, it returns the class that it is an instance of.
```py
home = Home(4, 2)

print(type(home)) 
# Output: <class '__main__.Home'>
```

## hasattr() Function

The `hasattr()` function can be used to check if an instance of a class has an attribute. It returns `True` if it does have the attribute, and `False` otherwise. 

```py
home = Home(4, 2)

print(hasattr(home, 'rooms')) # Output: True
print(hasattr(home, 'year'))  # Output: False
```

## Deleting Objects

Objects, or instances of classes, can be deleted using the `del` keyword.

```py
del instance_name
```

## Deleting Attributes

Attributes of objects can be deleted using the `del` keyword.

```py
del instance_name.attribute_name
```

## Example

Lets demonstrate a class for an `Employee`:

```py
class Employee(object):
    name = "Sam"
    company = "ILoveCode Inc."
    age = 30
    is_on_vacation = True
    
    def working(self, employee_name):
       self.name = employee_name
       print(employee_name + " is working")
```

Once we create an `Employee` class like we did above we can import the module in our code and create instances of it whenever and wherever we want, thereby enabling code reusablity and making our code more efficient and easier to maintain.

```py
from employee import Employee

def create_employee():
    print("employee is starting thier job")
    employee1 = Employee(name="Blake")
    name = employee1.name
   
    print(employee1.work(name))
    # Output: Blake is working
```

When creating applications classes are a great way to organize and improve the quality of your code. 
