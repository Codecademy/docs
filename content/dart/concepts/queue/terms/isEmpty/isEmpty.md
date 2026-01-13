---
Title: '.isEmpty'
Description: 'Returns true if the queue contains no elements, otherwise returns false.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Queues'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **`.isEmpty`** is a property used to check whether a `Queue` contains any elements. It returns `true` if the queue has zero elements and `false` if it contains one or more elements. This property is available on the `Queue` class from the `dart:collection` library.

## Syntax

```pseudo
queue.isEmpty
```

- `queue`: The name of the queue to check for emptiness.

**Parameters:**

This property takes no parameters.

**Return value:**

The property returns a boolean value:

- `true` if the queue contains no elements
- `false` if the queue contains one or more elements

## Example

This example shows that `.isEmpty` returns `true` for an empty queue and `false` after elements are added:

```dart
import 'dart:collection';

void main() {
  Queue values = new Queue();

  print('Is queue empty? ${values.isEmpty}');

  values.add(12);
  values.add(24);
  values.add(36);

  print('Is queue empty? ${values.isEmpty}');
  print('Number of elements: ${values.length}');

  for(var num in values) {
    print(num);
  }
}
```

The output of this code is:

```shell
Is queue empty? true
Is queue empty? false
Number of elements: 3
12
24
36
```
