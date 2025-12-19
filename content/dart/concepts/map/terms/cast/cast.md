---
Title: '.cast()'
Description: 'Returns a new Map with the same entries but with different key and value types.'
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

In Dart, the **`.cast()`** method returns a new `Map` containing the same key–value pairs as the original map, but with the specified key and value types. The returned map performs type checks when accessing or modifying its entries.

This method is commonly used when working with dynamically typed maps that need to be treated as a map with specific types.

## Syntax

```pseudo
mapVariable.cast<NewKeyType, NewValueType>()
```

`mapVariable` is the `Map` object whose entries are cast to new types.

## Example

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

**Output:**

```shell
{Alice: 90, Bob: 85}
```
