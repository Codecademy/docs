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

In Dart, **`.isEmpty`** is used to check whether any collection of values (not only queue, but also Set/List/Map/etc.) is empty or not, that is - does it have 0 elements? It returns `true` if so and `false` if there's at least one element. This property is part of the `Queue` class under the `dart:collection` library.

## Syntax

```pseudo
queue.isEmpty
```

- `queue`: The name of the queue to check for emptiness.

The property returns a boolean value:
- `true`: The queue contains no elements.
- `false`: The queue contains one or more elements.

## Example

The following example demonstrates the usage of the `.isEmpty` property. When the Queue is freshly created, **`.isEmpty`** returns `true`. After being populated, it returns `false`.

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

Output for the above:

```shell
Is queue empty? true
Is queue empty? false
Number of elements: 3
12
24
36
```

