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

In Dart, the **`.isEmpty`** property is used to check if a `Map` contains no key-value pairs. It evaluates to `true` when the map’s length is zero and `false` otherwise.

## Syntax

```pseudo
map.isEmpty
```

**Parameters:**

This property takes no parameters.

**Return value:**

Returns a boolean value:

- `true` if the map contains no key–value pairs
- `false` if the map contains one or more entries

## Example 1: Checking if a Map Is Empty

In this example, `.isEmpty` is used to check the state of an empty map and a populated map:

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

## Example 2: Using .isEmpty in a Conditional Check

In this example, `.isEmpty` controls program flow by checking whether a map contains data before accessing it:

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
