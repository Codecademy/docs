---
Title: 'User Input'
Description: 'In the C language, the scanf function stands for scan format and handles user input. It reads a formatted string from the standard input stream, which is usually the user keyboard.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Input'
  - 'Print'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The `scanf()` function, which stands for “scan format", reads a formatted string from the standard input stream, which is usually the user keyboard.

## Syntax

```pseudo
scanf("formatted string", &variable);
```

Here, the user can enter a value in the terminal, press <kbd>Enter</kbd>, and that number will get stored in the `pinNumber` variable.

```c
scanf("%d", &pinNumber);
```

**Note:** There's an ampersand `&` before the variable names in the arguments. The program will crash if there's a missing `&` sign.

## Example

In this example, the program will prompt the user to enter a number with `"Add tip amount: "`. Then the user can enter a number in the terminal, press <kbd>Enter</kbd>, and the number will get stored in the variable `tip`.

```c
#include <stdio.h>

int main() {
  float tip = 0.0;

  printf("Add tip amount: ");
  scanf("%f", &tip);

  printf("You gave a tip of $%.2f", tip);

  return 0;
}
```
