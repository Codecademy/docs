---
Title: 'Strings'
Description: 'Represents words or sentences and is used for handling and manipulating text.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

A **`String`** is a sequence of characters (such as letters, numbers, and symbols) that is used to represent text. It is a [data type](https://www.codecademy.com/resources/docs/dart/data-types) designed specifically for handling and manipulating textual data. Single-line strings are enclosed in single (') or double (") quotes, whereas triple quotes (''') are used to represent multi-line strings.

## Syntax

Here is the syntax for single, double, and triple quoted strings in Dart:

```psuedo
  String singleQuoteString = 'This is a Dart string with a single quote.';
  String doubleQuoteString = "This is a Dart string with double quotes.";
  String multiLineString = '''
    This is a multi-line
    string in Dart using a single quote.
    It allows to write
    text across multiple lines.
  ''';
```

## Example

The following example determines and prints a message based on the value of the `String` variable `name` and the `int` variable `age`:

```dart
void main() {
  String name = "Alice";
  int age = 30;
  String interpolatedString = "Hello, my name is $name and I am $age years old.";
  print(interpolatedString);
}
```

The above code gives the following output:

```shell
Hello, my name is Alice and I am 30 years old.
```
