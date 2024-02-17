---
Title: '.elementAt()'
Description: 'Accesses the element at a specific index in a list.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the `.elementAt()` method is used to access the element at a specific index in a list. The index needs to be a non-negative integer that's smaller than the length of the list.

## Syntax

```pseudo
list.elementAt(index);
```

- `list`: The list that needs to be searched.
- `index`: The index that needs to be accessed.

## Example

Here is an example that demonstrates the use of the `.elementAt()` method:

```dart
void main() {
  List nums = ['11', '22', '33', '44', '55'];

  // Using the .elementAt() method to access the element at nums[2]
  var num = nums.elementAt(2);

  print('The element at nums[2] is: ${num}');
}
```

The output for the above example is:

```shell
The element at nums[2] is: 33
```
