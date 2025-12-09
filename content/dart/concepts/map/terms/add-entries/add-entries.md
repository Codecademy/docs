---
Title: '.addEntries()'
Description: 'Adds multiple key-value pairs to an existing Map using an iterable of MapEntry objects.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dart'
  - 'Map'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.addEntries()`** method allows you to add multiple key-value pairs to an existing `Map` by providing it with an iterable of `MapEntry` objects. This is useful when inserting several entries at once, especially when transforming lists into maps or combining data from multiple sources.

## Syntax

```pseudo
mapVariable.addEntries(iterableOfMapEntries)
```

- `mapVariable`: The map you want to add entries into.
- `iterableOfMapEntries`: An iterable containing `MapEntry` objects (`MapEntry(key, value)`).

## Example

The following example demonstrates how `.addEntries()` can be used to add multiple entries to a `Map`:

```dart
void main() {
  Map<String, int> inventory = {
    'Apples': 5,
    'Bananas': 3
  };

  // Creating an iterable of MapEntry objects
  var newItems = [
    MapEntry('Oranges', 4),
    MapEntry('Grapes', 10)
  ];

  inventory.addEntries(newItems);

  print(inventory);
}
```

**Output:**

```shell
{Apples: 5, Bananas: 3, Oranges: 4, Grapes: 10}
```
