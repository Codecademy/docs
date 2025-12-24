---
Title: '.isEmpty'
Description: 'Checks if a Map contains no key-value pairs.'
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

In Dart, the **`.isEmpty`** property is used to check if a `Map` contains no key-value pairs. If the map is empty, the property returns `true`. Otherwise, it returns `false`.

## Syntax

```pseudo
map.isEmpty
```

- `map`: The `Map` is object.
- 

## Example

The following example demonstrates the usage of the `.isEmpty` property:

```dart
void main() {
  // Creating an empty Map
  Map<String, int> emptyCart = {};

  // Creating a Map with items
  Map<String, int> fruitCart = {'Apple': 3, 'Banana': 5};

  // Checking if the maps are empty
  print(emptyCart.isEmpty);
  print(fruitCart.isEmpty);
}
```

The above example produces the following output:

```shell
true
false
```

The `.isEmpty` property can also be used in conditional statements:

```dart
void main() {
  Map<String, String> userInfo = {};

  if (userInfo.isEmpty) {
    print('No user data available.');
  } else {
    print('User data found.');
  }
}
```

The above example produces the following output:

```shell
No user data available.
```
