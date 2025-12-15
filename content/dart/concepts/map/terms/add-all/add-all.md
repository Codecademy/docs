---
Title: '.addAll()'
Description: 'Adds all key-value pairs from another Map to an existing Map.'
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

In Dart, the **`.addAll()`** method adds all key-value pairs from another `Map` into an existing `Map`. This is commonly used when merging maps or inserting multiple entries at once.

If a key from the source map already exists in the target map, its value will be replaced by the value from the source map.

## Syntax

```pseudo
mapVariable.addAll(otherMap)
```

- `mapVariable`: The map that will receive the new entries.
- `otherMap`: A map containing key-value pairs to be added.

**Parameters:**

- `otherMap`: A `Map<K, V>` whose key and value types must match those of the target map.

**Return value:**

- `void`: This method does not return a value; it modifies the map in place.

## Example

The following example demonstrates how `.addAll()` can be used to merge two maps:

```dart
void main() {
  Map<String, int> inventory = {
    'Apples': 5,
    'Bananas': 3
  };

  Map<String, int> newItems = {
    'Oranges': 4,
    'Grapes': 10
  };

  inventory.addAll(newItems);

  print(inventory);
}
```

**Output:**

The output of this code is as follows:

```shell
{Apples: 5, Bananas: 3, Oranges: 4, Grapes: 10}
```
