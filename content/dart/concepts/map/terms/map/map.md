---
Title: '.map()'
Description: 'Creates a new map by transforming each key–value pair of an existing map using a provided function.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Dart'
  - 'Data Structures'
  - 'Map'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.map()`** method creates a new map by transforming each key–value pair of an existing map using a provided function.

## Syntax

```pseudo
myMap.map((key, value) => MapEntry(newKey, newValue))
```

Here, `myMap` is the map whose entries are to be transformed.

**Parameters:**

- A function that takes two arguments:
  - `key`: The key from the original map.
  - `value`: The value associated with that key.
- The function must return a `MapEntry`, which defines the key–value pair in the new map.

**Return value:**

The `.map()` method returns a new `Map` containing the transformed key–value pairs.

> **Note:** The original map remains unchanged.

## Example 1

In the following example, the `.map()` method is used to create a new map by increasing each value by 1:

```dart
void main() {
  Map<String, int> myMap = {
    'a': 1,
    'b': 2,
    'c': 3
  };

  print('Original Map: $myMap');

  // Using .map() to increase each value by 1
  Map<String, int> newMap = myMap.map(
    (key, value) => MapEntry(key, value + 1)
  );

  print('New Map after using .map(): $newMap');
}
```

Here is the output for the above example:

```shell
Original Map: {a: 1, b: 2, c: 3}
New Map after using .map(): {a: 2, b: 3, c: 4}
```

## Example 2

In the following example, the `.map()` method is used to convert all values in a map to uppercase:

```dart
void main() {
  Map<String, String> myMap = {
    'x': 'apple',
    'y': 'banana',
    'z': 'cherry'
  };

  print('Original Map: $myMap');

  // Using .map() to convert values to uppercase
  Map<String, String> newMap = myMap.map(
    (key, value) => MapEntry(key, value.toUpperCase())
  );

  print('New Map after using .map(): $newMap');
}
```

Here is the output for the above example:

```shell
Original Map: {x: apple, y: banana, z: cherry}
New Map after using .map(): {x: APPLE, y: BANANA, z: CHERRY}
```
