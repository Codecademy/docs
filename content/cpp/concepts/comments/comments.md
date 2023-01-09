---
Title: 'Comments'
Description: 'A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **comment** is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Single-line Comments

Single-line comments are created using two consecutive forward slashes. The compiler ignores any text after `//` on the same line.

```cpp
// This line will denote a comment in C++
```

## Multi-line Comments

Multi-line comments are created using `/*` to begin the comment, and `*/` to end the comment. The compiler ignores any text in between.

```cpp
/*
This is all commented out.
None of it is going to run!
*/
```

## Codebyte Example

Here's a program with a multi-line comment and two single-line comments:

```codebyte/cpp
/* Tip Calculator
Written by Sonny */

#include <iostream>

int main() {
  // Calculate the tip
  double total = 18.75;
  double tip = total * 0.2;

  // Display the tip
  std::cout << "The tip is $" << tip;
}
```
