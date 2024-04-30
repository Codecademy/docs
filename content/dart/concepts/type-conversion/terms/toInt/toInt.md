---
Title: '.toInt()'
Description: 'Converts numeric values to integers.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Data Types'
  - 'Integers'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.toInt()`** method is used to convert numeric values, like doubles or strings representing numbers, into integers.

## Syntax

```pseudo
numericValue.toInt()
```

Here, `numericValue` can be any numeric value, such as a double or a string representing a number.

## Example

In the following example, the `.toInt()` method is used to convert the value of `myNumber` from a double to an integer.

```dart
void main() {
  var myNumber = 10.4;
  var result = myNumber.toInt();
  print(result);
}
```

The code will return the following output:

```shell
10
```
