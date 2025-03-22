---
Title: '.add()'
Description: 'Inserts a specified element to the end of a queue.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Queues'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.add()`** method is used to insert a specified element to the end of a queue. This method is part of the `Queue` class under the `dart:collection` library.

## Syntax

```pseudo
queue.add(element);
```

- `queue`: The name of the queue to which a value is to be inserted.
- `element`: The value to be inserted.

## Example

The following example demonstrates the usage of the `.add()` method:

```dart
import 'dart:collection';

void main() {
  Queue values = new Queue();

  values.add(12);
  values.add(24);
  values.add(36);
  values.add(48);

  for(var num in values) {
    print(num);
  }
}
```

The output for the above code is as follows:

```shell
12
24
36
48
```
