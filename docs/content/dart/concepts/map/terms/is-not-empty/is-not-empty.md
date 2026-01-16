---
title: .isNotEmpty
description: "Checks whether a Dart Map contains at least one key-value pair."
keywords: [dart, map, collection, isNotEmpty, term]
---

**Checks whether a Dart `Map` contains at least one key-value pair.**

## Introduction

In Dart, the `.isNotEmpty` property is used to determine whether a `Map` contains one or more entries. It returns a boolean value: `true` if the map has at least one key-value pair, and `false` if the map is empty.

This property is commonly used to guard against performing operations—such as iteration or value access—on empty maps, improving code safety and readability.

---

## Syntax

```dart
map.isNotEmpty
```

## Example

```dart
void main() {
  Map<String, String> countryCodes = {
    'US': 'United States',
    'IN': 'India',
  };

  if (countryCodes.isNotEmpty) {
    countryCodes.forEach((code, country) {
      print('$code -> $country');
    });
  } else {
    print('The map is empty.');
  }

  Map<String, int> emptyMap = {};

  print(emptyMap.isNotEmpty); // false
}

```
## Tip

Use `.isNotEmpty` instead of `map.length > 0` for clearer intent and better readability.

## See also

- .isEmpty — Checks whether a map contains no entries

- .length — Returns the number of entries in a map