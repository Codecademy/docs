

---
Title: 'List.remove()'
Description: 'Removes first occurrence of a value from the list.'
Subjects:
  - 'Andriod Development'
  - 'Dart'
Tags:
  - 'List'
  - 'Remove'
  - 'Method'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **List.remove()** is an abstract method to remove the first occurence of an item from the list and return bool `true` if the item is present and is successfully removed, otherwise return bool `false` if the item is not present. The list must be growable list.

## Syntax

```pseudo
List.remove(Object value)

```

- `List`: The value or variable of the List type to be modified.
- `Object value`: Specifies a value to be removed from the List.

## Example

In the following example, the remove method is used to delete the first occurence of value `1` from `list` variable:

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

It will produce the following output −
```pseudo
Original list : [2, 1, 3, 5, 1, 7]
Return value of remove function : true
New list : [2, 3, 5, 1, 7]
Return value of remove function : false
New list : [2, 3, 5, 1, 7]
```


