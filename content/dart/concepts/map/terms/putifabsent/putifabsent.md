---
Title: '.putIfAbsent()'
Description: 'Inserts a key-value pair into a map if the key is not already present.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'map'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.putifabsent()`** method in Dart is used to insert a key-value pair into a map if the key is not already present. If the key is already present, it does nothing and returns the existing value associated with the key.

## Syntax

```pseudo
V putIfAbsent(K key, V ifAbsent())
```

- `key`: The key to check for or add to the map.
- `ifAbsent`: A function that returns the value associated with the key if it is not already in the map.

## Example

In this example, the key 'key3' is not present in the map, so the ifAbsent function () => 3 is invoked to provide the value 3. The key 'key1' and 'key2' are present so the ifAbsent function is not invoked and the existing values are returned.

```dart
void main() {
  var map = {'key1': 1, 'key2': 2};
  // 'key3' is not present, so the value 3 will be provided by the ifAbsent function
  map.putIfAbsent('key3', () => 3); // {'key1': 1, 'key2': 2, 'key3': 3}
  // 'key1' is present, so the ifAbsent function is not invoked
  map.putIfAbsent('key1', () => 5); // Notice the output stays the same {'key1': 1, 'key2': 2, 'key3': 3}
  print(map); // output {'key1': 1, 'key2': 2, 'key3': 3}
}
```

Here is the output for the above code:

```
{key1: 1, key2: 2, key3: 3}
```
