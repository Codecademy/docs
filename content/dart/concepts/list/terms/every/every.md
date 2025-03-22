---
Title: '.every()'
Description: 'eturns a boolean value based on whether all elements in the collection satisfy the given condition.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Classes'
  - 'Dart'
  - 'Data'
  - 'Objects'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.every()`** method iterates through each element in the [list](https://www.codecademy.com/resources/docs/dart/list) and returns a boolean value indicating whether all elements satisfy the given condition.

## Syntax

```pseudo
list.every((e) => condition)
```

- `list`: The collection (such as a `List`) on which the `.every()` method is called. This is the list that will be checked against the given condition.
- `e`: Represents each individual element in the list.
- `condition`: The condition that each element is tested against. This is a boolean expression or function that determines whether the `.every()` method should return `true` or `false`.

## Example

The following example shows how `.every()` method works:

```dart
void main() {
  // Define a list of integers
  List<int> numbers = [2, 4, 6, 8];

  // Use the .every() method to check if all elements in the list are even
  // The lambda function (e) => e % 2 == 0 returns true if the element is even
  bool allEven = numbers.every((e) => e % 2 == 0);

  // Print the result: "Are all elements even: true"
  print("Are all elements even: $allEven");
}
```

The output for the above code will be:

```shell
Are all elements even: true
```
