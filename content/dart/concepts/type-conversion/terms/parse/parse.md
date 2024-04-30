---
Title: '.parse()'
Description: 'Converts a value from a string to a specified data type.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Data Types'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.parse()`** method is used to convert a value from a string to a specified [data type](https://www.codecademy.com/resources/docs/dart/data-types), such as an `int` or a `double`.

## Syntax

```pseudo
int.parse(string)
double.parse(string)
```

The `int.parse()` method converts a string to an integer, while `double.parse()` converts a string to a double.

## Example

The following example demonstrates the usage of `int.parse()` and `double.parse()` to convert strings into numeric values:

```dart
void main() {
  String numberAsString = '42';
  String doubleAsString = '3.14';

  int number = int.parse(numberAsString);
  double doubleNumber = double.parse(doubleAsString);

  print(number); // Output: 42
  print(doubleNumber); // Output: 3.14
}
```

In this example, we use `int.parse()` to convert the string `'42'` into an integer and `double.parse()` to convert the string `'3.14'` into a double.

This results in the following output:

```shell
42
3.14
```