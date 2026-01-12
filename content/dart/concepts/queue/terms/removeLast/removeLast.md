---
Title: '.removeLast()'
Description: 'Removes and returns the last element from a queue.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Queues'
  - 'Data Structures'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.removeLast()`** method removes and returns the last element of a `Queue`. 
If the queue is empty, it throws a `StateError`

## Syntax

```pseudo
queue.removeLast()
```

## Example

In the following example, the element `5` is removed from the queue using the `.remove()` method:

```dart
import 'dart:collection';

void main() {
  // Create a queue
  Queue<int> queue = Queue.from([1, 2, 3, 4, 5]);

  // Output the original queue
  print('Original Queue: $queue');

  // Remove the last element from the queue
  queue.removeLast();

  // Output the modified queue
  print('Modified Queue: $queue');
}
```

The above code results in the following output:

```shell
Original Queue: {1, 2, 3, 4, 5}
Modified Queue: {1, 2, 3, 4}
```
