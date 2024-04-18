---
Title: 'Type Conversion'
Description: 'The process of changing the data type of a value from one type to another.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Dart Operators'
  - 'Data Types'
  - 'Arithmetic'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **type conversion** refers to the process of converting a value from one data type to another. Dart supports both Implicit and Explicit type conversion.

## Implicit Type Conversion

Implicit type conversion is done automatically when operations involving different numeric types are performed.

### Example

```dart
void main() {
  int intValue = 10;
  double doubleValue = .5;

  // Demonstrating implicit type conversion during arithmetic operation
  double result = intValue + doubleValue;

  print(result);
}
```

The `Shell` output:

```shell
10.5
```

In the example, the `int` intValue (10) is implicitly converted to a `double` (10.0) to perform the addition with doubleValue. The resulting value is 10.5, as shown in the Shell output.

## Explicit Type Conversion

Explicit type conversion is done by the programmer using predefined functions or methods to convert values from one type to another. The following are the methods for Explicit type conversion:

- `toString()`: Converts a value to a string.
- `toDouble()`: Converts a value to a double.
- `toInt()`: Converts a value to an integer.
- `parse()`: Converts a string to a numeric type.
- `tryParse()`: Similar to `parse()`, but returns `null` if the conversion fails.

### Example

```dart
void main() {
  var intValue = 42;
  var stringValue = intValue.toString(); // Explicit toString() call

  print(stringValue);
```

The `Shell` output:

```shell
42
```
