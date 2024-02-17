---
Title: '.any()'
Description: 'Checks if at least one item satisfies the given condition.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Dart'
  - 'Lists'
  - 'Development'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **.any()** method checks if any element meets the specified condition, returning `true` if so.

## Syntax

```pseudo
list.any(function)
```
`iterable`: A collection of items (e.g., list, set) to examine, which must support iteration.

`(element) => condition`: A function passed to the `.any()` method, that evaluates each iterable item against a condition, returning `true` upon finding the first match or `false` if no match is found after reviewing all items.

`function` refers to te

## Example

In this example, the `.any()` methods verifies if one of the items in the List contains the word `Codecademy`.

```dart
void main() {
  List items = ['Paris', 'Dublin', 'Tokyo', 'Milan', 'Codecademy'];
  // using any()
  // verify if any of the items in the list contains codecademy
  if (items.any((item) => item.contains('Codecademy'))) {
    // print result; if true
    print('At least one item contains "Codecademy"');
  } else {
    // print result; if false
    print('No items contains "Codecademy"');
  }
}
```

Output
```shell
At least one item contains "Codecademy"
```