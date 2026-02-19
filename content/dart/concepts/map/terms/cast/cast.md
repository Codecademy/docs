---
Title: '.cast()'
Description: 'Returns a new map with the same entries but with keys and values cast to the specified types.'
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

In Dart, the **`.cast()`** method returns a new `Map` containing the same key–value pairs as the original map, but with the specified key and value types. The returned map performs runtime type checks when reading or writing entries. If a key or value does not match the specified types, a `TypeError` is thrown.

This method is commonly used when working with dynamically typed maps that need to be treated as a map with specific types.

## Syntax

```pseudo
mapVariable.cast<NewKeyType, NewValueType>()
```

`mapVariable` is the `Map` object whose entries are cast to new types.

**Parameters:**

- `NewKeyType`: The target key type to cast the map’s keys to.
- `NewValueType`: The target value type to cast the map’s values to.

**Return value:**

Returns a new `Map<K, V>` view of the original map, where keys and values are cast to the specified types.

## Example

In this example, a dynamically typed map is cast to a `Map<String, int>` so its entries can be accessed with strong typing:

```dart
void main() {
  Map<dynamic, dynamic> rawData = {
    'Alice': 90,
    'Bob': 85,
  };

  Map<String, int> scores = rawData.cast<String, int>();

  print(scores);
}
```

The output of this code is:

```shell
{Alice: 90, Bob: 85}
```
