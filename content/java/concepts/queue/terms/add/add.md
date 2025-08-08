---
Title: '.add()'
Description: 'Inserts an element into a queue, throwing an exception if it fails.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Queue'
  - 'Data Structures'
  - 'Methods'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

# `add()` Method (Queue)

The `add()` method is used to insert an element into a queue in Java. It is defined in the `Queue` interface in the `java.util` package. This method adds the specified element to the tail of the queue if possible.

Unlike `offer()`, which returns `false` if the queue is full (in bounded implementations), `add()` throws an exception (`IllegalStateException`) in such cases. It is suitable when failure to insert should not be silently ignored.

## Syntax

```java
boolean add(E e)
