---
Title: '.indexWhere()'
Description: 'Finds the index of the first element in a list that fulfills a given condition.' 
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'List'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.indexWhere()`** method is used to find the index of the first element in a list that fulfills a given condition. If the operation is successful, it returns the index. Otherwise, it returns `-1`.

## Syntax

```pseudo
int indexWhere(bool func(S demo))
```
  - `func`: A function that provides a condition for the `.indexWhere()` method to check.
  - `S`: The type of element that is passed to the function.
  - `demo`: The element that is passed to the function.

## Example

In this example, the `.indexWhere()` method is used to find the index of the first negative integer in a list:

```dart
void main() {
  List<int> numbers = [8, 5, 2, -3, 6];
  int index = numbers.indexWhere((number) => number < 0);
  if (index != -1) {
    print('Index of the first negative integer: $index');
  } else {
    print('No negative integers found.');
  }
}
```

The above example returns the following output:
```shell
Index of the first negative integer: 3
```