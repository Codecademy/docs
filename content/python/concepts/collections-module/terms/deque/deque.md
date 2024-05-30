---
Title: '.deque()'
Description: 'A method that creates a deque object.'
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

## Example

**Instantiate using a string object, and print the `deque`.**

```python
fruit = 'apple'
fruit_slices = deque(fruit)
print(fruit_slices)
```

The above code will give the following output:

```
deque(['a', 'p', 'p', 'l', 'e'])
```

**Instantiate using a string, and print the `deque`.**

```python
fruit_slices = deque('mango')
print(fruit_slices)
```

The above code will give the following output:

```
deque(['m', 'a', 'n', 'g', 'o'])
```

**Instantiate using a list, and print the `deque`.**

```python
cart = ['wood', 'metal', 'plastic']
cart_deque = deque(cart)
print(cart_deque)
```

The above code will give the following output:

```
deque(['wood', 'metal', 'plastic'])
```

**Instantiate using a list and a maximum length, and print the `deque` and its `maxlen` value.**

```python
friends = ['Dave', 'Mary', 'Luis', 'Zachary']
car_five_seater = deque(friends, 5)
print(car_five_seater)
```

The above code will give the following output:

```
deque(['Dave', 'Mary', 'Luis', 'Zachary'], maxlen=5)
```

## Codebyte

The following snippet demonstrates using the `deque` from the `collections module` where it converts a list of tools into a deque, which is a double-ended queue allowing fast appends and pops from both ends:

```codebyte/py
from collections import deque
# Example deque() method
tools = ['screwdriver', 'wrench', 'pliers']
toolbox = deque(tools)
print(toolbox)
```
