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

The **`.insertAll()`** method in Dart is a built-in **List** method that allows for the insertion of multiple elements into a list at a specified index. While inserting the elements, this method shifts the existing elements as necessary to accommodate the new ones in the list. Also, the specified index should range from _0-N_, where _N_ represents the number of elements that are present in the list.

## Syntax

```pseudo
void insertAll(int index, Iterable<E> iterable)
```

- `index`: The index where the elements need to be inserted.
- `iterable`: The elements that need to be inserted.

## Example

The following example demonstrates the use of the `.insertAll()` method:

```dart
void main() {
  List<int> nums = [12, 23, 34, 45, 56];
  // Inserting elements [67, 78, 89] starting from index '2'
  nums.insertAll(2, [67, 78, 89]);
  print(nums);
}
```

Here is the output for the above example:

```shell
[12, 23, 67, 78, 89, 34, 45, 56]
```
