---
Title: '.retainWhere()'
Description: 'Retains only the elements that satisfy a given condition.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.retainWhere()`** method removes all elements from a `Queue` that do not satisfy the given condition, keeping only the elements for which the condition returns `true`.

## Syntax

```pseudo
queue.retainWhere(test)
```

**Parameters:**

- `test` (bool Function(E element)): A function that returns `true` for elements that should be retained in the queue.

**Return value:**

Returns `void`. The original queue is updated by retaining only the matching elements.

## Example: Retaining elements in a queue based on a condition

In this example, a queue is created and populated with integers. The `.retainWhere()` method is then used to keep only the elements that are less than 4:

```dart
import 'dart:collection';

void main() {
  Queue<int> example_queue = Queue<int>();

  example_queue.addAll([1, 3, 5, 2, 0]);

  // Keep elements less than 4
  example_queue.retainWhere((element) => element < 4);

  print("The queue with the correct numbers is: $example_queue");
}
```

The above code will give the following output:

```shell
The queue with the correct numbers is: {1, 3, 2, 0}
```
