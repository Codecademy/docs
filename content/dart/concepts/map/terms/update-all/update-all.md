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

```dart
map.updateAll((key, value) => newValue)
```

- `map`: The map to be updated.
- `key`: The key in each key-value pair.
- `value`: The current value associated with the key.
- `newValue`: The new value to replace the current value.

## Example

In the following example, the `.updateAll()` method is used to increase all scores by 10:

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