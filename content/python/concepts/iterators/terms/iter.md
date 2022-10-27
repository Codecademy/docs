---
Title: 'iter()'
Description: 'The iter() method is a python built-in function that returns an iterator object for a given argument.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Iterators'
  - 'OOP'
  - 'Loops'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---
The `iter()` method is a python built-in function that returns an iterator object for a given `object`.

## Syntax

```pseudo
iter(object, sentinel[optional])
```

## Parameters                                                                                                         
* **object** : Required. An iterable object such as list, str, and tuple.                                                                | 
* **sentinel** : Optional. If the object is a callable object the iteration will stop when the returned value is the same as the sentinel.<br/>If the second argument, sentinel, is given, then object must be a callable object. The iterator created in this case will call object with no arguments for each call to its __next__() method; if the value returned is equal to sentinel, StopIteration will be raised, otherwise the value will be returned. | 

## Example 1
The example below demonstrates how the `iter()` function is used in a Python program:

```py
cars = ['Ferrari', 'Lamborghini', 'Porsche']

cars_iter = iter(cars)

print(next(cars_iter))
print(next(cars_iter))
print(next(cars_iter))

#Output
#Ferrari
#Lamborghini
#Porsche
```

## Example 2 with optional parameter sentinel
One useful application of the second form of iter() is to build a block-reader.  
For example, reading fixed-width blocks from a binary database file until the end of file is reached:
```py
from functools import partial
with open('mydata.db', 'rb') as f:
    for block in iter(partial(f.read, 64), b''):
        process_block(block)
```

## Using iter() with iterables

When using iterables, it is usually not necessary to call `iter()` or deal with iterator objects. The for statement does that automatically, creating a temporary unnamed variable to hold the iterator for the duration of the loop.

Run the two code examples below to see that they produce the same results :

```codebyte/py
fruits = ['apple', 'orange', 'banana']

print("Example with iter() and next() : ")
fruits_iter = iter(fruits)

print(next(fruits_iter))   
print(next(fruits_iter))    
print(next(fruits_iter))   
print("------------------------------------")
print("Example with for loop : ")
for fruit in fruits:
    print(fruit)
```

