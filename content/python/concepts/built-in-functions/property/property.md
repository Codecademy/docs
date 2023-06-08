# Python property function

The property function lets coders use getter, setter, and deleting functions in more advanced ways
<br>
<br>
<br>
## Syntax

the property function takes up to four arguments

property(fget=None, fset=None, fdel=None, doc=None)

fget specifies a getter function

fset specifies a setter funtion

fdel specifies a deleting function

doc specifies a typical documentation function
<br>
<br>
<br>
## Code example

class Person:

    def __init__(self):
        self.name = None

    def set_name(self,name):
        self.name = name

    def get_name(self):
        return self.name

    def set_name(self):
        del self.name

    prop = property(get_name, set_name, del_name)   # Now the getter, setter, and deleting methods are connected through property()

p1 = Person()<br>
p1.prop = "John Smith" &nbsp;&nbsp;&nbsp;# Setter method is automatically called<br>
print(p1.prop) &nbsp;&nbsp;&nbsp;# Getter is automatically called<br>
del p1.prop &nbsp;&nbsp;&nbsp;# Deleteing method is automatically called