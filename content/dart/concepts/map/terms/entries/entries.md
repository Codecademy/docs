---
Title: '.entries'
Description: 'Returns an iterable view of all key-value pairs in a map as MapEntry objects.'
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

In Dart, the **`.entries`** property returns an iterable view of a `Map`’s contents, where each element is a `MapEntry` containing a key and its corresponding value. This property is useful when both keys and values need to be accessed together during iteration.

## Syntax

```pseudo
myMap.entries
```

**Parameters:**

This property takes no parameters.

**Return value:**

Returns an `Iterable<MapEntry<K, V>>`, where each `MapEntry` represents a key–value pair from the map.

## Example 1: Iterating over keys and values together

In this example, `.entries` is used to iterate through a map and access both the key and value for each entry:

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
