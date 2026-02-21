---
Title: '.isNotEmpty'
Description: 'Returns true if a Map contains one or more key-value pairs.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Map'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.isNotEmpty`** property is used to check whether a `Map` contains at least one key-value pair. It returns `true` if the map has one or more entries, and `false` if the map is empty.

This property is commonly used in conditional checks to ensure a map has data before accessing or processing its contents.

## Syntax

```pseudo
map.isNotEmpty
```

**Parameters:**

This property does not take any parameters.

**Return value:**

Returns a boolean value:

- `true`: The map contains one or more key-value pairs.
- `false`: The map contains no key-value pairs.

## Example: Checking for Entries Before Iterating Over a Map

This example demonstrates how `.isNotEmpty` can be used to iterate over a map only when it contains data. It also shows how the property behaves when applied to an empty map:

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

The output of this code is:

```shell
US -> United States
IN -> India
false
```
