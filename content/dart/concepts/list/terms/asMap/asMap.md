---
Title: '.asMap()'
Description: 'Returns an unmodifiable map view of a list where the keys are the indices and the values are the elements.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.asMap()`** method is used to return an unmodifiable [map](https://www.codecademy.com/resources/docs/dart/map) view of a list where the keys are the indices and the values are the elements at those indices. This method is particularly useful when there is a need to work with list elements in a map-line manner, accessing them by their indices.

## Syntax

```pseudo
newList.asMap()
```

- `newList`: The name of the list on which the `.asMap()` method is called.

## Example

In this example, the `.asMap()` method is used to convert a list called `names` into a map:

```dart
void main() {
  List<String> names = ['Steve', 'Tonny', 'Jack', 'Jamie'];
  print('Original List: $names');

  // Converting the list into a map
  Map<int, String> nameMap = names.asMap();
  print('Map view of the list: $nameMap');
}
```

Here is the output for the above example:

```shell
Original List: [Steve, Tonny, Jack, Jamie]
Map view of the list: {0: Steve, 1: Tonny, 2: Jack, 3: Jamie}
```

> **Note:** The resulting map remains immutable.
