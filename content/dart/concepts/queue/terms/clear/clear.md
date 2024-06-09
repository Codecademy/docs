---
Title: '.clear()'
Description: 'A method that removes all elements in the queue.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Dart'
  - 'Data Structures'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.clear()`** method removes all elements in the queue. After invoking this method, the queue will be empty, and its size will be zero.

The `.clear()` method is a (`void`) method that does not return any value and does not accept any arguments.

## Syntax

To call the `.clear()` method and clear a queue named `myQueue`, the syntax is as follows:

```pseudo
myQueue.clear();
```

> **Note:** To use a queue in a Dart program, it is necessary to import the `dart:collection` module.

## Example

In the following example, a queue is created, elements are inserted in the queue and the `.clear()` method removes all elements in the queue:

```dart
import 'dart:collection';

void main()
{
  // Creating a queue
  Queue<int> myQueue = new Queue<int>();

  // Inserting elements in the myQueue
  myQueue.addAll([1, 2, 3, 4, 5, 6]);
  print("Queue before clearing: $myQueue");

  // removing all elements in the myQueue
  myQueue.clear();
  print("Queue after clearing: $myQueue");
}
```

The above code will result in the following output:

```shell
Queue before clearing: {1, 2, 3, 4, 5, 6}
Queue after clearing: {}
```
