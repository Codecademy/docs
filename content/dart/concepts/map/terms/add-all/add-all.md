---
Title: '.addAll()'
Description: 'Adds all key-value pairs from another `Map` into the current map.'
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

`mapVariable` is the `Map` object to which new key–value pairs will be added.

**Parameters:**

- `otherMap`: A map whose key–value pairs are added to `mapVariable`. If a key already exists, its value is overwritten.

**Return value:**

This method returns `void`. The original map is modified in place.

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

The output of this code is as follows:

```shell
{Apples: 5, Bananas: 3, Oranges: 4, Grapes: 10}
```
