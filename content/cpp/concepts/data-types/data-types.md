---
Title: "Data Types"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Data Types"
  - "Integers"
  - "Booleans"
  - "Characters"
  - "Strings"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

C++ provides a rather large number of types. However, you can write perfectly good programs using only five of those:

## Int

`int` is a type for storing integer (whole) numbers. An integer typically requires 4 bytes of memory space and ranges from -2³¹ to 2³¹.

```cpp
int year = 1991;
int age = 28;
```

## Double

`double` is a type for storing floating point (decimal) numbers. Double variables typically require 8 bytes of memory space.

```cpp
double price = 8.99;
double pi = 3.14159;
```

## Bool

`bool` is a type for storing true or false boolean values. Booleans typically require 1 byte of memory space.

```cpp
bool organ_donor = true;
bool late_to_work = false;
```

## Char

`char` is a type for storing individual characters. Characters are wrapped in single quotes '. Characters typically require 1 byte of memory space and range from -128 to 127.

```cpp
char grade = 'A';
char punctuation = '?';
```

## String

`std::string` is a type for storing text strings. Strings are wrapped in double quotes `"`.

```cpp
std::string message = "good nite";
std::string user = "@sonnynomnom";
```

## Datatype Modifiers

As the name implies, datatype modifiers are used with built-in data types to modify the length of data that a particular data type can hold. Data type modifiers in C++ are:

- `signed`
- `unsigned`
- `short`
- `long`

## Const

`const` (constant) variables cannot be changed by your program during execution.

```cpp
const double quarter = 0.25;
 
// and now variable quarter can only be 0.25
```

Simply add the keyword `const` before the data type during declaration to make the variable not modifiable.


## Type Conversion

A type cast is basically a conversion from one type to another.

The notation `(type) value` means “convert value to type“. So for example:

```cpp
double weight1;
int weight2;
 
weight1 = 154.49;
weight2 = (int) weight1;
 
// weight2 is now 154
```

**Note:** Going from a double to an int simply removes the decimal. There’s no rounding involved.

## Memory and Range

| Type | Memory | Range |
| --- | --- | --- |
| `char` | 1 byte | -127 to 127 or 0 to 255 |
| `unsigned char` |	1 byte	| 0 to 255|
| `signed char`	| 1 byte | -127 to 127 |
| `int` |	4 bytes	| -2147483648 to 2147483647 |
| `unsigned int` | 4 bytes | 0 to 4294967295 |
| `signed int` | 4 bytes | -2147483648 to 2147483647 |
| `short int` |	2 bytes	| -32768 to 32767 |
| `unsigned short int` | 2 bytes | 0 to 65535 |
| `signed short int` | 2 bytes | -32768 to 32767 |
| `long int` | 8 bytes	| -2,147,483,648 to 2,147,483,647 |
| `signed long int` | 8 bytes | same as long int |
| `unsigned long int` |	8 bytes |	0 to 4,294,967,295 |
| `long long int` |	8 bytes | -(2^63) to (2^63)-1 |
| `unsigned long long int` | 8 bytes | 0 to 18,446,744,073,709,551,615 |
| `float`	| 4 bytes	|
| `double` |	8 bytes |
| `long double` |	12 bytes|
| `wchar_t` |	2 or 4 bytes | 1 wide character |
 
