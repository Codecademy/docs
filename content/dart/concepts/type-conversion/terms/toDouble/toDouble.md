---
Title: '.toDouble()'
Description: 'Returns the double representation of the numerical value.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dart'
  - 'Data Types'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **`.toDouble()`** is a method used to convert numeric [data types](https://www.codecademy.com/resources/docs/dart/data-types), such as `int`, to their double-precision floating-point representation.

## Syntax

```pseudo
numericValue.toDouble();
```

- `numericValue`: Represents the variable that we want to convert to `double`.

## Example

The following example demonstrates how the `.toDouble()` method is used to convert a number to double:

```dart
void main() {
  int number = 3; 
  double value = number.toDouble();
  print("Output = ${value}");
}
```

The above code produces the following output:

```shell
Output = 3.0
```

> **Note:** The output 3.0 is a double. This can be confirmed by checking `value.runtimeType`.
