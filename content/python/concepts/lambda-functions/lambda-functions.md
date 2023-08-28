---
Title: 'Lambda Functions'
Description: 'Lambda Functions are simple functions that can be defined in one line.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Lambda'
  - 'FP'
CatalogContent:
  - 'learn-intermediate-python-3'
  - 'paths/computer-science'
---

**Lambda Functions** are one-line functions that can perform simple tasks.

The usage of Lambda Functions is a key element of [fuctional-programming](https://www.codecademy.com/resources/docs/general/programming-paradigms/functional-programming) (FP) where fuctions perform tasks. It is commonly used in the *map*, *reduce*, and *filter* functions

## Creating a Lambda Function

In Python, Lambda Functions are defined using the following syntax: lambda *arguments*: *returns*

```py
lambda x: x+1
```

**Note**: The example above would return x+1


In the function body, conditionals can be applied by adding a *returns something* if *boolean* else *returns some other thing*

```py
lambda x: x/2 if x%2 == 0 else x
```

**Note**: The example above returns half x if x is even and if not it simply returns x.


### Lambda Functions as Variables

A variable can be set to a lambda function normally

```py
add_54 = lambda x: x+54
five_plus_54 = add_54(5)
```
####################################################################################################################################################################################################################################################################################
Here, the instance name is `my_home`, which derives from the `Home` class. Calling this line implicitly calls the `Home` class's [`__init__()`](https://www.codecademy.com/resources/docs/python/dunder-methods/init) method.

### Attributes

Class attributes are variables that are defined outside of all methods and have the same value for every instance of the class. They also can be accessed via the class name rather than the instance name. Setting the variable via the class name will change it for all instances.

**Note**: Setting it via an instance name will break the connection for that instance.

```py
class Bird:
  # Class attribute
  is_hungry = True

parakeet = Bird()
parrot = Bird()


print("Birds are hungry!")
print("Feeding birds...")

parakeet.is_hungry = False
parrot.is_hungry = False

print("Birds fed!")
```

This will output the following:

```shell
Birds are hungry!
Feeding birds...
Birds fed!
```

### Methods

Methods are [functions](https://www.codecademy.com/resources/docs/python/functions) defined as part of a class. The first parameter for any class method, including dunder methods, is the actual object calling the method, usually called `self`.

The following is a slight modification of the `Bird` class from the previous section:

```py
class Bird:
  # Class attribute
  is_hungry = True

  def feed_bird(self, food):
    if(self.is_hungry):
      self.is_hungry = False
      print(f"Feeding with {food}. Bird fed!")
    else:
      print("Bird already ate.")

sparrow = Bird()

sparrow.feed_bird('seeds')
sparrow.feed_bird('oats')
```

A `feed_bird()` method is defined in the `Bird` class body, accepting a `food` parameter. Inside, an `if..else` [conditional](https://www.codecademy.com/resources/docs/python/conditionals) prints a different message depending on whether or not the `is_hungry` attribute is true. The following will be printed based on the example:

```shell
Feeding with seeds. Bird fed!
Bird already ate.
```

#### Static Methods

It is also possible to create a method that only applies to the class itself, not instances of the class. These can be distinguished with `@classmethod` and `@staticmethod`:

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

Afterward, the `Employee` class can be imported into other files where new instances and methods can be created. This makes the code efficient, reusable, and maintainable:

```py
# other_file.py
from employee import Employee

def create_employee():
  print("Employee is starting their job...")
  employee1 = Employee()
  employee1.name = "Blake"
  employee1.working(employee1.name)

create_employee();
```

Running the code in `other_file.py` will output the following:

```shell
Employee is starting their job...
Blake is working
```

## Codebyte Example

Defined methods and variables can be accessed within the class definition. This is done with the `self` keyword, followed by a period `.`, and then followed by the method or variable. In the example below, the defined `.getName()` method is used inside the `.sayHi()` method:

```codebyte/python
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