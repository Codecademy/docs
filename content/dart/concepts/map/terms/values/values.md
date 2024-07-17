---
Title: '.values'
Description: 'Returns an iterable object containing all the values in a specified Map.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Map'
  - 'Values'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.values`** property is used to return an [iterable](https://www.codecademy.com/resources/docs/dart/iterable) object containing all the values in a specified `Map`.

## Syntax

```pseudo
newMap.values
```

- `newMap`: The `Map` to be iterated.

## Example

The following example demonstrates the usage of the `.values` property:

```dart
void main() {
  // Creating a Map
  var players = {'Cricket': 'Sam', 'Football': 'Chris', 'Tennis': 'Roger'};

  // Extracting all the values in the Map
  print(players.values);
}
```

The above code produces the following output:

```shell
(Sam, Chris, Roger)
```
