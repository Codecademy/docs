---
Title: '.every()'
Description: 'Returns a boolean value based on whether all the elements satisfy the given condition or not.'
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

The **`.every()`** method iterates through every element in the [list](https://www.codecademy.com/resources/docs/dart/list) and returns a boolean value checking all the elements in the list satisfying the given condition or not.

## Syntax

```pseudo
list.every((e) => condition)
```

- `list`: The list that will be checked against the condition given.
- `e`: Each individual element in the list.
- `condition`: The condition against which every element is tested.

## Example

The following example shows how `every()` works:

```dart
void main() {
  List<int> numbers = [2, 4, 6, 8];

  bool allEven = numbers.every((e) => e % 2 == 0);

  print("Are all elements even: $allEven");
}
```

The output for the above code:

```shell
Are all elements even: true
```
