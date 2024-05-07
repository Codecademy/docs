---
Title: '.toString()'
Description: 'Converts the object into a string representation.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dart'
  - 'Data Types'
  - 'Method'
  - 'Strings'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.toString()`** method converts the object into a string representation.

## Syntax

```pseudo
typeObject.toString()
```

Above, `typeObject.toString()` calls the `toString()` method on the object `typeObject`.

## Example

The following example demonstrates how the `.toString()` method is used to convert numbers to a string:

```dart
void main() {
  int numbers = 123;
  var result = numbers.toString();
  print(result);
}
```

The code shown above will generate the following output:

```shell
123
```

> **Note:** The output `123` is a string. This can be confirmed by checking `result is String` and `result.runtimeType`.
