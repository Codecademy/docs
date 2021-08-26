---
Title: "Comments"
Subjects:
  - "Code Foundations"
  - "Computer Science"
Tags: 
  - "Comments"
  - "Documentation"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Single-line Comments

Single-line comments are created using two consecutive forward slashes. The compiler ignores any text after `//` on the same line.

```c
// This line will denote a comment in C
```

## Multi-line Comments

Multi-line comments are created using `/*` to begin the comment, and `*/` to end the comment. The compiler ignores any text in between.

```c
/* 
This is all commented out.
None of it is going to run!
*/
```

## Header Comment

Multi-line comments can be used to create a header comment at the top of the file.

```c
/******************************************************************
* FILENAME: hello.c
* DESCRIPTION: This program prints a message to the screen.
* AUTHOR: Sonny Li
* DATE: 2022
* CHANGES: N/A
******************************************************************/
```

## Example

Here's a program with a multi-line comment and two single-line comments:

```c
/* Tip Calculator
Written by Sonny */

#include <stdio.h>

int main() {
  // Calculate the tip
  double total = 18.75;
  double tip = total * 0.2;
  
  // Display the tip
  printf("The tip is $%.2f\n", tip);
  return 0;
}
```
