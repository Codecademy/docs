# removeWhere()
---
Title: removeWhere()
Description: Removes elements from a Dart Queue based on a condition.
Subjects:
  - Computer Science
  - Dart
Tags:
  - Queue
  - Collection
  - Methods
CatalogContent:
  - Dart
  - Data Structures
---

## Introduction
The `removeWhere()` method removes all elements from a `Queue` that satisfy
a given condition. The condition is defined using a callback function that
returns `true` for elements that should be removed from the queue.

## Syntax
```dart
queue.removeWhere((element) => condition);

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

  print(tasks); // Output: [review pull request, fix bugs]
}
