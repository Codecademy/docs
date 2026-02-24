---
Title: '.isNotEmpty'
Description: 'Returns true if the queue is not empty.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Queue'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.isNotEmpty`** property checks whether a `Queue` contains one or more elements. It returns `true` if the queue has at least one element and `false` if the queue is empty. This property is commonly used in conditional logic before accessing or removing elements from a queue.

## Syntax

```pseudo
queue.isNotEmpty
```

**Parameters:**

- This property takes no parameters.

**Return value:**

Returns a boolean value:

- `true` if the queue contains at least one element
- `false` if the queue is empty

## Example 1: Checking Queue State

This example demonstrates how `.isNotEmpty` can be used to verify whether a queue has elements before performing operations on it:

```dart
import 'dart:collection';

void main() {
  Queue<int> numbers = Queue();

  numbers.add(10);
  numbers.add(20);

  print(numbers.isNotEmpty);
}
```

The output of this code is:

```shell
true
```

## Example 2: Using `.isNotEmpty` in a Loop

This example shows how `.isNotEmpty` can be used to safely process and remove elements from a queue until it becomes empty:

```dart
import 'dart:collection';

void main() {
  Queue<String> tasks = Queue();

  tasks.addAll(['Task A', 'Task B', 'Task C']);

  while (tasks.isNotEmpty) {
    print('Processing ${tasks.removeFirst()}');
  }
}
```

The output of this code is:

```shell
Processing Task A
Processing Task B
Processing Task C
```

This pattern ensures that elements are only removed while the queue contains items, preventing runtime errors.
