---
Title: 'clear()' 
Description: 'Removes all elements in the set.'
Subjects: 
  - 'Code Foundation'
  - 'Computer Science'
  - 'Data Science'
  
Tags:
 - 'Methods'
 - 'Sets'
 - 'Functions'
  
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

[The **clear()** method removes all elements in a Python set and does not return any values. When using the `clear()` method, the set remains even after all elements in it are removed.]

## Syntax

`set.clear()`

- The `clear()` method does not have any parameters.
- The `clear()` method does not return any values.
- The `clear()` method does not delete the set, it only removes elements inside the set.

[!NOTE:] To editors: Should this description under syntax be removed? It kind of repeats the description above, but I thought this emphasis made it clearer.

## Example
In the example below, the `clear()` method is used to clear all elements in the set `pets` resulting in the removal of all listed elements in the set:
```py
 pets ={"cats","dogs","hamsters","lizards","turtles"}
 pets.clear()
 print(pets)
```
The resulting output will look like this:
```py
 pets()
```

## Codebyte Example (if applicable)
```py 
 #Specify set of pets
 pets ={"cats","dogs","hamsters","lizards","turtles"}
 print("pets:", pets)
 #Remove elements in pets
 pets.clear()
 print(pets)
 ```