---
Title: 'iter()'
Description: 'The iter() function returns an iterator object.'
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
The **`iter()`** function returns an [iterator](https://www.codecademy.com/resources/docs/python/iterators) object.

## Syntax

```pseudo
iter(object, sentinel[optional])
```

The `object` is required and must either be a collection (e.g., a [list](https://www.codecademy.com/resources/docs/python/lists)) or callable (e.g., a [class](https://www.codecademy.com/resources/docs/python/classes) with a `__call__()` method).

If the `object` is callable, the optional `sentinel` parameter can be applied and the iterable will end when the returned value is the same as the `sentinel` and a `StopIteration` error will be raised.

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

