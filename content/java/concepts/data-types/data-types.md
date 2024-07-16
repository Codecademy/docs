---
Title: 'Data Types'
Description: 'Java’s most basic data types are known as primitive data types and are in the system by default.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Strings'
  - 'Booleans'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, each variable has a property known as its data type which determines what kind of data can be stored in that variable. Data types are divided into two categories, [primitive data types](#primitive-data-types) and [reference data types](#reference-data-types). Java is a [statically-typed](#static-typing) language.

## Primitive Data Types

Java’s most basic data types are known as primitive data types and are in the system by default.

The primitive data types in Java are listed in the table below:

| Data Type | Size (bits)           | Default Value(for fields) | Description                                                               |
| --------- | --------------------- | ------------------------- | ------------------------------------------------------------------------- |
| `byte`    | 8                     | `0`                         | Represents whole numbers ranging from -128 to 127.                        |
| `short`   | 16                    | `0`                         | Stores smaller whole numbers, from -32,768 to 32,767.                     |
| `int`     | 32                    | `0`                         | Represents whole numbers from -2,147,483,648 to 2,147,483,647.            |
| `long`    | 64                    | `0L`                        | Represents very large whole numbers, ranging from -2^63 to 2^63-1.        |
| `float`   | 32                    | `0.0f`                      | Stores floating-point numbers with up to 7 decimal digits of precision.   |
| `double`  | 64                    | `0.0d`                      | Stores floating-pointl numbers with up to 15 decimal digits of precision. |
| `boolean` | Not precisely defined | `false`                     | Holds only two possible values: `true` and `false`.                            |
| `char`    | 16                    | `'\u0000'`                  | Stores a single character, including letters and ASCII values.                        |

Here's an example demonstrating the usage of these primitive data types:

```java
byte smallNumber = 100;
short mediumNumber = 30000;
int largeNumber = 2000000000;
long veryLargeNumber = 9223372036854775807L;
float decimalNumber = 3.14f;
double preciseDecimal = 3.14159265359;
boolean isJavaFun = true;
char letter = 'A';
```

## Reference Data Types

Reference data types, also known as object data types, are data types which are defined by the user and are references to a specific object.

Reference data types include:

- Annotations - allow metadata to be associated with elements of a program
- [Arrays](https://www.codecademy.com/resources/docs/java/arrays) - store elements of the same type
- [Classes](https://www.codecademy.com/resources/docs/java/classes) - provide a template for object creation
- [Enumeration](https://www.codecademy.com/resources/docs/java/enums) - stores a fixed set of constants
- [Interfaces](https://www.codecademy.com/resources/docs/java/interfaces) - store a template for a class

## Static Typing

In Java, the type of variable is checked at compile time. This is known as static typing. It has the advantage of catching the errors at compile time rather than at execution time.

Variables must be declared with the appropriate data type or the program will not compile.

```java
int i = 10;           // Type is int
char ch = 'a';        // Type is char

j = 20;               // Won't compile, no type is given
char name = "Sonny";  // Won't compile, wrong data type
```
