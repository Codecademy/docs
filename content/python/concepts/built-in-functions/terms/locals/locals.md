---
Title: 'locals()'
Description: 'Returns a dictionary containing the current local symbol table.'
Subjects: 
- 'Developer Tools'
- 'Computer Science'
Tags:
- 'Dictionary' 
- 'Metadata' 
- 'Symbol'
Catalog-content: 
- 'learn-python 3'
- 'paths/computer-science'
---

The **`locals()`** built-in function in Python returns a dictionary containing the current local symbol table, which maps variable names to their values in the current scope.

## Syntax

```py
locals()
```

## Example

```py
def example():
 print( "No local variables." ,locals() )

def example2():
 ex= "A"
 print( "One local variable." , locals() )

#example result

No local variables. {}

#example2 result

One local variables. {ex:A}
```


`locals()` cannot change the local symbol table. It only allows you to see it.

```py

def example2a():
 ex="A"
 print("One local variable.", locals())
 print("Before updateing ex is :", ex)

 locals()["ex"]= "B"

 print("After updateing ex is :", ex)

*example2a result

One local variable, {ex:A}
Before updating ex is : A
After updateing ex is : A
```

In the `global` scope `locals()` is the same as `globals()`

```py

print("Locals", locals())

print("Globals", globals())

{'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7fabf35f3d70>, '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>, '__file__': '/home/ccuser/workspace/learn-python-control-flow-sals-shipping/shipping.py', '__cached__': None, 'weight': 41.5}

```

