---
Title: 'Scope'
Description: 'Scope refers to the areas in which variables are visible and accessible.'
Subjects:
  - `Code Foundations`
  - 'Computer Science'
Tags:
  - `Conceptual`
  - `Scope`
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Scope refers to the areas in which variables are visible and accessible. Variables that can be accessed anywhere in a Python program are in the global scope. Conversely, variables that are defined within the body of structures like classes and methods exist in the local scope.

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