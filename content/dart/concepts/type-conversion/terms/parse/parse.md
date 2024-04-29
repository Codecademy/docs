
---
Title: 'parse()'
Description: 'Converting a value from a string to a specified data type.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Type Conversion'
CatalogContent:
  - 'learn-dart'
  - 'Dart Fundamentals'
  - 'Data Type Conversion'
  - 'String Manipulation'
---
The **`parse()`** method in Dart is used to convert a string into a numeric value, such as an integer or a double.

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