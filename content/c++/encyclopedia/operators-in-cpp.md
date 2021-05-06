---
Title: "Operators in C++"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Operators"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Arithmetic Operators

C++ supports different types of arithmetic operators that can perform common mathematical operations:

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

Relational operators are used to compare two values and return true or false depending on the comparison:

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