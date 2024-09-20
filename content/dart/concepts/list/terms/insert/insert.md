---
Title: '.insert()'
Description: 'Inserts multiple elements into a list at a specified index.'
Subjects:
  - 'Mobile Development'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Collections'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.insert()`** method in Dart inserts an element at a specified index in a list and shifts subsequent elements to the right.

## Syntax

```pseudo
list.insert(int index, E element);
```

- `index`: The position where the element will be inserted.
- `element`: The element is the value to be added.

## Example

In the following example, the `.insert()` method is used to insert the number `3` at the second index:

```dart
void main() {
  List<int> numbers = [1, 2, 4, 5];
  print('Original list: $numbers');
  
  // Inserting the number 3 at index 2
  numbers.insert(2, 3);
  print('List after insertion: $numbers');
}
```

The output of the above example code is as follows:

```shell
Original list: [1, 2, 4, 5]
List after insertion: [1, 2, 3, 4, 5]
```
