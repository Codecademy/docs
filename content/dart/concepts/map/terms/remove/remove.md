---
Title: '.remove()'
Description: 'Removes the first occurrence of a specified value from the map.'
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

In Dart, the `.remove()` method removes an entry from a map using a specified key. It returns the value associated with the removed key, or null if the key doesn't exist in the map.

## Syntax

```pseudo
map_name.remove(key)
```

- `key`: The entry key to be removed from the map.

## Example

In the following example, the `.remove()` method is used to remove en entry with the key `'c'` from a map:

```dart
void main() {
  Map<String, int> myMap = {'a': 1, 'b': 2, 'c': 3};
  print('Original Map: $myMap');
  // Removing an entry from the map
  myMap.remove('c');
  print('Map after removing entry with key "c": $myMap');
}
```

Here is the output for the above code example:

```shell
Original Map: {a: 1, b: 2, c: 3}
Map after removing entry with key "c": {a: 1, b: 2}
```

With this approach, the `.remove()` method removes the entry with the key `c` from the map and prints the updated map.

> **Note** If the specified key is not found in the map, it returns `null`, and the map remains unchanged.
