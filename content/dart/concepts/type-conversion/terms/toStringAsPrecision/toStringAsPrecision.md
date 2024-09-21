---
Title: '.toStringAsPrecision()'
Description: 'Converts a number to a double and returns a string representation with the specified number of significant digits.'
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

In Dart, **`.toStringAsPrecision()`** is a method used to convert a number to a `double`. It returns a `string` representation of that value with a specified precision of significant digits.

## Syntax

```pseudo
number.toStringAsPrecision(int precision)
```

- `number`: A double-precision floating-point number to be converted to a string representation.
- `precision`: Specifies the number of significant digits in the resulting string representation of the double-precision floating-point number. It must be an integer between 1 and 21, inclusive.

## Example

The following example illustrates how the `.toStringAsPrecision()` method is utilized to convert this number to a double and returns a string representation of that value:

```dart
void main() {
  String a1 = 1.toStringAsPrecision(2);
  print("Output = " + a1);
  String a2 = 1e15.toStringAsPrecision(3);
  print("Output = " + a2);
  String a3 = 1234567.toStringAsPrecision(9);
  print("Output = " + a3);
}
```

The above code produces the following output:

```shell
Output = 1.0
Output = 1.00e+15
Output = 1234567.00
```

> **Note:**: To determine the type of the output at runtime, use the `.runtimeType` property.
