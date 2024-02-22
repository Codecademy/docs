---
Title: '.indexOf()'
Description: 'Returns the first occurrence of the given element in a list.'
Subjects: 
 - 'Computer Science'
 - 'Web Development'
Tags:
 - 'Dart'
 - 'Methods'
 - 'Lists'
 - 'Index'
CatalogContent:
 - 'learn-dart'
 - 'paths/computer-science'
---

In Dart, the **`.indexOf()`** method returns the first occurrence of the given element in a list. If the element is not found, the method will return `-1`.

## Syntax

```pseudo
list_name.indexOf(element);
```

- `list_name`: The name of the list where the element is searched.
- `element`: The value whose index is searched for in the list.

## Example

Here is an example of the `.indexOf()` method:
  
```dart
void main() {
  List<String> colors = ['blue', 'yellow', 'red', 'green', 'orange', 'pink'];

  int index = colors.indexOf('red');

  print(index);
}
```

The output for the above example is as follows:

```shell
2
```
