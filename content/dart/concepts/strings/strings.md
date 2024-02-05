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

A **String** is a sequence of characters \(such as letters, numbers, and symbols) that is used to represent text. It is a data type designed specifically for handling textual data. Strings are enclosed in single \(') or double \(") quotes.

Single-line strings are represented using single or double quotes.
Triple quotes are used to represent multi-line strings.

## Syntax

```dart
void main() {
  String singleQuoteString = 'This is a Dart string with single quote.';
  String doubleQuoteString = "This is a Dart string with double quotes."
  print(singleQuoteString);
  print(doubleQuoteString);
}
```

The output is:

```shell
This is a Dart string with single quote.
This is a Dart string with double quotes.

```dart
void main() {
  String multiLineString = '''
    This is a multi-line
    string in Dart using single quotes.
    It allows you to write
    text across multiple lines.
  ''';
  print(multiLineString);
}
```

```
void main() {
  String multiLineString = """
    This is a multi-line
    string in Dart using double quotes.
    It allows you to write
    text across multiple lines.
  """;
  print(multiLineString);
}
```

- `void`: Indicates that the `main` function does not return any value. In Dart, a function's return type can be specified, and `void` means the function does not return anything.
- `main()`: This is the name of the function. main is the standard name for the entry point in Dart programs.
- `\`: Use to escape characters like quotes within a string.
- `$`: Use to embed expressions within a string \(String interpolation).

## Example

In the following example, the `string` statement is used to determine and print a message based on the value of the `String` variable `name` and `int` variable `age`:

```
void main() {
  String name = "Alice";
  int age = 30;
  String interpolatedString = "Hello, my name is $name and I am $age years old.";
  print(interpolatedString);
}
```

In the following example, triple single quotations are used for displaying the multiple-lined **string** statement:

```
void main() {
  String multiLineString = '''
    This is a multi-line
    string in Dart.
    It allows you to write
    text across multiple lines.
  ''';
  print(multiLineString);
}
```

It\'s important to escape single quotes in a string.

```
void main() {
  String variable_name = 'It\'s important to escape single quotes in a string.';
  print(variable_name);
}
```
