---
Title: '.add()'
Description: 'Appends a single element to the end of a list.'
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

The **`.add()`** method in Dart is used to append a single element to the end of a list. It modifies the original list and extends its length by one to accommodate the new element.

## Syntax

```pseudo
listName.add(element);
```

- `element`: The element to be appended to the list.

## Example

In the following example, the `.add()` method appends the string 'orange' to the end of the `fruits` list.

```dart
void main() {
  List<String> fruits = ['apple', 'banana'];
  fruits.add('orange');
  print(fruits);
}
```

The output of the above code will be:

```shell
[apple, banana, orange]
```
