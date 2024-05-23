---
Title: '.toStringAsFixed()'
Description: 'Converts a number to a string with a fixed number of decimal places.'
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

In Dart, **`.toStringAsFixed()`** is a method used to convert numeric [data types](https://www.codecademy.com/resources/docs/dart/data-types), typically used with `double`, to a string representation with a fixed number of decimal places. If the input number is an integer, it will first be converted to a `double` before computing the string representation.

## Syntax

```pseudo
numericValue.toStringAsFixed(fractionDigits);
```

- `numericValue`: Represents the numeric value to convert to a `string`. It can be either an `int` or a `double` data type.
- `fractionDigits`: An integer indicating the decimal places in the resulting string. It must be non-negative and will pad with zeros if greater than the actual decimal places in the number.

## Example

The following example illustrates how the `.toStringAsFixed()` method is utilized to convert a number into a string with the specified decimal digits:

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

> **Note:** The output 3.14 is a string. This can be confirmed by checking `value.runtimeType`.
