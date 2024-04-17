---
Title: '.length'
Description: 'Returns an integer specifying the number of characters in a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Length'
  - 'Dart'
  - 'Strings'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The `.length` property in Dart strings returns the number of characters, including emojis and special symbols. Characters are measured in Unicode _UTF-16 code units_.

> **Note:** The _UTF-16 code units_ refer to the number of 16-bit values used to encode the characters in the string.

## Syntax

```pseudo
String.length;
```

## Examples

The following example demonstrates the use of `.length` property:

```dart
void main() {
  String firstString = "I love Codecademy";
  String secondString = "I love Codecademy😍";
  int lengthOfFirstString = firstString.length;
  int lengthOfSecondString = secondString.length;
  print(lengthOfFirstString);
  print(lengthOfSecondString);
}
```

The above code gives the following output:

```shell
17
19
```

> **Note:** The emoji `😍` takes 2 UTF-16 units.

The following example computes the length of an empty string:

```dart
void main() {

   String emptyString = "";
   int lengthOfEmptyString = emptyString.length;
   print(lengthOfEmptyString);
}
```

The above code gives the following output:

```shell
0
```