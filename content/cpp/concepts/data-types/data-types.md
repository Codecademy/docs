---
Title: 'Data Types'
Description: 'C++ supports many data type that represent the size and kind of values being stored in memory.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Booleans'
  - 'Characters'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

C++ supports many **data types** that represent the size and kind of values being stored in memory.

## Memory Size

As noted above, the data type of a variable also specifies the size of the information that it can hold:

| Data Type     | Memory Size |
| ------------- | ----------- |
| `bool`        | 1 byte      |
| `char`        | 1 byte      |
| `int`         | 4 bytes     |
| `float`       | 4 bytes     |
| `double`      | 8 bytes     |
| `std::string` | 24 bytes    |

## int

`int` is a type for storing integer (whole) numbers. An integer typically requires 4 bytes of memory space and ranges from -2<sup>31</sup> to 2<sup>31</sup>.

```cpp
int year = 1991;
int age = 28;
```

## double

`double` is a type for storing floating point (decimal) numbers. Double variables typically require 8 bytes of memory space.

```cpp
double price = 8.99;
double pi = 3.14159;
```

## bool

`bool` is a type for storing true or false boolean values. Booleans typically require 1 byte of memory space.

```cpp
bool organ_donor = true;
bool late_to_work = false;
```

## char

`char` is a type for storing individual characters. Characters are wrapped in single quotes '. Characters typically require 1 byte of memory space and range from -128 to 127.

```cpp
char grade = 'A';
char punctuation = '?';
```

## string

[std::string](https://www.codecademy.com/resources/docs/cpp/strings) is a type for storing text strings. Strings are wrapped in double quotes: `"Hello World!"`.

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

## const

`const` (constant) variables cannot be changed by the program during execution.

```cpp
const double quarter = 0.25;

// and now variable quarter can only be 0.25
```

Simply add the keyword `const` before the data type to make the variable immutable.


## Type Conversion

A type cast is basically a conversion from one type to another.

The notation `(type) value` means “convert value to type“. So for example:

```cpp
double weight1;
int weight2;

weight1 = 154.49;
// assigned a double value
weight2 = (int) weight1;
// weight2 is now 154 due to explicit type conversion
int weight3 = weight1;
// weight3 is also 154 due to implicit conversion by the compiler
```

**Note:** Going from a double to an int simply removes the decimal. There’s no rounding involved.

Alternatively, there is a safer version of casting in C++ called `static_cast` that can be used. Performed at compile time, `static_cast` offers better debugging and safer code:

```cpp
double weight1 = 122.03;
int weight2 = static_cast<int>(weight1);
std::cout << weight2 << std::endl;
// 122
```

**Note:** Not all types can be converted:
```cpp
std::string s = static_cast<std::string>(weight2);
```

> note: no known conversion for argument 1 from ‘int’ to ‘std::__cxx11::basic_string<char>&&’