---
Title: '.remove()'
Description: 'Removes the first occurrence of an element from a queue.'
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

The **`.remove()`** method in Dart is used to remove the first occurrence of a specified element from a queue, if it exists.

## Syntax

```pseudo
void remove(Object? value)
```

- `value`: The element to be removed from the queue.

## Example

In the following example, the element `3` is removed from the queue using the `.remove()` method:

```dart
import 'dart:collection';

void main() {
  // Creating a Queue
  Queue<int> queue = Queue.from([1, 2, 3, 4, 5]);

  // Outputting the original queue
  print('Original Queue: $queue');

  // Removing an element from the queue
  queue.remove(3);

  // Outputting the modified queue
  print('Modified Queue after removing 3: $queue');
}

```

The above code will result in the following output:

```shell
Original Queue: Queue[1, 2, 3, 4, 5]
Modified Queue after removing 3: Queue[1, 2, 4, 5]
```

In this example, the element *3* is removed from the queue using the `.remove()` method.
