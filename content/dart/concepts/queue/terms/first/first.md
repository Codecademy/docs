---
Title: '.first'
Description: 'Returns the first element in a queue.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Queues'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.first`** property returns the first element in a `Queue`. This property is part of the `Queue` class under the `dart:collection` library.

## Syntax
```pseudo
queue.first;
```

**Return value:**

Returns the first element in the queue.

> **Note:** If the queue is empty, accessing this property throws a `StateError`.

## Example

The following example demonstrates the usage of the `.first` property:
```dart
import 'dart:collection';

void main() {
  Queue<int> numbers = Queue<int>();
  numbers.add(10);
  numbers.add(20);
  numbers.add(30);
  numbers.add(40);

  print("First element: ${numbers.first}");

  // Modifying the first element
  numbers.first = 5;
  print("Updated first element: ${numbers.first}");
}
```

The output for the above code is as follows:
```shell
First element: 10
Updated first element: 5
```

> **Note:** The `.first` property can also be used to modify the first element of the queue, as shown in the example above.