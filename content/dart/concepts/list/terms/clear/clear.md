---
Title: '.clear()'
Description: 'Removes all objects from a list.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Arithmetic'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.clear()`** method in Dart is used to remove all objects from a list, leaving an empty list in its place. This method is handy when we need to reset or clear the contents of a list, making it ready for new data. This method does not return any value.

## Syntax

```pseudo
listName.clear();
```

## Example

The `.clear()` method only works on a growable list. If the list is a fixed-length list, then it throws an `Unsupported operation` error and retains all objects in the list.

```dart
void main() {
  // Creates a growable list with 3 elements with a default value of each element set to 1
  final growableList = List<int>.filled(3, 1, growable: true);

  print(growableList);
  print(growableList.length);

  // Clears all objects from the growable list
  growableList.clear();

  print(growableList);
  print(growableList.length);

  // 'false' is the default value for growable in 'List.filled' constructor
  final fixedList = List<int>.filled(3, 3, growable: false);

  print(fixedList);

  // Throws an error for fixed list
  fixedList.clear();
}
```

The output of the above code is:

```shell
[1, 1, 1]
3
[]
0
[3, 3, 3]
Uncaught Error: Unsupported operation: clear
```

> **Notes:**
>
> - The `.clear()` method modifies the original list and does not create a new list.
> - After calling `.clear()`, the list will have a length of 0.
> - If the list is already empty, calling `.clear()` has no effect.
> - If the list is a fixed list, calling `.clear()` will throw an error.
