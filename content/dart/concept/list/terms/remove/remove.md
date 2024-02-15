---
Title: '.remove()'
Description: 'Removes first occurrence of a value from the list.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Functions'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.remove()`** is a method to remove the first occurrence of an item from the list and return bool `true` if the item is present and is successfully removed, otherwise return bool `false` if the item is not present.

> **Note:** The list must be a growable list.

## Syntax

```pseudo
List.remove(value)
```

- `List`: The value or variable of the List type to be modified.
- `value`: Specifies a value to be removed from the List.

## Example

In the following example, the `.remove()` method is used to delete the first occurrence of value `1` from `list` variable:

```dart
void main() {
	List list = [2, 1, 3, 5, 1, 7];
	print('Original list : ${list}');
	bool retValue = list.remove(1);
	print('Return value of remove function : ${retValue}');
	print('New list : ${list}');
	retValue = list.remove(4);
	print('Return value of remove function : ${retValue}');
        print('New list : ${list}');
}
```

The above code will produce the following output:

```shell
Original list : [2, 1, 3, 5, 1, 7]
Return value of remove function : true
New list : [2, 3, 5, 1, 7]
Return value of remove function : false
New list : [2, 3, 5, 1, 7]
```
