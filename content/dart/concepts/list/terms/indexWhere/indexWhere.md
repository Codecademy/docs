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
- `S` is a generic type parameter and it represents the type of elements contained in the list. For example if you have a `List<String>`, `S` would be replaced with String.
- `bool` specifies the return type. In this example it indicates that the function should return a boolean value. Function will return true if the condition is satisfied, false if the function is not fulfilled.

## Example

In this example we will find index of the first negative number in a list of integers:

```cs
void main() {
  List<int> numbers = [8, 5, 2, -3, 6];

  int index = numbers.indexWhere((number) => number < 0);
  if (index != -1) {
    print('Index of the first negative number: $index');
  } else {
    print('No negative numbers found.');
  }
}
```

The code returns the fallowing output:

```shell
"Index of the first negative number: 3"
```
