---
Title: '.entries'
Description: 'Returns an iterable collection containing all key-value pairs as MapEntry objects in a map.'
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

In Dart, the **`.entries`** property returns an iterable collection containing all key-value pairs as `MapEntry` objects in a map. This allows you to iterate over both keys and values together.

## Syntax

```pseudo
myMap.entries
```

- `myMap`: The map name that needs to be iterated.

## Example

The following example demonstrates the usage of the `.entries` property:

```dart
void main() {
  Map<String, int> scores = {
    'Alice': 95,
    'Bob': 87,
    'Charlie': 92
  };

  for (var entry in scores.entries) {
    print('${entry.key}: ${entry.value}');
  }
}
```

The above example produces the following output:

```shell
Alice: 95
Bob: 87
Charlie: 92
```
