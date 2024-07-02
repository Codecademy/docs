---
Title: '.toStringAsExponential()'
Description: 'Converts a number to its exponential notation in a string format.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dart'
  - 'String'
  - 'Method'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.toStringAsExponential()`** method in Dart is used for type conversion, converting a number to exponential notation and then converting it to a string format. It can be applied to both integers and doubles.

## Syntax

```pseudo
number.toStringAsExponential([int fractionDigits])
```

- `number`: This refers to a numeric value, either an integer or a double, on which the `.toStringAsExponential()` method is called.
- `fractionDigits`: An integer ranging from 0 to 20 indicating the digits after the decimal point. If not specified, it defaults to as many digits as needed for accuracy.

## Example

The example below shows the usage of `.toStringAsExponential()` method:

```dart
void main() {
  double number = 23625.585;
  String result1 = number.toStringAsExponential();
  String result2 = number.toStringAsExponential(5);
  print("Without fraction digits: ${result1}");
  print("With fraction digits: ${result2}");
}
```

This Dart example uses `.toStringAsExponential()` on a double to show both default and customized exponential notation with 5 fraction digits specified. This generates the following output:

```shell
Without fraction digits: 2.3625585e+4
With fraction digits: 2.36256e+4
```
