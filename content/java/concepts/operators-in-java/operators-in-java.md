---
Title: "Operators in Java"
Subjects:
  - "Computer Science"
Tags: 
  - "Operators"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-java"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Arithmetic Operators

Basic math operations can be applied to `int`, `double`, and `float` data types:

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` modulo (yields the remainder)

These operations are not supported for other data types.

```java
int a = 20;
int b = 10;
 
int result;
 
result = a + b;  // 30
result = a - b;  // 10
result = a * b;  // 200
result = a / b;  // 2
result = a % b;  // 0
```

## Comparison Operators

Comparison operators can be used to compare two values:

- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to
- `==` equal to
- `!=` not equal to

They are supported for primitive data types and the result of a comparison is a boolean value `true` or `false`:

```java
int a = 5;
int b = 3;
 
boolean result = a > b;
// result now holds the boolean value true
```
