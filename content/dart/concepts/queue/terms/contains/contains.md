---
Title: '.contains()'
Description: 'Checks if a specified element is present in the queue.'
Subjects:
  - 'Code foundations'
  - 'Computer science'
Tags:
  - 'Dart'
  - 'Concepts'
  - 'Queue'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.contains()`** method in Dart checks if a specified element is present in the given queue.

## Syntax

```pseudo
bool contains(Object element)
```

- `element`: It is the object that needs to be checked in the queue.

## Example 1

In the following example, the code checks whether the `queue` contains an element `3` or not:

```dart
import 'dart:collection';

void main() {
  var queue = Queue();
  queue.addAll([1, 2, 3, 4, 5]);
  print(queue.contains(3));
}
```

The output of the above code is:

```shell
true
```

## Example 2

The following example uses the '.contains()' method to check if the name 'Bob' is present in the queue:

```dart
import 'dart:collection';

void main() {
  var names = Queue<String>();
  names.addAll(['Alice', 'Bob', 'Charlie', 'David']);
  print(names.contains('Bob'));
}
```

The output of the above is:

```shell
false
```
