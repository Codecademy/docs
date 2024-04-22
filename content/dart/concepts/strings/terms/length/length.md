---
Title: '.length'
Description: 'Returns the number of characters within a given string.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Strings'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the `.length` property returns the number of characters within a given string, including emojis and special symbols. The characters are measured in _UTF-16 code units_.

> **Note:** The _UTF-16 code units_ refer to the number of 16-bit values used to encode the characters in the string.

## Syntax

```pseudo
string.length;
```

- `string`: The name of the string to be checked.

## Examples

The following example demonstrates the use of the `.length` property:

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

The above code produces the following output:

```shell
17
19
```

> **Note:** The emoji `😍` takes 2 _UTF-16 code units_.

The following example computes the length of an empty string:

```dart
void main() {
  String emptyString = "";

  int lengthOfEmptyString = emptyString.length;

  print(lengthOfEmptyString);
}
```

The output for the above code is as follows:

```shell
0
```
