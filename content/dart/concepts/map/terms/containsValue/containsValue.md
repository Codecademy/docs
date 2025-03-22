---
Title: '.containsValue()'
Description: 'Checks if a particular value is present in a map.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Map'
  - 'Values'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.containsValue()`** method is used to check if a particular value is present in a `Map`. If the value exists, the method returns `true`. Otherwise, it returns `false`.

## Syntax

```pseudo
newMap.containsValue(val)
```

- `newMap`: The `Map` to be checked.
- `val`: The value to be searched for.

## Example

The following example demonstrates the usage of the `.containsValue()` method:

```dart
void main() {
  // Creating a Map
  Map newMap = {1: 'Cricket', 2: 'Football', 3: 'Tennis'};

  // Checking if 'Tennis' exists in the Map
  print(newMap.containsValue('Tennis'));
}
```

The above code produces the following output:

```shell
true
```
