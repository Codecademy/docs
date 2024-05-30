---
Title: 'Strings'
Description: 'A "String" is the text enclosed in quotes, such as "Hello, Dart". It represents words or sentences and is used for handling and manipulating text in coding.'
Subjects: 
  - 'Developer Tools'
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

A **String** is a sequence of characters (such as letters, numbers, and symbols) that is used to represent text. It is a data type designed specifically for handling textual data. Strings are enclosed in single (') or double (") quotes. Single-line strings are represented using single or double quotes. Triple quotes are used to represent multi-line strings.

## Syntax

Here is the syntax for single, double and triple quoted strings in dart:
```psuedo
  String singleQuoteString = 'This is a Dart string with a single quote.';
  String doubleQuoteString = "This is a Dart string with double quotes."
  String multiLineString = '''
    This is a multi-line
    string in Dart using a single quote.
    It allows you to write
    text across multiple lines.
  ''';
```

## Example

In the following example, the `string` statement is used to determine and print a message based on the value of the `String` variable `name` and `int` variable `age`:

```dart
void main() {
  String name = "Alice";
  int age = 30;
  String interpolatedString = "Hello, my name is $name and I am $age years old.";
  print(interpolatedString);
}
```

The code gives the following output:

```shell
Hello, my name is Alice and I am 30 years old.
```

It\'s important to escape single quotes in a string.

```
void main() {
  String variable_name = 'It\'s important to escape single quotes in a string.';
  print(variable_name);
}
```
