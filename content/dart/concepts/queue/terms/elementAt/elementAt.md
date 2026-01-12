---
Title: '.elementAt()'
Description: 'Returns the element at the specified index in a queue.'
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

In Dart, the **`.elementAt()`** method returns the element at the specified index in a `Queue`. This method is part of the `Queue` class under the `dart:collection` library.

## Syntax

```pseudo
queue.elementAt(index);
```

**Parameters:**

- `index`: The zero-based position of the element to be retrieved.

**Return value:**

Returns the element at the specified `index`.

> **Note:** If the index is out of range, this method throws a `RangeError`.

## Example

The following example demonstrates the usage of the `.elementAt()` method:

```dart
import 'dart:collection';

void main() {
  Queue<int> numbers = Queue<int>();

  numbers.add(10);
  numbers.add(20);
  numbers.add(30);
  numbers.add(40);

  print("Element at index 0: ${numbers.elementAt(0)}");
  print("Element at index 2: ${numbers.elementAt(2)}");
}
```

The output for the above code is as follows:

```shell
Element at index 0: 10
Element at index 2: 30
```
