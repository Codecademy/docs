---
Title: 'Loops'
Description: 'C++ has two types of loops: For and While. Loops execute the same group of statements multiple times until the condition is no longer true.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Loops'
  - 'While'
  - 'For'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **loop** can execute a statement or group of statements multiple times and the following is the general form of a loop statement in most programming languages.

## While Loop

A `while` loop statement repeatedly executes the code block within as long as the condition is true. The moment the condition becomes false, the program will exit the loop.

> **Note:** The `while` loop might not ever run. If the condition is initially `false`, the code block will be skipped.

```cpp
while (password != 1234) {
  std::cout << "Try again: ";
  std::cin >> password;
}
```

## For Loop

A `for` loop executes a code block a specific number of times. It has three parts:

- The initialization of a counter
- The continue condition
- The increment/decrement of the counter

This example prints 0 to 9 on the screen:

```cpp
for (int i = 0; i < 10; i++) {
  std::cout << i << "\n";
}
```
