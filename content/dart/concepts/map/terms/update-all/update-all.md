---
Title: '.updateAll()'
Description: 'Updates all values in a map using a provided function.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Data Structures'
  - 'Methods'
  - 'Maps'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.updateAll()`** method updates every value in a `Map` by applying a function to each key-value pair.

## Syntax

```pseudo
map.updateAll((key, value) => newValue);
```

**Parameters:**

- `key`: The current key in the map
- `value`: The current value associated with the key
- `newValue`: The value returned by the function, which replaces the existing value

**Return value:**

Returns `void`. The original map is modified in place.

## Example 1: Updating all values in a map

In this example, `.updateAll()` is used to apply a discount to all product prices stored in a map:

```dart
void main() {
  Map<String, double> prices = {
    'Laptop': 1000.0,
    'Phone': 600.0,
    'Tablet': 400.0
  };

  prices.updateAll((item, price) => price * 0.9);

  print(prices);
}
```

The output of this code is:

```shell
{Laptop: 900, Phone: 540, Tablet: 360}
```

Each value in the map is passed to the update function, and the returned value replaces the original value while keeping the keys unchanged.
