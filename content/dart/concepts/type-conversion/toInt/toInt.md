---
Title: '.toInt()'
Description: 'Converts numeric values into integers and returns them.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
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

In Dart, the **`.toInt()`** method converts numeric values into integers. This method is the most useful when numeric values need to be treated as integers.

## Syntax

```pseudo
number.toInt()
```

- `number`: It is the chosen numeric value that needs to be converted into an integer value.

## Example

In the following example, the `.toInt()` method is used to convert `myNumber` into an integer value.

```dart
void main() {
  var myNumber = 10.4;
  var result = myNumber.toInt();
  print(result);
}
```

The code will return the following output

```dart
10
```