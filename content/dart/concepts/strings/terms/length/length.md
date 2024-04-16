---
Title: 'Length'
Description: 'Returns an integer specifying the number of characters in a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Map'
  - 'Dart'
  - 'Strings'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.length`** property in Dart returns an integer specifying the number of characters in a string (including spaces).

## Syntax

```pseudo
String.length;
```

## Example

Here is an example of how to use `length` in Dart:

```dart
void main() {

   // Declaring a string variable called "str"
   String str = "I love Codecademy";
   
   // String length
   int codecademy = str.length;

   // Print length
   print(codecademy);
}
```

The above code gives the following output:

```shell
17
```

## Empty string

The `length` of an empty string will always be zero:

```dart
void main() {

   String str = "";
   int len = str.length;
   print(len); // Output: 0
}
```