---
Title: '.indexWhere()'
<<<<<<< HEAD:content/dart/concept/list/terms/indexWhere/indexWhere.md
Description: 'Finds the index of the first element in a list that fulfills a given condition.' 
=======
Description: 'The indexWhere() method is used to find the index of an element in a list.'
>>>>>>> f14bf4ca1b1079dce1d9363eb8903196759a340d:content/dart/concepts/list/terms/indexWhere/indexWhere.md
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
<<<<<<< HEAD:content/dart/concept/list/terms/indexWhere/indexWhere.md
  - `func`: A function that provides a condition for the `.indexWhere()` method to check.
  - `S`: The type of element that is passed to the function.
  - `demo`: The element that is passed to the function.
=======

- `int` is the return type of the method.
- `indexWhere` name of the method.
- `bool Function(S) demo` it's a function that takes an element of type S as input and returns a boolean value.
- `S` is a generic type parameter and it represents the type of elements contained in the list. For example if you have a `List<String>`, `S` would be replaced with String.
- `bool` specifies the return type. In this example it indicates that the function should return a boolean value. Function will return true if the condition is satisfied, false if the function is not fulfilled.
>>>>>>> f14bf4ca1b1079dce1d9363eb8903196759a340d:content/dart/concepts/list/terms/indexWhere/indexWhere.md

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
<<<<<<< HEAD:content/dart/concept/list/terms/indexWhere/indexWhere.md
Index of the first negative integer: 3
```
=======
"Index of the first negative number: 3"
```
>>>>>>> f14bf4ca1b1079dce1d9363eb8903196759a340d:content/dart/concepts/list/terms/indexWhere/indexWhere.md
