---
Title: 'Variables'
Description: 'Explanation of variables and their usage in Dart programming language.'
Subjects:
  - 'Mobile Development'
Tags:
  - 'Variables'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'intro-to-flutter'
---

In Dart, **variables** are storage blocks that contain modifiable information during the execution of a program. They are essential for software development, as they allow storing, manipulating, and referencing data. We will explore the basics of variables in Dart, including their declaration, syntax, and practical examples.

## Syntax

### Variable Declaration

In Dart, you can declare a variable using the var keyword, followed by the variable name and optionally its type.

```dart
// Variable declaration
var age = 25;
var height = 1.75;
var name = "Ana";
var isStudent = true;
```

#### Variable Names

It is crucial to follow certain rules when naming variables in Dart:

- They must start with a letter or underscore (\_).
- They can contain letters, numbers, and underscores.
- They cannot start with a number.
- They cannot be a reserved word.

_Valid examples:_

```dart
var fullName;
var _address;
var numberOfStudents;
```

#### Data Types (Mention)

Although we won't delve into data types, it's important to mention that Dart is a statically typed language. This means that each variable has a specific data type.

- **int:** Integer numbers.
- **double:** Floating-point numbers.
- **String:** Text strings.
- **bool:** Boolean values (true or false).
- **dynamic:** Dynamic type that can store any data type.

### Constant Declaration

In Dart, you can declare constants using the final or const keyword.

```dart
// Constant declaration
final int fixedNumber = 10;
const double pi = 3.1416;
```

#### Differences between final and const

- **final:** Evaluated at runtime and can have a value assigned at runtime.
- **const:** Must have a constant value at compile-time.

## Local Variables

### Variable Scope

In Dart, variables can have a local scope, meaning they are only accessible within a specific code block, such as a function.

```dart
void exampleFunction() {
  var localVariable = "Visible only here";
  print(localVariable);
}
```

The localVariable is only visible within the exampleFunction.

## Examples

### Print Variables

To display the value of a variable in the console, you can use the print() function along with the variable name.

```dart
print("Name: $name");
print("Age: $age");
print("Height: $height");
print("Is student? $isStudent");
```

### Variable Modification

You can change the value of a variable by reassigning it with a new value.

```dart
age = 26;
print("New: $age");

age = 28;
print("New age: $age");
```

### Dynamic Variables

Dart also supports dynamic variables through the dynamic keyword. These can store any data type.

```dart
dynamic dynamicVariable = "Hello";
print("Dynamic variable: $dynamicVariable");

dynamicVariable = 42;
print("Modified dynamic variable: $dynamicVariable");
```
