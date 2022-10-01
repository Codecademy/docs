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

The size of a given data type is measured in bytes:

| Data Type     | Memory Size |
| ------------- | ----------- |
| `bool`        | 1 byte      |
| `char`        | 1 byte      |
| `int`         | 4 bytes     |
| `float`       | 4 bytes     |
| `double`      | 8 bytes     |
| `std::string` | 24 bytes    |

## Integers

`int` is a type for storing integer (whole) numbers. An integer usually requires 4 bytes of memory space and ranges from -2<sup>31</sup> to 2<sup>31</sup>.

```cpp
int year = 1991;
int age = 28;
```

## double

The `double` type stores floating point (decimal) numbers. These variables usually require 8 bytes of memory space.

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

## Characters

The `char` type stores individual characters, wrapped in single quotes `'`. Characters usually require 1 byte of memory space and range from -128 to 127.

```cpp
char grade = 'A';
char punctuation = '?';
```

## string

[Strings](https://www.codecademy.com/resources/docs/cpp/strings) are character sequences wrapped in double quotes (e.g., `"Hello World!"`).
The `std::string` type is used for storing text strings. 

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

Constant variables cannot be changed by the program during execution. The `const` keyword can be added before the data type to make the variable immutable:

```cpp
const double quarter = 0.25;

// and now variable quarter can only be 0.25
```



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

> **Note:** Going from a double to an int simply removes the decimal. There’s no rounding involved.

Alternatively, there is a safer version of casting in C++ called `static_cast` that can be used. Performed at compile time, `static_cast` offers better debugging and safer code:

```cpp
double weight1 = 122.03;
int weight2 = static_cast<int>(weight1);
std::cout << weight2 << std::endl;
// Output: 122
```

> **Note:** Not all types can be converted:
```cpp
std::string s = static_cast<std::string>(weight2);
```

This throws the following error:
