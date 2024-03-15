---
Title: '.removeWhere()'
Description: 'Removes values in a list that meet the given condition.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Dart'
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.removeWhere()`** method removes elements from a list, based on a given condition that is provided as an argument.

## Syntax

```pseudo
void removeWhere(bool Function(E element))
```

- `Function (element E)`: It defines the condition for removal. If the function evaluates to`true` for a value in the list, then the value is removed from the list.

## Example

This example demonstrates using `.removeWhere()` to remove even numbers from a list, resulting in a list of odd numbers.

```dart
void main() {
  List<int> numbers = [1,2,3,4,5,6,7,8,9,10];
  numbers.removeWhere((int number) => number % 2 ==0);
  print(numbers);
}
```

The above code will return the following output:

```shell
[1, 3, 5, 7, 9]
```

