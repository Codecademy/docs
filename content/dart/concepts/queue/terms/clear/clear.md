---
Title: '.clear()'
Description: 'A method that removes all elements in a queue.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Dart'
  - 'Classes'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.clear()`** method in Queue removes all elements in the queue. The size of the queue becomes zero.

A brief description of the features of the `.clear()` method:
- removes all elements in the queue;
- the method doesn't return anything (`void`);
- the method doesn't take any arguments.

## Syntax

Calling the `.clear()` method to clear the queue `myQueue`:

> **Note:** To use a queue in a Dart program, we have to import the `dart:collection` module.

```pseudo
myQueue.clear();
```

## Example

In the following example, a queue is created, elements are inserted in the queue and the `.clear()` method removes all elements in the queue:

```dart
import 'dart:collection';

void main()
{
  // Creating a queue
  Queue<int> myQueue = new Queue<int>();

  // Adding elements to myQueue
  myQueue.addAll([1, 2, 3, 4, 5, 6]);
  print("Queue before clearing: $myQueue");

  // Clear the myQueue
  myQueue.clear();
  print("Queue after clearing: $myQueue");
}
```

The above code will result in the following output:

```shell
Queue before clearing: {1, 2, 3, 4, 5, 6}
Queue after clearing: {}
```
