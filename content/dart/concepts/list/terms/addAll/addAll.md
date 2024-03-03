---
Title: '.addAll()'
Description: 'Adds multiple elements from a list.'
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

The **`.addAll()`** method in Dart allows appending multiple elements from one list to another. This method is useful to combine the contents of multiple lists into a single list. This method does not create a new list but rather modifies the original list.


## Syntax

```pseudo
list1.addAll(list2);
```

- `list1`: The list in which another list is to be added.
- `list2`: The list to be added to list1.

## Example

This code demonstrates the usage of the `.addAll()` method in Dart. It appends different lists to existing lists. The first example appends a list `[4, 5, 6]` to an existing list `nums`. The second example combines the lists `otherNumbers` and `extraNumbers` and appends them to the `numbers` list. The third example appends a list `additionalElements` to a fixed length list `nonGrowableList`.


> **Note** - The `.addAll()` method only works on a growable list. If the list is a fixed-length list, it throws an `Unsupported operation` error and retains all objects.


```dart
void main() {
    final nums = <int>[1, 2, 3];
    //Appends the list at the end of the nums list.
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
