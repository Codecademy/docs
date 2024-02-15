---
Title: '.addAll()'
Description: 'Adds multiple objects from a list.'
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

The **`.addAll()`** method in Dart which allows you to append multiple elements from one list to another list. This method is useful when you want to combine the contents of multiple lists into a single list. This method does not create a new list rather modifies the original list.

## Syntax

```pseudo
list1.addAll(list2);
```

## Example

The `.addAll()` method only works on a growable list. If the list is a fixed-length list, then it throws an `Unsupported operation` error and retains all objects in the list.

```dart
void main() {
    final nums = <int>[1, 2, 3];
    //Appends the list at the end of nums list.
    nums.addAll([4, 5, 6]);
    print(nums);

    List<int> numbers = [1, 2, 3];
    Set<int> otherNumbers = {4, 5, 6};
    List<int> extraNumbers = [7, 8, 9];
    //Appends the otherNumbers and extraNumber at the end of numbers list.
    numbers.addAll([...otherNumbers, ...extraNumbers]);
    print(numbers);

    List<int> nonGrowableList = List<int>.filled(3, 0);
    List<int> additionalElements = [4, 5, 6];
    //Appending a list at the end of a fixed length list
    nonGrowableList.addAll(additionalElements);
    print(nonGrowableList);
}
```

The output of the above code is:

```shell
[1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
Uncaught Error: Unsupported operation: addAll
```
