---
Title: '.removeAt()'
Description: 'Removes the object at a specified index from the list'
Subjects:
  - 'Mobile Development'
  - 'Web Development'
  - 'Code Foundations'
Tags:
  - 'Arrays'
  - 'Collections'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.removeAt()`** method in Dart removes an object at a specified index from a list. The remaining elements in the list are shifted to fill the gap.

## Syntax

```pseudo
E removeAt(int index)
```

- `index`: The index of the object to be removed.

> **Note:** The index must be in the range, 0 ≤ index < length of list.

## Example

```dart
void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  print("Original list: $numbers");

  int removedValue = numbers.removeAt(2);
  print("Removed element: $removedValue");
  print("Updated list: $numbers");
}
```

The output of the above code is:

```shell
Original list: [1, 2, 3, 4, 5]
Removed element: 3
Updated list: [1, 2, 4, 5]
```
