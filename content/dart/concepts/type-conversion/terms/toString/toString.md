---
Title: '.toString()'
Description: 'Converts the object into a string representation.'
Subjects:
 - 'Computer Science'
 - 'Mobile Development'
 - 'Code Foundations'
Tags:
 - 'Dart'
 - 'Data Types'
 - 'Strings'
 - 'Method'
CatalogContent:
 - 'learn-dart'
 - paths/computer-science'
---

In Dart, the **`.toString()`** method converts the object into a string representation.

## Syntax

```pseudo
val.toString()
```

Above, `typeObject.toString()` is calling the `toString()` method on the object `val`. This method returns a string representation of the object.

## Example

The following example demonstrates the usage of the `.toString()` method is used to convert numbers to a string:

```dart
void main() {
  int numbers = 123;
  var result = numbers.toString();
  print(result);
}
```

The code shown above will generate the output:

```shell
123
```

**Note:** The output '123' is a string. This can be confirmed by checking 'result is String' and 'result.runtimeType'.
