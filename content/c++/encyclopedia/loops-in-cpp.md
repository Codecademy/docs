---
Title: "Loops in C++"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Loops"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## While Loop

A `while` loop statement repeatedly executes the code block within as long as the condition is true. The moment the condition becomes false, the program will exit the loop.

Note that the while loop might not ever run. If the condition is false initially, the code block will be skipped.

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