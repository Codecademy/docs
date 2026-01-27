---
Title: '.removeWhere()'
Description: 'Removes all elements from a queue that satisfy a given condition.'
Subjects:
  - 'Computer Science'
  - 'Code Foundation'
Tags:
  - 'Collection'
  - 'Dart'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.removeWhere()`** method removes all elements from a `Queue` that return `true` for a specified condition. The queue is modified in place.

## Syntax

```pseudo
queue.removeWhere(test)
```

**Parameters:**

- `test` (bool Function(E element)): A function that returns `true` for elements that should be removed from the queue.

**Return value:**

This method returns `void`. The original queue is updated by removing all matching elements.

## Example: Removing elements from a queue based on a condition

In this example, `.removeWhere()` is used to remove all tasks from a queue that contain the word "write", updating the queue in place:

```dart
import 'dart:collection';

void main() {
  Queue<String> tasks = Queue.from([
    'write code',
    'review pull request',
    'fix bugs',
    'write tests'
  ]);

  // Remove all tasks that contain the word 'write'
  tasks.removeWhere((task) => task.contains('write'));

  print(tasks);
}
```

The output of this code is:

```shell
{review pull request, fix bugs}
```
