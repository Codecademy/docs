---
Title: '.remove()'
Description: 'Removes the specified key and its associated value from a map.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the `.remove()` method removes the specified key and its associated value from a map. If the key-value pair is removed, it returns the value associated with the removed key. Otherwise, it returns `null` and the map remains unchanged.

## Syntax

```pseudo
map_name.remove(key)
```

- `map_name`: The name of the map to be checked.
- `key`: The entry key to be removed from the map.

## Example

In the following example, the `.remove()` method is used to remove en entry with the key `c` from a map:

```dart
void main() {
  Map<String, int> myMap = {'a': 1, 'b': 2, 'c': 3};
  print('Original Map: $myMap');

  // Removing an entry with the key 'c' from the map
  myMap.remove('c');
  print('Map after removing the entry with the key "c": $myMap');
}
```

Here is the output for the above example:

```shell
Original Map: {a: 1, b: 2, c: 3}
Map after removing the entry with the key "c": {a: 1, b: 2}
```
