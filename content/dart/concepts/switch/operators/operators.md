---
Title: 'Operators'
Description: 'Operators in Dart are special symbols or phrases used to perform operations on variables and values.'
Subjects:
- 'Code Foundations'
- 'Developer Tools'
Tags: 
- 'Dart'
- 'Syntax'
- 'Operators'
- 'Programming'
- 'Data Structure'
CatalogContent: 
- 'learn-dart'
- 'paths/computer-science'
---

Operators in Dart are special symbols or phrases used to perform operations on variables and values. Dart, like many other programming languages, includes a variety of operators to manipulate data in different ways. These operators are categorized into several types based on their functionality: arithmetic, equality and relational, type test, logical, bitwise, and assignment operators.

## Syntax

Operators in Dart follow typical programming syntax and are used in conjunction with operands. The general syntax can be described as:

```dart
operand1 operator operand2
```

## Types of Operators

| Category                             | Operator | Description                                |
|--------------------------------------|----------|--------------------------------------------|
| **Arithmetic Operators**             | `+`      | Addition                                   |
|                                      | `-`      | Subtraction                                |
|                                      | `*`      | Multiplication                             |
|                                      | `/`      | Division                                   |
|                                      | `%`      | Modulus                                    |
|                                      | `~/`     | Truncating Division                        |
| **Equality and Relational Operators**| `==`     | Equal                                      |
|                                      | `!=`     | Not Equal                                  |
|                                      | `>`      | Greater Than                               |
|                                      | `<`      | Less Than                                  |
|                                      | `>=`     | Greater Than or Equal To                   |
|                                      | `<=`     | Less Than or Equal To                      |
| **Type Test Operators**              | `is`     | True if the object has the specified type  |
|                                      | `is!`    | True if the object does not have the specified type |
| **Logical Operators**                | `&&`     | Logical AND                                |
|                                      | `||`     | Logical OR                                 |
|                                      | `!`      | Logical NOT                                |
| **Bitwise Operators**                | `&`      | Bitwise AND                                |
|                                      | `|`      | Bitwise OR                                 |
|                                      | `^`      | Bitwise XOR                                |
|                                      | `~`      | Bitwise NOT                                |
|                                      | `<<`     | Left shift                                 |
|                                      | `>>`     | Right shift                                |
| **Assignment Operators**             | `=`      | Simple Assignment                          |
|                                      | `+=`     | Add and Assign                             |
|                                      | `-=`     | Subtract and Assign                        |
|                                      | `*=`     | Multiply and Assign                        |
|                                      | `/=`     | Divide and Assign                          |
|                                      | `%=`     | Modulus and Assign                         |
|                                      | `~/=`    | Truncating Divide and Assign               |

## Example:

Here is a simple Dart program that demonstrates the use of various operators:

```dart
void main() {
  // Arithmetic Operators
  int a = 10;
  int b = 5;
  print('a + b = ${a + b}');  // Output: 15
  print('a - b = ${a - b}');  // Output: 5
  print('a * b = ${a * b}');  // Output: 50
  print('a / b = ${a / b}');  // Output: 2.0
  print('a % b = ${a % b}');  // Output: 0
  print('a ~/ b = ${a ~/ b}'); // Output: 2

  // Equality and Relational Operators
  print('a == b: ${a == b}');   // Output: false
  print('a != b: ${a != b}');   // Output: true
  print('a > b: ${a > b}');     // Output: true
  print('a < b: ${a < b}');     // Output: false
  print('a >= b: ${a >= b}');   // Output: true
  print('a <= b: ${a <= b}');   // Output: false

  // Logical Operators
  bool x = true;
  bool y = false;
  print('x && y: ${x && y}');  // Output: false
  print('x || y: ${x || y}');  // Output: true
  print('!x: ${!x}');         // Output: false

  // Bitwise Operators
  int c = 3; // 011 in binary
  int d = 5; // 101 in binary
  print('c & d: ${c & d}');   // Output: 1 (001 in binary)
  print('c | d: ${c | d}');   // Output: 7 (111 in binary)

  // Assignment Operators
  int e = 5;
  e += 2;   // e = e + 2
  print('e: $e');  // Output: 7
}
```

```shell

```
