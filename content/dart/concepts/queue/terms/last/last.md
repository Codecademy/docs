---
Title: '.last'
Description: 'Returns the last element in a queue without removing it.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Collections'
  - 'Dart'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.last`** property returns the last element in a `Queue` without modifying the queue. It provides read-only access to the element at the end of the queue.

This property is part of the `Queue` class from the `dart:collection` library and is commonly used when you need to inspect the most recently added element or the final element in the queue.

## Syntax

```pseudo
collection.last
```

**Parameters:**

This property does not take any parameters.

**Return value:**

Returns the last element in the queue.

> **Note:** If the queue is empty, accessing `.last` throws a `StateError`.

## Example: Accessing the Last Element of a Queue

This example demonstrates how to retrieve the last element from a queue without removing it:

```dart
import 'dart:collection';

void main() {
  Queue<int> numbers = Queue<int>();

  numbers.add(10);
  numbers.add(20);
  numbers.add(30);
  numbers.add(40);

  print('Last element: ${numbers.last}');
}
```

It will produce the following output:

```shell
Last element: 40
```

The queue remains unchanged after accessing `.last`, making it useful for inspection or conditional logic without altering the data structure.
