---
Title: '.updateAll()'
Description: 'Updates all values in a map by applying a function to each key-value pair.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Map'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.updateAll()`** method in Dart updates all values in a map by applying a specified function to each key-value pair. The function receives both the key and its current value, and returns the new value that will replace the existing one.

## Syntax

```pseudo
map.updateAll((key, value) => newValue)
```

**Parameters:**

A function that takes two arguments:

- `key`: The current key in the map.
- `value`: The current value associated with the key.

The function must return the new value to replace the existing one.

**Return value:**

Returns `void`. The map is modified in place.

## Example

In the following example, the `.updateAll()` method increases every score in the map by 10 using a transformation function:

```dart
void main() {
  Map<String, int> scores = {
    'Alice': 80,
    'Bob': 90,
    'Charlie': 85
  };

  print('Original scores: $scores');

  // Increase all scores by 10
  scores.updateAll((name, score) => score + 10);

  print('Updated scores: $scores');
}
```

The above code produces the following output:

```shell
Original scores: {Alice: 80, Bob: 90, Charlie: 85}
Updated scores: {Alice: 90, Bob: 100, Charlie: 95}
```
