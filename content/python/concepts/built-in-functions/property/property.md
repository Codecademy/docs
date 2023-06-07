*Python property function

The property function lets coders use getter, setter, and deleting functions in more advanced ways

**Syntax

the property function takes up to four arguments

property(fget=None, fset=None, fdel=None, doc=None)

fget specifies a getter function

fset specifies a setter funtion

fdel specifies a deleting function

doc specifies a typical documentation function


**Code example

class Person:

    def __init__(self):
        self.name = None

    def set_name(self,name):
        self.name = name

    def get_name(self):
        return self.name

    def set_name(self):
        del self.name

    prop = property(get_name, set_name, del_name) # Now the getter, setter, and deleting method are connected through property()

p1 = Person()
p1.prop = "John Smith" # Setter method is automatically called
print(p1.prop) # Getter is automatically called
del p1.prop # Deleteing method is automatically called