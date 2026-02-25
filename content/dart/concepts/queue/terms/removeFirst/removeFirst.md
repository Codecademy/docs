---
Title: '.removeFirst()'
Description: 'Removes and returns the first element from a queue.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.removeFirst()`** method in Dart is used to remove and return the first element from a queue.

## Syntax

```pseudo
E removeFirst()
```

- `E`: The type of elements in the queue.

**Note:** Calling this method on an empty queue will throw a `StateError`.

## Example

In the following example, the first element is removed from the queue using the `.removeFirst()` method:

```dart
import 'dart:collection';

void main() {
  // Creating a queue
  Queue<int> queue = Queue.from([1, 2, 3, 4, 5]);

  // Outputting the original queue
  print('Original Queue: $queue');

  // Removing the first element from the queue
  int removedElement = queue.removeFirst();
  print('Removed Element: $removedElement');

  // Outputting the modified queue
  print('Modified Queue: $queue');
}
```

The above code results in the following output:

```shell
Original Queue: {1, 2, 3, 4, 5}
Removed Element: 1
Modified Queue: {2, 3, 4, 5}
```
