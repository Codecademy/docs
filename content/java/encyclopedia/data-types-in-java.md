---
Title: "Data Types in Java"
Subjects:
  - "Computer Science"
Tags: 
  - "Data Types"
  - "Integers"
  - "Strings"
  - "Booleans"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-java"
  - "https://www.codecademy.com/learn/paths/computer-science"
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

In Java, the type of a variable is checked at compile time. This is known as static typing. It has the advantage of catching the errors at compile time rather than at execution time.

Variables must be declared with the appropriate data type or the program will not compile.

```java
int i = 10;           // type is int
char ch = 'a';        // type is char

j = 20;               // won't compile, no type is given
char name = "Sonny";  // won't compile, wrong data type
```
