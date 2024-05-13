---
Title: '.toStringAsFixed()'
Description: 'Converts a numeric value into a string representation'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dart'
  - 'Data Types'
  - 'Methods'
  - 'Numbers'
  - 'Strings'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **`.toStringAsFixed()`** is a method used to convert numeric [data types](https://www.codecademy.com/resources/docs/dart/data-types), typically used with `double`, to a string representation with a fixed number of decimal places. If the number is an integer it will be converted to a `double` before computing the string representation.

## Syntax

```pseudo
doubleNumber.toStringAsFixed(fractionDigits);
```

- `doubleNumber`: Represents the number that we want to convert to `string`.
- `fractionDigits`: is the number of digits to the right of the decimal point in the resulting string.

## Example

The following example demonstrates how the `.toStringAsFixed()` method is used to convert a number to a string:

```dart
void main() {
  double number = 3.14159; 
  String stringNumber = number.toStringAsFixed(2);
  print("Output = ${stringNumber}");
}
```

The above code produces the following output:

```shell
Output = 3.14
```

> **Note:** The output 3.14 is a string. This can be confirmed by checking value.runtimeType.
