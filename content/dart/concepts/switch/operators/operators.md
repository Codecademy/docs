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
  print('a + b = ${a + b}');  
  print('a - b = ${a - b}');  
  print('a * b = ${a * b}');  
  print('a / b = ${a / b}');  
  print('a % b = ${a % b}');  
  print('a ~/ b = ${a ~/ b}'); 

  // Equality and Relational Operators
  print('a == b: ${a == b}');   
  print('a != b: ${a != b}');   
  print('a > b: ${a > b}');     
  print('a < b: ${a < b}');     
  print('a >= b: ${a >= b}');   
  print('a <= b: ${a <= b}');   

  // Logical Operators
  bool x = true;
  bool y = false;
  print('x && y: ${x && y}');  
  print('x || y: ${x || y}');  
  print('!x: ${!x}');         

  // Bitwise Operators
  int c = 3; 
  int d = 5; 
  print('c & d: ${c & d}');   
  print('c | d: ${c | d}');   

  // Assignment Operators
  int e = 5;
  e += 2;  
  print('e: $e');  
}
```

The above code will give the following output: 

```shell
a + b = 15
a - b = 5
a * b = 50
a / b = 2
a % b = 0
a ~/ b = 2
a == b: false
a != b: true
a > b: true
a < b: false
a >= b: true
a <= b: false
x && y: false
x || y: true
!x: false
c & d: 1
c | d: 7
e: 7
```
