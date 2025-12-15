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

In Dart, the **`.addEntries()`** method adds multiple key-value pairs to an existing `Map` using an iterable of `MapEntry` objects. It’s useful for inserting several entries at once, such as when transforming lists into maps or merging data.

## Syntax

```pseudo
mapVariable.addEntries(iterableOfMapEntries)
```

**Parameters:**

- `iterableOfMapEntries`: An iterable of `MapEntry<K, V>` objects, where `K` and `V` match the map’s key and value types.

**Return value:**

- `void`: The method does not return anything; it modifies the existing map in place.

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

The output of this code is as follows:

```shell
{Apples: 5, Bananas: 3, Oranges: 4, Grapes: 10}
```
