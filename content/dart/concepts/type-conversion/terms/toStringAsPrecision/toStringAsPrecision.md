---
Title: '.toStringAsPrecision()'
Description: 'Converts this number to a double and returns a string representation of that value.'
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

In Dart, **`.toStringAsPrecision()`** is an abstract method used to convert this number to a `double`. This method returns a string representation of that value with exactly precision significant digits.

## Syntax

```pseudo
String toStringAsPrecision(int precision);
```
The parameter `precision` must be an integer satisfying: 1 <= precision <= 21.

## Example

The following examples illustrates how the `.toStringAsPrecision()` method is utilized to convert this number to a double and returns a string representation of that value:

```dart
1.toStringAsPrecision(2)
1e15.toStringAsPrecision(3);
1234567.toStringAsPrecision(9) 
```

The above code produces the following outputs:

```shell
Output = 1.0
Output = 1.00e+15
Output = 1234567.00
```