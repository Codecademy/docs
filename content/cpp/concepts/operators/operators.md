---
Title: 'Operators'
Description: 'C++ supports different types of operators such as arithmetic, relational, and logical operators.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

C++ supports different types of **operators** such as arithmetic, relational, and logical operators.

## Arithmetic Operators

Arithmetic operators can be used to perform common mathematical operations:

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` modulo (yields the remainder)

```cpp
int x = 0;

x = 4 + 2;  // x is now 6
x = 4 - 2;  // x is now 2
x = 4 * 2;  // x is now 8
x = 4 / 2;  // x is now 2
x = 4 % 2;  // x is now 0
```

## Relational Operators

Relational operators can be used to compare two values and return true or false depending on the comparison:

- `==` equal to
- `!=` not equal to
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

```cpp
if (a > 10) {
  // ☝️ means greater than
}
```

## Logical Operators

Logical operators can be used to combine two different conditions.

- `&&` requires both to be true (`and`)
- `||` requires either to be true (`or`)
- `!` negates the result (`not`)

```cpp
if (coffee > 0 && donut > 1) {
  // Code runs if both are true
}

if (coffee > 0 || donut > 1) {
  // Code runs if either is true
}

if (!tired) {
  // Code runs if tired is false
}
```

> **Note:** Operator overloading is possible in C++. This means that operators can be used with custom types. For example, the `+` operator can be used to add two custom defined classes together. See [overloading](https://www.codecademy.com/resources/docs/cpp/overloading).

Below are some other operators that are used in C++:
