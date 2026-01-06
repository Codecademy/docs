---
Title: '.removeWhere()'
Description: 'Removes all key–value pairs from a Map that satisfy a given condition.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Map'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.removeWhere()`** method removes key–value pairs from a `Map` when a given condition evaluates to `true`. The condition is provided as a function that is applied to each key and value in the map.

## Syntax

```pseudo
map.removeWhere((key, value) => condition);
```

**Parameters:**

- `key`: The current key in the map.
- `value`: The value associated with the key.
- `condition`: A function that returns `true` for entries that should be removed.

**Return value:**

The `.removeWhere()` method returns `void`. The map is modified in place.

## Example: Removing entries based on a condition

In this example, entries with scores below 60 are removed from the map:

```dart
void main() {
  Map<String, int> scores = {
    'Alice': 85,
    'Bob': 42,
    'Charlie': 67,
  };

  // Remove entries where the score is below 60
  scores.removeWhere((name, score) => score < 60);

  print(scores);
}
```

The output of this code is:

```shell
{Alice: 85, Charlie: 67}
```
