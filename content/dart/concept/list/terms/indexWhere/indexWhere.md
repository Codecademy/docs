---
Title: '.indexWhere()'
Description: 'The indexWhere() method is used to find the index of an element in a list.' 
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'dart'
  - 'list'
  - 'methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.indexWhere()`** method is for find the index of the first element in a list that fulfill a given condition.

## Syntax

```pseudo
int indexWhere(bool Function(S) demo)
```
  - `int` is the return type of the method.
  - `indexWhere` name of the method.
  - `bool Function(S) demo` it's a function that takes an element of type S as input and returns a boolean value.
  - `S` is a generic type parameter and it represents the type of elements contained in the list. For example if you have a `List<String>`, `T` would be replaced with String.
  - `bool` specifies the return type. In this example it indicates that the function should return a boolean value. Function will return true if the condition is satisfied, false if the function is not fulfilled.

## Example

In this example we are using arrow function syntax for one-liner conditions:

```
void main() {
  List<int> numbers = [10, 20, 30, 40, 50];

  int index = numbers.indexWhere((element) {
    return element % 2 == 0;
  });
  print('Index of the first even number: $index'); // Output: Index of the first even number: 1
}
```