---
Title: 'Data Types'
Description: 'C’s most basic data types are known as primitive data types and are in the system by default.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Booleans'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
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

Ints contains only integral values. A minus sign preceding the data type indicates that the value is negative.
They can be expressed in hexadecimal notation (base 16).\*

\* Hexadecimal integer literals begin always with the 0 followed by either an `x` or `X`, followed by different combinations of digits going from `0` through `9`, and the letters `a` through `f` or `A` through `F`.

```c
int = 0;
int = -5;
int = 20;
int rgbColor = 0XFFEF0D; // Hexadecimal
```

Spaces aren't allowed between digits and the values larger than 999 don't use commas.

```c
int hundreds = 12,000; // This is wrong
int hundreds2 = 12000 // Correct!
```

### Float and Double

Floats are used to store floating-point numbers, values that contain decimal places. They can be expressed in scientific notation\* and has 6 decimal digits of precision.

\*Scientific notation is a form of expressing numbers that are too large or too small to be conveniently written in decimal form. E.g. `6.022E23`

Doubles are the same but they are used when more precision is required. They have 15 decimal digits of precision.

```c
float salary = 523.45;
double bankTransaction = 245.2518;
float counterFactor = 15.87e4;
```

### Char

Chars allows its variables to store only a single character a letter, number, space, punctuation mark or symbol. Single quotes are used to represent them. They only occupy one byte in memory.
In C, a sequence of chars are called [strings](https://www.codecademy.com/resources/docs/c/strings).

```c
char a = 'a';
```

## Memory Size

| Type   | Size    | Value Range                     |
| ------ | ------- | ------------------------------- |
| Char   | 1 byte  | -128 to 127 or 0 to 255         |
| Int    | 4 bytes | -2,147,483,648 to 2,147,483,647 |
| Float  | 4 bytes | 1.2E-38 to 3.4E+38              |
| Double | 8 bytes | 1.7E-308 to 1.7E+308            |

## Static Typing

C is a statically-typed language (such as C++ and Java) where variable types are known at compile time instead of the runtime. In this case, types must be expressly indicated by the programmer.
