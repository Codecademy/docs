---
Title: '.parse()'
Description: 'Converts a string representation of data into a specified data type.'
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
dataType.parse(string)
```

The above syntax `dataType.parse(string)` represents a method call in Dart that converts the string `string` into the specified data type `dataType`.

## Example

In the following example, the `.parse()` method is used to convert the string `42` into an `int` and another string `3.14` into a `double`:

```dart
void main() {
  String numberAsString = '42';
  String doubleAsString = '3.14';

  int number = int.parse(numberAsString);
  double doubleNumber = double.parse(doubleAsString);

  print(number);
  print(doubleNumber);
}
```

This results in the following output:

```shell
42
3.14
```