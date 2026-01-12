---
Title: '.last'
Description: 'Returns the last element of a collection.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'

Tags:
  - 'Collections'
  - 'Dart'
  - 'Queues'

CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **'.last'** property returns the final element in a collection, such as a 'Queue', 'List', or 'Set'.

When used on a 'Queue', it allows for quick access to the element that was most recently added, or the element at the end of the iterable sequence without removing it.

## Syntax

```pseudo
collection.last
```

## Example

The below example creates a list named 'List', appends two integer elements to it, and returns the last object in the list using the '.last' property:

```dart
import 'dart:collection';

void main() {
    var lst = new List();
    lst.add(7);
    lst.add(8);
    print("The last element of the list is: ${lst.last})
}
```

It will produce the following output:

```shell
The last element of the list is: 8
```