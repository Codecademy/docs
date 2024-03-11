---
Title: '.keys'
Description: 'Returns an iterable collection that contains all the keys present in a map.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Data Structures'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.keys`** property returns an iterable collection that contains all the keys present in a map.

## Syntax

```pseudo
myMap.keys
```

- `myMap`: The name of the map that needs to be searched.

## Example

The following example displays the usage of the `.keys` property:

```dart
void main() {
  Map<String, String> adventurers = {
    '001': 'Alice the Archer',
    '002': 'Bob the Barbarian',
    '003': 'Charlie the Cleric'
  };

  for (var id in adventurers.keys) {
    print(id);
  }
}
```

The above example produces the following output:

```shell
001
002
003
```
