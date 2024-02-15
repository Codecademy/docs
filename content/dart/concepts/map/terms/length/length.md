---
Title: '.length()'
Description: 'Retrieves the number of key-value pairs in a Map.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dart'
  - 'Properties'
  - 'Map'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.length()`** property is a utility for determining the number of key-value pairs contained within a Map instance. It enables developers to efficiently manage and manipulate data structures by providing a quick and reliable means of accessing the size of a Map.

## Syntax

```pseudo
Map-variable.length
```

- `Map-variable`: Represents a variable that holds a Map object.

## Example 1

In the following example, the `.length` property is used to get the key-value pairs of a Map instance that uses similar DataTypes.

```dart
void main() {
  Map<String, String> countries = {
      'USA': 'United States',
      'IRE': 'Ireland',
      'ITLY': 'Italy'
  };
  print(countries.length);
}
```
Here is the output for the example above:

```shell
3
```

## Example 2

The `.length` property can take different data types for its key-value pairs as well.

```dart
void main() {
  Map<String, int> fruits = {
      'Apple': 3,
      'Banana': 2,
      'Mango': 9
  };
  print(fruits.length);
}
```
Here is the output for the example above:

```shell
3
```

## Example 3

The `.length` property will take into account any duplicate keys and will not include them.

```dart
void main() {
  Map<String, int> fruits = {
      'Apple': 3,
      'Banana': 2,
      'Apple': 1
  };
  print(fruits.length);
}
```
Here is the output for the example above:

```shell
2
```
