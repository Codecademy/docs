---
Title: 'Data Types'
Description: 'Java’s most basic data types are known as primitive data types and are in the system by default. The available types are as follows: - int - char - boolean - byte - long'
Subjects:
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Booleans'
CatalogContent:
- "learn-c"
- "paths/computer-science"
---

## Basic Data Types

C supports many different types of variables and each type of variable is used for storing some type of data.

Some examples of basic data types in C are:

- `int` - numbers (non-decimal)
- `float` - decimal numbers
- `double` - decimal numbers (stores more data than float)
- `char` - characters

The difference between the types is in the amount of memory they occupy and the range of values they can hold. This will depend on the computer running since it's machine dependent. An integer might take up 32bits on one computer, or perhaps it might be stored in 64bits.

### Data types examples

```c
int age = 25;
float = 125.8;
double = 3.2325467;
char = 'T';
```
### Int

It contains only integral values. A minus sign preceding the data type indicates that the value is negative.
Can be expressed in hexadecimal notation (base 16).

```c
int = 0;
int = -5;
int = 20;
int rgbColor = 0XFFEF0D;
```
Spaces aren't allowed between digits and the values larger than 999 don't need a comma.

```c
int hundreds = 12,000; // This is wrong
int hundreds2 = 12000 // Correct!
```

### Float and Double

Floats are used to store floating-point numbers, values that contain decimal plates. They can be expressed in scientific notation and has 6 decimal digits of precision.

Doubles are the same but they are needed when more precision is required since it has 15 decimal digits of precision.


```c
float salary = 523.45;
double bankTransaction = 245.2518;
float counterFactor = 15.87e4;
```

## Memory Size


| Type | Size | Value Range | Format Specifier |
| ---- | ---- | ----------- | ---------------- |
| Char | 1 byte | -128 to 127 or 0 to 255 | %c |
| Int | 4 bytes | -2,147,483,648 to 2,147,483,647  | %d |
| Float | 4 bytes | 1.2E-38 to 3.4E+38 | %f |
| Double | 8 bytes | 1.7E-308 to 1.7E+308 | %lf |

## Static Typing

C is a statically-typed language (such as C++ and Java) where variable types are known at compile time instead of the runtime. In this case, types must be expressly indicated by the programmer.
