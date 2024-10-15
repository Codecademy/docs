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
  - 'Functions'
CatalogContent:
  - 'learn-python 3'
  - 'paths/computer-science'
---

The **`locals()`** built-in function in Python returns a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) containing the current local symbol table, which maps [variable](https://www.codecademy.com/resources/docs/python/variables) names to their values in the current [scope](https://www.codecademy.com/resources/docs/python/scope).

## Syntax

```pseudo
locals()
```

## Example

The following example demonstrates the usage of the `locals()` function:

```py
def example1():
  print( "No local variables." , locals() )

def example2():
  ex= "A"
  print( "One local variable." , locals() )

example1()
example2()
```

The code above generates the following output:

```shell
No local variables. {}
One local variable. {'ex': 'A'}
```

> Note: `locals()` cannot change the local symbol table. It only allows seeing it.

## Codebyte Example

Run the following code to understand how the `locals()` function works:

```codebyte/python
def example2a():
  ex = "A"

  print("One local variable:", locals())
  print("Before updating ex is:", ex)

  ex = "B"

  print("After updating ex is:", ex)

example2a()
```
