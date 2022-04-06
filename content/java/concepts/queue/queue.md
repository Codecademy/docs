---
Title: 'Queue'
Description: 'A collection interface offering additional operations to access or manipulate items at the head of the queue.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Queues'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A `Queue` is an interface provided in `java.util` that extends collections to provide additional methods to access or manipulate items at the head of the queue. Where the "head" of the queue is will be defined by the particular implementation. In a typical implementation, the queue will access elements in a FIFO (first-in-first-out) manner. However, in an stack implementation, the order will be LIFO (last-in-first-out). In a priority queue implementation, the first item out will be defined by its specified priority.

The `Queue` interface utilizes the following methods:

- `.add()` : `.add(item)` adds `item` to the `Queue` if possible, otherwise it throws an exception.
- `.offer()` : `.offer(item)` adds `item` to the `Queue` if possible, otherwise it returns `false`.
- `.remove()` : removes and returns the head item of the `Queue`, throwing an exception when the `Queue` is empty.
- `.poll()` : removes and returns the head item of the `Queue`, returning `null` if the `Queue` is empty.
- `.element()` : returns the head of the `Queue` without removing it.
- `.peek()` : returns the head of the `Queue` without removing it.
