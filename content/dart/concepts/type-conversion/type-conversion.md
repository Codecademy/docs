---
Title: 'Type Conversion'
Description: 'The process of changing the data type of a value from one type to another.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Dart'
  - 'Dart Operators'
  - 'Data Types'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **type conversion** refers to the process of converting a value from one [data type](https://www.codecademy.com/resources/docs/dart/data-types) to another. Dart supports both implicit and explicit type conversion.

## Implicit Type Conversion

Implicit type conversion is done automatically when operations involving different numeric types are performed.

### Example

In the following example, the data type of `intValue` is implicitly converted from an `int` (10) to a `double` (10.0) to perform the addition with `doubleValue`:

```dart
void main() {
  int intValue = 10;
  double doubleValue = .5;

  // Demonstrating implicit type conversion during arithmetic operation
  double result = intValue + doubleValue;

  print(result);
}
```

This produces the following output:

```shell
10.5
```

## Explicit Type Conversion

Explicit type conversion or **type casting** is done by programmers using predefined functions or methods to convert values from one type to another. The following are the methods for explicit type conversion:

- `toString()`: Converts a value to a string.
- `toDouble()`: Converts a value to a double.
- `toInt()`: Converts a value to an integer.
- `parse()`: Converts a string to a numeric type.
- `tryParse()`: Similar to `parse()`, but returns `null` if the conversion fails.

### Example

In this example, the `toString()` method is explicitly called on `intValue` to convert the default integer type to a string:

```dart
void main() {
  var intValue = 42;
  var stringValue = intValue.toString(); // Explicit toString() call

  print(stringValue);
}
```

The output is as follows:

```shell
42
```
