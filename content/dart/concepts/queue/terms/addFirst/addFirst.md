git---
Title: '.addFirst()'
Description: 'Adds an element at the beginning of a queue.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Queues'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.addFirst()`** method adds an element at the beginning of a `Queue`. This method is part of the `Queue` class under the `dart:collection` library.

## Syntax
```pseudo
queue.addFirst(element);
```

**Parameters:**

- `element`: The element to be added at the beginning of the queue.

**Return value:**

This method does not return a value.

## Example

The following example demonstrates the usage of the `.addFirst()` method:
```dart
import 'dart:collection';

void main() {
  Queue<int> numbers = Queue<int>();
  numbers.add(20);
  numbers.add(30);
  numbers.add(40);

  print("Original queue: $numbers");

  numbers.addFirst(10);
  print("After addFirst(10): $numbers");

  numbers.addFirst(5);
  print("After addFirst(5): $numbers");
}
```

The output for the above code is as follows:
```shell
Original queue: {20, 30, 40}
After addFirst(10): {10, 20, 30, 40}
After addFirst(5): {5, 10, 20, 30, 40}
```