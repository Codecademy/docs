---
Title: '.toDouble()'
Description: 'Returns the double representation of the number's value.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Dart'
  - 'Data Types'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **`.toDouble()`** is a method used to convert numeric [data types](https://www.codecademy.com/resources/docs/dart/data-types), such as `int`, into its double-precision floating-point representation.

## Syntax

```pseudo
numericValue.toDouble();
```

- `numericValue`: Represents the variable that we want to convert to `double`.

## Example

```dart
void main() {
  int number = 3; 
  double value = number.toDouble();
  print("Output = ${value}");
}
```

The above code returns the following output:

```shell
Output = 3.0
```
