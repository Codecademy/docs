---
Title: 'Lists'
Description: 'Lists are mutable sequence data types used for storing a comma-separated collection of objects in a single variable.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Lists'
  - 'Arrays'
  - 'Objects'
  - 'Data Structures'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

A **list** in Python is a sequence [data type](https://www.codecademy.com/resources/docs/python/data-types) used for storing a comma-separated collection of objects in a single [variable](https://www.codecademy.com/resources/docs/python/variables). Lists are always ordered and can contain different types of objects (strings, integers, booleans, etc.). Since they are mutable data types, lists are a good choice for dynamic data (that may be added or removed over time).

## Syntax

```pseudo
# With square brackets
list_a = []

# With built-in function
list_b = list()
```

Lists can either be defined with square brackets (`[]`) or with the built-in `list()` constructor method. In any case, the values initially passed to the new list must be comma-separated.

The following example showcases how lists can hold items of the same type or a mix of different types:

```py
list_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

list_2 = ["one", 2, "3"]
```

## Stacks and Queues

Python lists can also be made to behave like stacks and queues.

Stacks follow a "last-in, first-out" insertion order. This behavior can be showcased with the [`.append()`](https://www.codecademy.com/resources/docs/python/lists/append) and [`.pop()`](https://www.codecademy.com/resources/docs/python/lists/pop) methods for adding to and removing from the top of the stack, respectively:

```py
stack_example = ["a", "b", "c"]
print(stack_example)
# Output: ['a', 'b', 'c']

stack_example.append(1)
stack_example.append(2)
stack_example.append(3)
print(stack_example)
# Output: ['a', 'b', 'c', 1, 2, 3]

stack_example.pop()
stack_example.pop()
print(stack_example)
# Output: ['a', 'b', 'c', 1]
```

Queues follow a "first-in, first-out" insertion order and also utilize the `.append()` and `.pop()` methods:

```py
queue_example = ["a", "b", "c"]
print(queue_example)
# Output: ['a', 'b', 'c']

queue_example.append(1)
queue_example.append(2)
print(queue_example)
# Output: ['a', 'b', 'c', 1, 2]

queue_example.pop(0)
print(queue_example)
# Output: ['b', 'c', 1, 2]
```

While using a list as a queue is possible, it is not efficient because applying `.pop()` to the first item requires shifting all remaining items by one spot and reassigning indices. Instead, a `deque` object from the [`collections`](https://www.codecademy.com/resources/docs/python/collections-module) module should be used to efficiently add/remove from a queue.

## Video Walkthrough

Watch this video for a step-by-step demonstration on how to create and edit Python lists.

<iframe width="560" height="315" src="https://www.youtube.com/embed/mZdNLYYJNis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
