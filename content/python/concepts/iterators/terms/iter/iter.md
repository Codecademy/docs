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

## Example

The example below demonstrates how the `iter()` function is used in a Python program:

```py
cars = ['Ferrari', 'Lamborghini', 'Porsche']

cars_iter = iter(cars)

print(next(cars_iter))
print(next(cars_iter))
print(next(cars_iter))
```

This will print the following output:

```shell
Hello, World! Let's count:
2
3
4
5
6
7
8
9
StopIteration Exception raised. Value returned was equal to sentinel value
```

## Applying a Sentinel

The following example applies the optional `sentinel` parameter through a callable class object (though the `__call__()` method):

```py
class codeNinjaCount:
  def __init__(self, greeting, num):
    self.greeting = greeting
    self.num = num
    print(f"{self.greeting}! Let's count:")

  def __call__(self):
    self.num += 1
    return self.num

codeNinjaIterable = iter(codeNinjaCount("Hello, World", 1), 10)

while True:
  try:
    print(next(codeNinjaIterable))
  except StopIteration:
    print("StopIteration Exception raised. Value returned was equal to sentinel value")
    break
```

### Codebyte Example

When using iterables, it usually isn't necessary to call `iter()` or deal with iterator objects. The `for` loop does this automatically by creating a temporary, unnamed variable to hold the iterator for the duration of the loop.

The following code examples use the `iter()` function and a `for` loop to produce the same results:

```codebyte/python
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
