---
Title: 'Data Types'
Description: 'Data types are units of value stored in memory through variables, each with different functionalities and size-ranges.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Booleans'
  - 'Variable Types'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In C, **data types** are units of value stored in [memory](https://www.codecademy.com/resources/docs/c/memory-management) through [variables](https://www.codecademy.com/resources/docs/c/variables). Different kinds of data types determine their size and functionality.

## Static Typing

Like with C++ and Java, C is a statically-typed language where variable types are known at compile time instead of the [runtime](https://www.codecademy.com/resources/docs/general/runtime). In this case, types must be expressly indicated by the programmer.

Data type classifications supported in C include the following:

- Primitive data types
- User-defined data types
- Derived data types

Types also differ in the amount of memory they occupy and the range of values they can hold. This will depend on the compiler of the computer. An integer, for example, might take up 32 bits on one computer, or perhaps it might be stored in 64 bits on another.

## Primitive Types

These data types are mostly numeric (integers, doubles, floating-point numbers, etc.) and can be used for arithmetic operations like subtraction and division. Values that use the `void` keyword (for no data) are also regarded as primitive data types.

## Derived Data Types

These data types derive from primitive or fundamental data types. In C, these can be of three types:

- [Arrays](https://www.codecademy.com/resources/docs/c/arrays)
- [Functions](https://www.codecademy.com/resources/docs/c/functions)
- [Pointers](https://www.codecademy.com/resources/docs/c/pointers)

## User-defined Types

These are a collection of data with values that have fixed meanings that extend the primitive types already available. Users define them based on requirements. C consists of the following user-defined types:

- Enum
- [Structures](https://www.codecademy.com/resources/docs/c/structures)
- Typedef
- Union

## Memory Size

| Type   | Size    | Value Range                    |
| ------ | ------- | ------------------------------ |
| Char   | 1 byte  | -128 - 127 or 0 - 255          |
| Int    | 4 bytes | -2,147,483,648 - 2,147,483,647 |
| Float  | 4 bytes | 1.2E-38 - 3.4E+38              |
| Double | 8 bytes | 1.7E-308 - 1.7E+308            |

### Int

Ints contain only integral values. A minus sign preceding the data type indicates that the value is negative. They can be expressed in hexadecimal notation (base 16).

> **Note:** Hexadecimal integer literals begin always with the `0` followed by either an `x` or `X`, followed by different combinations of digits (`0` - `9`) and letters (`a` - `f` or `A` - `F`).

```c
int = 0;
int = -5;
int = 20;
int rgbColor = 0XFFEF0D; // Hexadecimal
```

Spaces aren't allowed between digits and the values larger than 999 don't use commas.

```c
int hundreds = 12,000; // This is wrong
int hundreds2 = 12000; // This is correct
```

### Float and Double

Floating-point values are non-whole numbers that contain decimal places. They can have up to 6 decimal digits of precision and can be expressed in scientific notation.

> **Note:** Scientific notation is a form of expressing numbers that are too large or too small to be conveniently written in decimal form (e.g., `6.022E23`).

Doubles are like floats but more precise with up to 15 decimal digits. The following is an example of `float` and `double` type values:

```c
float salary = 523.45;
double bankTransaction = 245.2518;
float counterFactor = 15.87E4;
```

### Char

Chars use single quotations marks `'` to represent single characters such as letters, [numbers](https://www.codecademy.com/resources/docs/general/data-types/number), [whitespace](https://www.codecademy.com/resources/docs/general/whitespace), special characters, and symbols. Each char only occupies one byte in memory. In C, sequences of chars are called [strings](https://www.codecademy.com/resources/docs/c/strings).

```c
char a = 'a';
```
