---
Title: '.toStringAsExponential()'
Description: 'Converts a number to its exponential notation in a string format.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'String'
  - 'Method'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.toStringAsExponential()`** method is a Dart type conversion method that first converts a number to its exponential notation, then changes it to a string format. It can be used on integers and doubles.

## Syntax

```pseudo
number.toStringAsExponential([int fractionDigits])
```

- `number`: an integer or double
- `fractionDigits`: The number of digits to appear after the decimal point. If not specified, the default is as many digits as necessary.

## Example

The example below shows how `.toStringAsExponential()` method is used:

```dart
void main() {
  double number = 23625.585;
  String result1 = number.toStringAsExponential();
  String result2 = number.toStringAsExponential(5);
  print("Without fraction digits: ${result1}");
  print("With fraction digits: ${result2}");
}
```
`toStringAsExponential(5)` specifies that we want 5 digits after the decimal point.

```shell
Without fraction digits: 2.3625585e+4
With fraction digits: 2.36256e+4
```
