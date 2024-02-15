---
Title: '.insertAll()'
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

The **`.insertAll()`** method in Dart is a built-in **List** operation that allows for the insertion of multiple elements into a list at a specified index. While inserting the elements, this method shifts the existing elements as necessary to accommodate the new ones in the list. Also, the specified index should range from _0-N_, where _N_ represents the number of elements that are present in the list.

## Syntax

```pseudo
void insertAll(int index, Iterable<E> iterable)
```

- `index`: The index where the elements need to be inserted.
- `iterable`: The elements that need to be inserted.

## Example

```dart
void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  // Inserting elements [6, 7, 8] starting from index 2
  numbers.insertAll(2, [6, 7, 8]);

  print(numbers); // Output: [1, 2, 6, 7, 8, 3, 4, 5]
}
```
