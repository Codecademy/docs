---
Title: '.contains()'
Description: 'Checks if a specified element is present in the queue.'
Subjects:
 -'Code foundations'
 -'Computer science'
Tags:
 -'Dart'
 -'Concepts'
 -'Queue'
CatalogContent:
 -'learn-dart'
 -'paths/computer-science'
---

The **`.contains()`** method in Dart checks if a specified element is present in the given queue. 

## Syntax


```pseudo
bool contains(Object element)
```

- `element`: It is the object that needs to be checked in the queue.

## Example 1

```dart
import 'dart:collection';

void main() {
  var queue = Queue();
  queue.addAll([1, 2, 3, 4, 5]);
  print(queue.contains(3)); 
}
```

This method returns `true` if the element is found in the queue, otherwise it returns `false`.

## Example 2

```dart
import 'dart:collection';

void main() {
  var names = Queue<String>();
  names.addAll(['Alice', 'Bob', 'Charlie', 'David']);
  print(names.contains('Bob')); 
}
```
In this example, we first add a collection of names to the queue and then use the '.contains()' method to check if the name 'Bob' is present in the queue. The method will return `true` in this case because 'Bob' is indeed present in the queue.






