---
Title: 'Queue'
Description: 'A Queue is a collection interface that offers additional operations for accessing or manipulating items at the head of the queue.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Queues'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

A **`Queue`** is a data structure that stores elements in a linear order, and follows the First In, First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed.

### Syntax

The syntax for creating a `Queue` in Kotlin using the `LinkedList` class is as follows:

```pseudo
val queue = LinkedList<Type>()
```

Where `Type` is the type of elements that the `Queue` will hold, for example, to store integers, use `Int` as the type :

```pseudo
val queue = LinkedList<Int>()
```

The `Queue` interface, which is implemented by `LinkedList`, can also be used:

```pseudo
val queue = LinkedList<Type>().toQueue()
```

### Example

```kotlin
// Create a new queue
val queue = LinkedList<Int>()

// Add elements to the queue
queue.add(1)
queue.add(2)
queue.add(3)

// Remove elements from the queue
val firstElement = queue.remove() // Returns 1
val secondElement = queue.remove() // Returns 2
```

In the above example, a new `Queue` is created using the `LinkedList` class, then three elements are added to it using the `.add()` method. Then elements are removed from the `Queue` using the `.remove()` method, which returns the first element added to the `Queue` (`1`). The second and third elements (`2` and `3`) can be removed in the same way.

### Methods

The following are the basic methods available for the queue :

- queue.add(element: Type) - Adds an element to the end of the queue
- queue.remove() - Removes and returns the first element in the queue
- queue.peek() - Returns the first element in the queue without removing it.
- queue.isEmpty() - Returns true if the queue is empty, otherwise false.
- queue.size - Returns the number of elements in the queue.
