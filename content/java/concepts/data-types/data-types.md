---
Title: 'Data Types'
Description: 'Java’s most basic data types are known as primitive data types and are in the system by default. The available types are as follows: - int - char - boolean - byte - long'
Subjects:
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Strings'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

## Primitive Data Types

Java’s most basic data types are known as primitive data types and are in the system by default.

The available types are as follows:

- `int`
- `char`
- `boolean`
- `byte`
- `long`
- `short`
- `double`
- `float`

`null` is another, but it can only ever store the value null.

```java
int age = 28;
char grade = 'A';
boolean late = true;
byte b = 20;
long num1 = 1234567;
short no = 10;
float k = (float)12.5;
double pi = 3.14;
```

## Static Typing

In Java, the type of variable is checked at compile time. This is known as static typing. It has the advantage of catching the errors at compile time rather than at execution time.

Variables must be declared with the appropriate data type or the program will not compile.

```java
int i = 10;           // Type is int
char ch = 'a';        // Type is char

j = 20;               // Won't compile, no type is given
char name = "Sonny";  // Won't compile, wrong data type
```
