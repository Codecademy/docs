---
Title: 'clear()'
Description: 'Removes all objects from the list; the length of the list becomes zero.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Arithmetic'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`clear()`** method in Dart is used to remove all elements from a List, leaving an empty list in its place. This method is handy when you need to reset or clear the contents of a List, making it ready for new data.

This method does not return any value.

## Syntax

```pseudo
listName.clear();
```

## Example

The `clear()` method only works on a growable list and throws an `Unsupported operation Error`, and retains all objects in the list, if the list is a fixed-length list.

```dart
void main() {
  
  final growableList = List<int>.filled(3, 1, growable: true);  //Creates a growable list with 3 elements with a default value of each element set to 1.
  print(growableList);
  print(growableList.length); //length = 3

  growableList.clear(); //Clears all objects from the growable list

  print(growableList);
  print(growableList.length); //length = 0
  
  final fixedList = List<int>.filled(3, 3, growable: false); //false is the default value for growable in list.filled constructor.
  print(fixedList);
  fixedList.clear();  //Throws an error for fixed list
}
```

The Output of the above code is:

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
>* The `clear()` method modifies the original list and does not create a new list.
>* After calling `clear()`, the list will have a length of 0.
>* If the list is already empty, calling `clear()` has no effect.
>* If the list is a fixed list, calling `clear()` will throw an error.
