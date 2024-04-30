---
Title: '.toString()'
Description: 'Returns a string which represents the underlying type.'
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

In Dart, the **`.toString()`** method Returns a string representation of an object.

## Syntax

```pseudo
val.toString()
```

Above, `val.toString()` is calling the `toString()` method on the object `val`. This method returns a string representation of the object.

## Example

In the Example below, the `.toString()` method is used to convert numbers to a string.

```dart
void main() {
  int numbers = 123;
  var result = numbers.toString();
  print(result);
}
```

The code shown above will generate the output:

```shell
'123'
```




