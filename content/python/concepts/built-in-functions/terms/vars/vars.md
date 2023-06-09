---
Title: 'vars()'
Description: 'Returns the __dict__ attirbute of an object.'
Subjects: 
  - 'Computer Science'
Tags: 
  - 'Functions'
  - 'Attributes'
  - 'Objects'
CatalogContent: 
  - 'learn-python'
  - 'paths/computer-science'
---

**`vars()`** is a built-in python function that returns the `__dict__` attribute of an object. The `__dict__` attribute is a dictionary containing the object's changeable attributes.

## Syntax
```pseudo
vars(object)
```

## Example

Use vars() to return the __dict__ attributes of the object 'Person'

```codebyte/python
	class Person:
		name = "John"
		age = 36
		country = "norway"

	x = vars(Person)
	
	>>>{'__module__': '__main__', 'name': 'John', 'age': 36, 'country': 'norway', '__dict__': <attribute '__dict__' of 'Person' objects>, '__weakref__': <attribute '__weakref__' of 'Person' objects>, '__doc__': None}
```
