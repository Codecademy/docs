<!--
---
Title:
  - "Classes in Python"
Subjects:
  - "code foundations"
  - "web development"
Tags:
  - "python"
  - "class"
  - "best practice"
  - "objects"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/learn-how-to-code"
---
-->

# Classes in Python

Classes are used to define the behavior, attributes and functions of objects in code. We use the `class` keyword to define a class and use properties and methods to determine the structure and functionality of the class. In doing so a class becomes a protoype or template for instances of the object. Lets demonstrate a class for an Employee:

## Example

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
