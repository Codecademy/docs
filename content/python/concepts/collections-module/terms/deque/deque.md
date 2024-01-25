---
Title: 'collections.deque()'
Description: 'A method that creates a deque object'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Data Structures'
  - 'Data Types'
  - 'Queues'
  - 'Stacks'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`deque()`** function creates a new `deque` object.

## Syntax

```pseudo
my_deque = deque(iterable, maxlen)
```
`maxlen` is optional and is used to limit the size of the `deque`.

## Example 1

Instantiate using a string object, and print the `deque`.

```python
fruit = 'apple'
fruit_slices = deque(fruit)
print(fruit_slices)
```

## Example 2

Instantiate using a string, and print the `deque`.

```python
fruit_slices = deque('mango')
print(fruit_slices)
```

## Example 3

Instantiate using a list, and print the `deque`.

```python
cart = ['wood', 'metal', 'plastic']
cart_deque = deque(cart)
print(cart_deque)
```

## Example 4

Instantiate using a list and a maximum length and print the `deque`.  This will also print the `maxlen` value.

```python
friends = ['Dave', 'Mary', 'Luis', 'Zachary']
car_five_seater = deque(friends, 5)
print(car_five_seater)
```

## Codebyte Example

```codebyte/python
from collections import deque
# Example deque() method
tools = ['screwdriver', 'wrench', 'pliers']
toolbox = deque(tools)
print(toolbox)
```