---
Title: 'Scope'
Description: 'The variable is only usable inside the region it is created is called as scope in python'
Subjects:
  - `Code Foundations`
  - 'Computer Science'
Tags:
  - 'Lists'
  - 'Arrays'
  - 'Objects'
  - 'Data Structures'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The variable is only usable inside the region it is created is called as **scope** in python. Now this region can be anything a class, method(function), loops, if statements, etc.

## Types of Scopes
 **Local Scope**: 
 
 Suppose there is a function and a variable is initialized in it. Now this variable can only be used within that funtion not from outside the function.

 ~~~
def fun():
    x = 200
    print(x)

myfun()
 ~~~

**Nexted Functions Scope**:

Here, if the variable initialised in the outer function and that variable is used in the inner function then its totally fine, but when the case is vice versa it will generate an exception.
```
def outerfun():
    x = 200        #initialised in outer function.
    def innerfun():
        print(x)
    innerfun()

outerfun()
```

**Global Scope**:

A variable initialised in the main body is defined as a **global** variable and can be used anywhere in the code. It could be nested blocks, loops, etc.
```
x = 200     #global variable

def fun():
    print(x)

fun()
print(x)
```