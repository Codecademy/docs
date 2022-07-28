---
Title: 'Stacks'
Description: 'A stack is a container that stores elements in a last-in first-out (LIFO) order.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data Types'
  - 'Collections'
  - 'Stacks'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **`stack`** is a container that stores elements in a last-in first-out (LIFO) order. They are implemented as a container adaptor, a class that uses another container class as its underlying container. The underlying container class can be a `vector`, `deque`, or a `list`. If none is specified when creating a `stack` instance, the default `deque` is used.

## Syntax

```pseudo
std::stack<dataType> stackName;

std::stack<dataType, containerType<dataType>> stackName;
```

A `stack` requires a [`dataType`](https://www.codecademy.com/resources/docs/cpp/data-types) to be specified. A `containerType` can be specified, but it must be the same data type. If a container type is not specified, the default `deque<dataType>` is used.
