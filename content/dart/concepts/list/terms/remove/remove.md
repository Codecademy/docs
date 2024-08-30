---
Title: '.remove()'
Description: 'Removes the first occurrence of a value from a list.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.remove()`** method is used to remove the first occurrence of an item from a list. It returns `true` if the item is present and is successfully removed. if the item is not present, it returns `false`.

> **Note:** The list must be a growable list.

## Syntax

```pseudo
list.remove(value)
```

- `list`: The name of the list to be modified.
- `value`: The value to be removed from the list.

## Example

In the following example, the `.remove()` method is used to delete the first occurrence of the value `1` from the `list` variable:

```dart
void main() {
  List list = [2, 1, 3, 5, 1, 7];
  print('Original list : ${list}');
  bool retValue = list.remove(1);
  print('Return value of remove function : ${retValue}');
  print('New list : ${list}');
  retValue = list.remove(4);
  print('Return value of remove function : ${retValue}');
  print('New list : ${list}');
}
```

The above code will produce the following output:

```shell
Original list : [2, 1, 3, 5, 1, 7]
Return value of remove function : true
New list : [2, 3, 5, 1, 7]
Return value of remove function : false
New list : [2, 3, 5, 1, 7]
```
