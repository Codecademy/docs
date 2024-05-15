---
Title: '.addAll()'
Description: 'Adds multiple elements from one list to another.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dart'
  - 'Lists'
  - 'Elements'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.addAll()`** method in Dart is used to add multiple elements from one list to another. This method is useful for combining the contents of multiple lists into a single list. This method does not create a new list but rather, it modifies the original list.

## Syntax

```pseudo
list1.addAll(list2);
```

- `list1`: The list to which another list is to be added.
- `list2`: The list to be added to `list1`.

## Example

In the following example, there are three operations that are carried out using the `.addAll()` method:

- The first operation appends a list `[4, 5, 6]` to an existing list `nums`.
- The second operation combines the lists `otherNumbers` and `extraNumbers` and appends them to the `numbers` list.
- The third operation appends a list `additionalElements` to a fixed-length list `nonGrowableList`.

Here is the example demonstrating the usage of the `.addAll()` method in Dart:

```dart
void main() {
  final nums = <int>[1, 2, 3];
  //Appends the list to the end of the 'nums' list
  nums.addAll([4, 5, 6]);
  print(nums);

  List<int> numbers = [1, 2, 3];
  Set<int> otherNumbers = {4, 5, 6};
  List<int> extraNumbers = [7, 8, 9];

  //Appends the lists 'otherNumbers' and 'extraNumbers' to the end of the 'numbers' list.
  numbers.addAll([...otherNumbers, ...extraNumbers]);
  print(numbers);

  List<int> nonGrowableList = List<int>.filled(3, 0);
  List<int> additionalElements = [4, 5, 6];

  //Appends a list to the end of a fixed-length list
  nonGrowableList.addAll(additionalElements);
  print(nonGrowableList);
}
```

The output for the above code is:

```shell
[1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
Uncaught Error: Unsupported operation: addAll
```

> **Note** - The `.addAll()` method only works on a growable list. If the list is a fixed-length list, it throws an `Unsupported operation` error and retains all objects.
